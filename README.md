### POST /register

This route is used to register a new user. 

POST [herokuapp.com/register]

#### Params:

* email: string
* username: string
* password: string
* auth_token: string (not yet functional)

Returns 201 'Created on Success' ... or something else on failure

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
          "id": 3
        }
