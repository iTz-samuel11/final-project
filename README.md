## Pasos para inicializar el repo de manera correcta

1. `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. `$ pipenv run upgrade`
6. `$ pipenv run start`

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Correr el servidor en la nube (debes hacer primero los pasos de arriba):

1. `$ npm install`
2. `$ npm run start`

## Integrantes

- Alberto Moreno "https://github.com/Alb3rnaru"

- Daniela Giménez "https://github.com/danielagimeneez"

- Samuel Faraco "https://github.com/iTz-samuel11"

- Valeria Zampetti "https://github.com/ValeriaZampetti"
