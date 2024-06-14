# 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)

# Cloning the Repository

git clone https://github.com/pradyotsrivastava/shoppers-ecom-mern.git

# Installation

Install the project dependencies using npm:

npm install

# Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

DATABASE =
EMAIL = 
PASSWORD = 

Replace the placeholder values with your actual MongoDB credentials. 
And you can obtain these mailing credentials by signing in on this link...
https://myaccount.google.com/u/3/apppasswords?
Then create "App Password" and then generate "PASSWORD" and paste it in .env file


# Running the Project

For client :-

cd .\client

npm start

Open http://localhost:3000 in your browser to view the project.



For Server :-

cd .\server

nodemon .\app.js

Open http://localhost:4002 in your browser to view the project.

