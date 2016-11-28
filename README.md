### POST /register

This route is used to register a new user. 

POST [herokuapp.com/register]

#### Params:

* email: string
* username: string
* password: string
* auth_token: string (coming soon!)
* id: integer

Returns 201 'Created on Success'. (Failure message coming soon!)

#### Request:

        {
        "email": "alex@gmail.com",
        "username": "Alex", 
        "password": "cookies"
        } 


#### Response:

        {
          "email": "alex@gmail.com",
          "username": "Alex",
          "password": "$2a$10$1O7NB31SdXkCQADjOAEKmO0yoU9abwwyU4nVRXwIeLpl03F4/VtDu",
          "created_at": "2016-11-28 13:31:03",
          "updated_at": "2016-11-28 13:31:03",
          "id": 1
        }

### POST /login

This route is used to login an existing user. 

POST [herokuapp.com/login]

#### Params:

* username: string
* password: string
* auth_token: string
* id: integer

Returns 201 'Created on Success' or 401 'Unprocessable entity' in case of failure. 

#### Request:

        {
        "username": "Alex", 
        "password": "cookies"
        } 


#### Response:

        {
          "id": 1,
          "email": "alex@gmail.com",
          "username": "Alex",
          "created_at": "2016-11-28 13:31:03",
          "updated_at": "2016-11-28 13:31:03",
          "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjozLCJpYXQiOjE0ODAzNjM2Njl9.vXu2PWLIW-PSzeho_8qb3mYpSYYPfhzV27CyCM1ONLY"
        }
