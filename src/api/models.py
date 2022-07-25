from flask_sqlalchemy import SQLAlchemy
from base64 import b64encode
from werkzeug.security import generate_password_hash
import os

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre= db.Column(db.String(120), nullable=False)
    apellido= db.Column(db.String(120), nullable= False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    # password = db.Column(db.String(80), unique=False, nullable=False)
    password_hash = db.Column(db.String(250), nullable=False, default="default")
    user_salt = db.Column(db.String(120), nullable=False)
    client = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self,email,password,nombre,apellido):
        self.email=email
        # self.password=password
        self.client= False
        self.nombre=nombre
        self.apellido=apellido
        self.password_hash = generate_password_hash(f"{password}{self.user_salt}")
        self.user_salt = b64encode(os.urandom(32)).decode("utf-8")

        db.session.add(self)
        db.session.commit()

    def set_password(self, password):
        self.password_hash = generate_password_hash(f"{password}{self.user_salt}", salt_length=len(self.user_salt))

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.nombre,
            "lastname": self.apellido,
            # do not serialize the password, its a security breach
        }