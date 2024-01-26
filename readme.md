# Seal Project 2

- **My Name: Timothy Rodriguez**
- **App Name: Tattooly**
- **Description: Tattooly is a tattoo planning app allowing for profile customizability, session saving, and everything needed for your next tattoo appointment! Create an account and begin adding your favorite tattoo reference photos, editing your budget, and updating your calendar for your next appointment. Enjoy, and make this app your canvas!!**
- **Github URL: (https://github.com/timorodr/Project-2)**
- **Deployed Website: (https://project2-crud.onrender.com)**
- **Trello Board: (https://trello.com/invite/b/YY0hXs2m/ATTI1a0be98bb1bfb0dadfb8e32cca847aa7A9AA61C0/project-2)**

## List of Dependencies

##### Node Dependencies (package.json)

- Express.js, morgan, method-override, express-session, bcrypt, connect-mongo, dotenv, ejs, mongoose, mongoDB

##### Frontend 

- HTML, CSS, Javascript

## Route Map


| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Tattoos Index | /tattooly | GET | Renders all tattoos on a page|
| Tattoos New | /tattooly/new | GET | Renders form page for new post|
| Tattoos Create | /tattooly | POST | Creates new post from form and redirects to index|
| Tattoos Edit | /tattooly/:id/edit | GET | Renders form page to edit post|
| Tattoos Update | /tattooly/:id | PUT | Updates post from form|
| Tattoos Delete | /tattooly/:id | DELETE | Deletes a post using speific ID|
| Tattoos Show | /tattooly/:id | GET | Renders show page with post user clicked|
| User Sign up | /user/signup | GET | Provides sign up form for the user|
| User Create | /user/signup | POST | Creates new user|
| User Login | /user/login | GET | Provides login form for user with active account|
| User Login | /user/login | POST | Authenticates user and redirects to /tattooly|
| User Edit | /user/:id/edit | GET | Renders edit form for user handle and profile picture|
| User Edit | /user/:id/editcalendar | GET | Renders modal to edit user appointment calendar|
| User Edit | /user/:id/editbudget | GET | Renders modal to edit user tattoo budget|
| User Update | /user/:id | PUT | Updates user info from edit form|


## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Design Mockup](https://i.imgur.com/Ve1vT7s.png)
![Mobile Design Mockup](https://i.imgur.com/dWWhQwG.png)
![Mobile Design Mockup](https://i.imgur.com/jECJFnG.png)
![Mobile Design Mockup](https://i.imgur.com/13T0C1r.png)

##### Desktop Design

![Desktop Design Mockup](https://i.imgur.com/WZtieNM.png)
![Desktop Design Mockup](https://i.imgur.com/xHfUTo4.png)
![Desktop Design Mockup](https://i.imgur.com/i0vEDWE.png)
![Desktop Design Mockup](https://i.imgur.com/niRUMU8.png)

## ERD (Entity Relationship Diagram)

![Entity Relationship Diagram](https://i.imgur.com/MDt0z9M.png)
