"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, CartaAval, Clave
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity
create = Blueprint('create', __name__)
take = Blueprint('take', __name__)
ask = Blueprint('ask', __name__)

@create.route('/user', methods=['POST'])
def user():
    body= request.json
    email=body.get('email', None)
    password= body.get('password', None)
    cedula = body.get('cedula', None)
    name= body.get('nombre', None)
    lastname= body.get('apellido', None)
    saldo = 0
    if email is None or password is None or name is None or lastname is None or cedula is None:
        return jsonify(" revise el payload de su solicitud...."),400
    new_user=User(email, password, name, lastname, cedula, saldo)
    return jsonify(new_user.serialize()),201

@create.route('user/<int:user_cedula>', methods=['GET', 'PUT'])
def saldo(user_cedula):
    if request.method == 'GET':
        user = User.query.filter_by(cedula=user_cedula).one_or_none()  
        
        return jsonify(user.serialize()), 200
    else:
        user = User.query.filter_by(cedula=user_cedula).one_or_none()

        saldo = request.json["saldo"]  
        user.saldo = saldo

        db.session.commit()

        return jsonify("listo")

@create.route("/token", methods=["POST"])
def handle_token():
    body = request.json
    email=body.get('email',None)
    password=body.get('password',None)
    user=User.query.filter_by(email=email).one_or_none()
    if user is None: return jsonify(
        "No existe el usuario"
    ), 400
    valid=user.check_password(password)
    if not valid:
        return jsonify ("credenciales invalidas"), 400
    auth=create_access_token(identity=user.id)
    return jsonify ({
        "token": auth,
        "user": user.serialize()
    }), 200


@take.route('/poliza', methods=['GET'])
@jwt_required()
def get_poliza(): 
    user_id = get_jwt_identity()
    user =  User.query.get(user_id)

    return jsonify({"id": user.id, "email": user.email, "poliza": user.poliza }), 200

@take.route('/verification', methods=['POST'])
def verification():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)

    user=User.query.filter_by(email=email).one_or_none()
    if user is None: return jsonify(
        "Verifique el payload"
    ), 400

    _verification = user.check_password(password)
    if not _verification:
        return jsonify ("revise el paiload"), 400

    return jsonify("listo"),200

@ask.route('/aval', methods=['POST'])
def ask_aval():
    body= request.json
    poliza=body.get('poliza', None)
    presupuesto=body.get('presupuesto', None)
    motivo= body.get('motivo', None)
    lugar = body.get('lugar', None)
    fecha = body.get('fecha', None)
    uso_personal = body.get('uso_personal', None)
    
    if poliza is None or presupuesto is None:
        return jsonify(" no mando el payload requerido..."),400
    
    poliza = User.query.filter_by(poliza=poliza).one_or_none()
    user_id = poliza.id
    _poliza = poliza.poliza
    saldo = poliza.saldo
    _presupuesto = User.subtract_saldo( saldo, int(presupuesto))

    if _presupuesto <= 0:
        return jsonify("no tiene suficiente presupuesto"), 400

    poliza.saldo= _presupuesto
    db.session.commit()
    new_aval = CartaAval(motivo, lugar, fecha, user_id, uso_personal, _poliza)
    
    return jsonify(new_aval.serialize()),201

@ask.route('/clave', methods=['POST'])
def ask_clave():
    body= request.json
    poliza=body.get('poliza', None)
    lugar = body.get('lugar', None)
    # fecha = 11012003

    if poliza is None:
        return jsonify(" no mando el payload requerido..."),400

    poliza = User.query.filter_by(poliza=poliza).one_or_none()
    user_id = poliza.id
    _poliza = poliza.poliza
    clave=Clave( lugar, user_id,_poliza)
    return jsonify(clave.serialize()),201


@ask.route('/aval/<int:aval_poliza>', methods=['GET'])
def get_avals(aval_poliza):
    aval = CartaAval.query.filter_by(poliza=aval_poliza)

    aval_map = list(map(
        lambda aval: aval.serialize(),
        aval
    ))
    return jsonify(aval_map), 200


@create.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200