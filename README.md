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

### GET /user/:user_id/list

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

### GET /user/:user_id/list/:id

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

### POST /user/:user_id/list

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

### DELETE user/:user_id/list/:id

_This route is used to delete a list item._ 

POST [herokuapp.com/login]

### PATCH user/:user_id/list/:id

_This route is used to edit a list item (title, picture and/or description)._ 

POST [herokuapp.com/login]

### GET /list/:list_id/images

_This route is used to view all images (by list id #)._ 

GET [TBD]

#### Response:
    [
      {
        "id": 1,
        "list_id": 7,
        "url": "https://i1.wp.com/farm3.static.flickr.com/2619/3852962067_f79cc29265_z.jpg",
        "caption": "This is my first batch of fresh mozzarella. Yum!",
        "like_count": 0,
        "created_at": "2016-11-29 10:40:15",
        "updated_at": "2016-11-29 10:40:15"
      }
    ]

### GET /list/:list_id/images/:id

_This route is used to view a single image._ 

GET [TBD]

#### Response:
    [
      {
        "id": 1,
        "list_id": 7,
        "url": "https://i1.wp.com/farm3.static.flickr.com/2619/3852962067_f79cc29265_z.jpg",
        "caption": "This is my first batch of fresh mozzarella. Yum!",
        "like_count": 0,
        "created_at": "2016-11-29 10:40:15",
        "updated_at": "2016-11-29 10:40:15"
      }
    ]


### DELETE /list/:list_id/images/:id

_This route is used to delete a single image._ 

DELETE [TBD]


### POST /list/:list_id/images

_This route is used to upload an image._ 

POST [TBD]

#### Params:

* caption: string
* url: string
* like_count: integer
* list_id: string

Returns 201 'Created on Success'. 

#### Request:

    {
    "url": "https://i1.wp.com/farm4.staticflickr.com/3763/10311582684_db6e1483d3_z.jpg",
    "caption": "Throw it on a margherita pizza. Delish!"
    } 


#### Response:

    {
      "id": 3,
      "list_id": 7,
      "url": "https://i1.wp.com/farm4.staticflickr.com/3763/10311582684_db6e1483d3_z.jpg",
      "caption": "Throw it on a margherita pizza. Delish! ",
      "like_count": 0,
      "created_at": "2016-11-30 09:27:37",
      "updated_at": "2016-11-30 09:27:37"
    }

### GET /image/:image_id/comments

_This route is used to view comments (by image id #)._ 

### GET /image/:image_id/comment/:id

_This route is used to view a single comment._ 

### DELETE /image/:image_id/comment/:id

_This route is used to delete a comment._ 

### PATCH /image/:image_id/comment/:id

_This route is used to edit a comment._ 
