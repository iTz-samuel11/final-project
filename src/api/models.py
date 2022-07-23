from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    client = db.Column(db.Boolean(), unique=False, nullable=False)
    nombre= db.Column(db.string(120), nullable=False)
    apellido= db.Colum(db.string(120), nullable= False)

    def __init__(self,email,password,nombre,apellido):
        self.email=email
        self.password=password
        self.client= False
        self.nombre=nombre
        self.apellido=apellido

        db.session.add(self)
        db.session.commit()


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.nombre,
            "lastname": self.apellido,
            # do not serialize the password, its a security breach
        }