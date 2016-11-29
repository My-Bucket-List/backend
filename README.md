### POST /register

_This route is used to register a new user._

POST [herokuapp.com/register]

#### Params:

* email: string
* username: string
* password: string
* auth_token: string
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

_This route is used to login an existing user._ 

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

### GET /lists

_This route is used to view all lists (submitted by all users)._ 

GET [TBD]

#### Response:

        [
          {
            "id": 5,
            "user_id": null,
            "title": "Trek the Patagonia",
            "url": "http://foundtheworld.com/wp-content/uploads/2016/09/Patagonia-Argentina-3.jpg",
            "description": "Stay at a ranch  Estancia Telken offers a welcoming stay in the pretty countryside of Los Antiguos. This 1915 working sheep and horse ranch 25km south of Perito Moreno has about 210 sq km of horseback riding and hiking possibilities, including a worthwhile meander along a creek bed up to the basalt plateau Meseta de Lago Buenos Aires.",
            "completed": 0,
            "created_at": "2016-11-28 16:41:14",
            "updated_at": "2016-11-28 16:41:14"
          },
          {
            "id": 6,
            "user_id": 2,
            "title": "Trek the Patagonia",
            "url": "http://foundtheworld.com/wp-content/uploads/2016/09/Patagonia-Argentina-3.jpg",
            "description": "Stay at a ranch  Estancia Telken offers a welcoming stay in the pretty countryside of Los Antiguos. This 1915 working sheep and horse ranch 25km south of Perito Moreno has about 210 sq km of horseback riding and hiking possibilities, including a worthwhile meander along a creek bed up to the basalt plateau Meseta de Lago Buenos Aires.",
            "completed": 0,
            "created_at": "2016-11-28 16:42:04",
            "updated_at": "2016-11-28 16:42:04"
          }
        ]

### GET /lists/:user_id

_This route is used to view the list of a single user._ 

GET [TBD]

#### Response:
    [
      {
        "id": 3,
        "user_id": 1,
        "title": "Visit Bryce Canyon National Park",
        "url": "http://www.brycecanyon.org/wp-content/uploads/2016/05/0841-Bryce-Canyon-Viewers.jpg",
        "description": "Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations. The park’s main road leads past the expansive Bryce Amphitheater, a hoodoo-filled depression lying below the Rim Trail hiking path. It has overlooks at Sunrise Point, Sunset Point, Inspiration Point and Bryce Point.",
        "completed": 0,
        "created_at": "2016-11-28 16:32:01",
        "updated_at": "2016-11-28 16:32:01"
      }
    ]

### GET /lists/:user_id/list/:id

_This route is used to view a single list item (from the list of a single user)._ 

GET [TBD]

#### Response:
    [
      {
        "id": 3,
        "user_id": 1,
        "title": "Visit Bryce Canyon National Park",
        "url": "http://www.brycecanyon.org/wp-content/uploads/2016/05/0841-Bryce-Canyon-Viewers.jpg",
        "description": "Bryce Canyon National Park, a sprawling reserve in southern Utah, is known for crimson-colored hoodoos, which are spire-shaped rock formations. The park’s main road leads past the expansive Bryce Amphitheater, a hoodoo-filled depression lying below the Rim Trail hiking path. It has overlooks at Sunrise Point, Sunset Point, Inspiration Point and Bryce Point.",
        "completed": 0,
        "created_at": "2016-11-28 16:32:01",
        "updated_at": "2016-11-28 16:32:01"
      }
    ]

### POST /lists/:user_id

_This route is used to create a new list item._ 

POST [herokuapp.com/login]

#### Params:

* title: string
* username: string
* url: string
* description: string
* completed: boolean
* user_id: integer
* id: integer

Returns 201 'Created on Success'. 

#### Request:

        {
        "title": "Make mozzarella cheese",
        "url": "https://smittenkitchendotcom.files.wordpress.com/2015/05/roasted-peppers-with-capers-and-mozzarella1.jpg?w=500",
        "description" : "Knowing how to make your own mozzarella is a dangerous thing..."
        } 


#### Response:

    {
      "title": "Make mozzarella cheese",
      "url": "https://smittenkitchendotcom.files.wordpress.com/2015/05/roasted-peppers-with-capers-and-mozzarella1.jpg?w=500",
      "description": "Knowing how to make your own mozzarella is a dangerous thing. Knowing that at any moment, should the desire present itself, you could whip up your very own ball of creamy mozzarella, still warm from the whey whence it came? Yes. Very, very dangerous. Here's how to do it. http://www.thekitchn.com/how-to-make-homemade-mozzarella-cooking-lessons-from-the-kitchn-174355",
      "user_id": "1",
      "created_at": "2016-11-29 10:23:08",
      "updated_at": "2016-11-29 10:23:08",
      "id": 7
    }
