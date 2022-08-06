from flask_sqlalchemy import SQLAlchemy
from base64 import b64encode
from werkzeug.security import generate_password_hash, check_password_hash
import os
from random import randint
from datetime import datetime, timezone

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
    
    def subtract_saldo(saldo, subtract):
        _saldo = saldo-subtract
        
        return _saldo
        

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.nombre,
            "lastname": self.apellido,
            "cedula": self.cedula,
            "saldo": self.saldo
        }

class CartaAval(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    poliza = db.Column(db.Integer, nullable=False)
    motivo = db.Column(db.String(600), nullable=False)
    lugar = db.Column(db.String(80), nullable=False)
    fecha_a_pedir = db.Column(db.Integer, nullable=False)
    fecha_solicitada = db.Column(db.DateTime, nullable=False)
    uso_personal = db.Column(db.Boolean())

    def __init__(self, motivo, lugar, fecha_a_pedir, user_id, uso_personal, poliza):
        self.motivo = motivo
        self.poliza = poliza
        self.lugar = lugar
        self.fecha_a_pedir = fecha_a_pedir
        self.user_id = user_id
        self.uso_personal = uso_personal
        self.fecha_solicitada = datetime.now(timezone.utc)

        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return{
            "motivo": self.motivo,
            "lugar": self.lugar,
            "fecha_solicitada": self.fecha_solicitada.isoformat(),
            "fecha_a_pedir": self.fecha_a_pedir,
            "uso_personal": self.uso_personal,
            "user_id": self.user_id
        }

class Clave(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    lugar = db.Column(db.String(80), nullable=False)
    fecha_solicitada = db.Column(db.DateTime, nullable=False)
    poliza= db.Column(db.Integer, nullable=False)

    def __init__(self, lugar, user_id, poliza):
        self.lugar = lugar
        self.fecha_solicitada = datetime.now(timezone.utc)
        self.user_id = user_id
        self.poliza = poliza
        db.session.add(self)
        db.session.commit()

    def serialize(self):
        return{
            "lugar": self.lugar,
            "fecha_solicitada": self.fecha_solicitada.isoformat(),
            "user_id": self.user_id,
            "poliza": self.poliza
        }


