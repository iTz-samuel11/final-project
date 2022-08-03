from flask_sqlalchemy import SQLAlchemy
from base64 import b64encode
from werkzeug.security import generate_password_hash, check_password_hash
import os
from random import randint

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre= db.Column(db.String(120), nullable=False)
    apellido= db.Column(db.String(120), nullable= False)
    cedula= db.Column(db.Integer)
    poliza= db.Column(db.String(10))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False, default="default")
    user_salt = db.Column(db.String(120), nullable=False)
    client = db.Column(db.Boolean(), unique=False, nullable=False)
    saldo = db.Column(db.Integer)

    def __init__(self,email,password,nombre,apellido,cedula, saldo):
        self.email=email
        self.client= False
        self.nombre=nombre
        self.apellido=apellido
        self.cedula = cedula
        self.saldo = 0
        self.poliza = self.gererate_poliza(cedula)
        self.user_salt = b64encode(os.urandom(32)).decode("utf-8")
        self.set_password(password)
        
        db.session.add(self)
        db.session.commit()

    def set_password(self, password):
        self.password_hash = generate_password_hash(f"{password}{self.user_salt}", salt_length=len(self.user_salt))

    def check_password(self,password):
        return check_password_hash(self.password_hash, f"{password}{self.user_salt}")

    def gererate_poliza(self, cedula):
        poliz = randint(0, 99)
        return f'{cedula}{poliz}'
    
    def get_member(self, id):
        for user in self.cedula:
            if user['cedula'] == self.cedula:
                return user 

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.nombre,
            "lastname": self.apellido,
            "cedula": self.cedula,
            "saldo": self.saldo
        }