"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from api.models import check_password
from flask_jwt_extended import create_access_token
c
reate = Blueprint('create', __name__)

@create.route('/user', methods=['POST'])
def user():
    body= request.json
    email=body.get('email', None)
    password= body.get('password', None)
    name= body.get('nombre', None)
    lastname= body.get('apellido', None)

    if email is None or password is None or name is None or lastname is None:
        return jsonify(" revise el payload de su solicitud...."),400
    new_user=User(email, password, name, lastname)
    return jsonify(new_user.serialize()),201

@create.route("/token", methods=["POST"])
def handle_token():
    body = request.json
    email=body.get('email',None)
    password=body.get('password',None)
    if email is None: return jsonify(
        "revisar de nuevo"
    ), 400
    user=User.query.filter_by(email=email).one_or_one()
    if user is None:
        return jsonify("no existe usuario"), 404
    if password!=user.password:
        return jsonify ("password incorrecto"), 400
    auth=create_access_token(identity=user.id)
    return jsonify ({
        "token": auth
    }), 200

    return jsonify(user.serialize()), 201


@create.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200