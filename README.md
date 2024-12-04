This project is an Online Footwear Shopping website named "GROOVY KICKS".

It is created using MERN (MongoDB, Express, React, Nodejs).

multer is used as a middleware for image upload.

To make it more dynamic, the database is created using MongoDb Atlas.
The userid and passowrd to access the database are testgroovykicks and 12345 respectively.
There are two tables in the database:
1. Products
2. Users

The Folder Groovy Kicks has two folders Frontend and Backend.
To run the project follow the given steps:
--Open the folder in VSCode Environment
--To run the Backend, open Backend in integrated terminal an type command "node .\index.js".It will show the message in terminal "Server running on Port 4000".
--To run the frontend, open Frontend folder in integrated terminal and run the command "npm init".

The project has all working and active links.
There are three users created already with following email id and passwords:
user 1 email id - "test@gk.com"
user 1 password - "1234"

user 2 email id - "test2@gk.com"
user 2 password - "1234"
(For the sample, this user has 6 products added in his cart already.)

user 3 email id - "bcu@gmail.com"
user 3 password - "1234"

user 4 email id - "testgk@groovykicks.com"
user 4 password - "1234"

The website has 4 main tabs- Home, Men, Women and Kids. Apart from them there is a Login button and Cart icon on the NavBar.

New user can be created by clicking Login button-->create an account Click here option.A signup Page will be displayed.

No two users can have the same email id, the error message will be displayed.

The Login button acts as a toggle button, after login into account it turn into Logout.

The user can add and remove items from the cart.

The project is able to retain the cart values even after logging out, if the user login again with the same id and password, the previous cart state will be visible.

The website has made fully responsive for all screen types. Hover effect is also applied on category pages like men, women and kids.

