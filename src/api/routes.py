"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

create = Blueprint('create', __name__)


@create.route('/users', methods=['POST'])
def users():
    body= request.json
    email=body.get('email', None)
    password= body.get('password', None)

    if email is None or password is None:
        return jsonify(" revise el payload de su solicitud...."),400
    new_user=User(email, password)
    return jsonify(new_user.serialize()),201


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200