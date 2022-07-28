## Pasos para inicializar el repo de manera correcta

1. `$ pipenv install`
2. `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
3. `$ pipenv run upgrade`
4. `$ pipenv run start`

### Correr el servidor en la nube (debes hacer primero los pasos de arriba):

1. `$ npm install`
2. `$ npm run start`

### Pasos para instalar jwt en caso de que te de error el import

1. `$pipenv install flask-jwt-extended`

### En caso de que se borre en env el logo pegar esto en env.

1. `LOGO=https://res.cloudinary.com/dn7fj8zhu/image/upload/v1659050255/Logotipo_formal_escudo_le%C3%B3n_seguro_borravino-2_g8icis.png`
   `

## Integrantes

- Alberto Moreno [alb3rnaru](https://github.com/Alb3rnaru)

- Daniela Giménez [danielagimeneez](https://github.com/danielagimeneez)

- Samuel Faraco [iTz-samuel11](https://github.com/iTz-samuel11)

- Valeria Zampetti [ValeriaZampetti](https://github.com/ValeriaZampetti)
