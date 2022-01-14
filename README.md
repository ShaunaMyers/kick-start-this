
# *Kickstart This*

Have you ever had an amazing idea for a product but you abandoned that idea because you didn't have the funding?! Kickstart This is the application for you. You can choose to browse products and help fund the dreams of others, or you can add your own product to eventually recieve funding.

### Table of Contents
- [Overview](#overview-and-project-goals)
- [Installation & Viewing](#installation-and-viewing)
- [Learning Goals](#learning-goals)
- [Technologies Used](#technologies-used)
- [Functionality](#functionality)
- [Future Additions](#future-additions)
- [Contributors](#contributors)


## Overview and Project Goals

Welcome to Kickstart This - The goal of this application was to stretch boundaries by learning new technologies by employing new concepts. The server was built using Express and the database was built using PostgreSQL. The frontend was built using React, TypeScript, and materials-ui.

Focus was paid on MVC architecture: separating concerns and thinking about what components held on to state (controllers) and what components affected the view. An example of this is found in the App component

- The fetching of data is first trigged in useEffect
  - Fetch requests (for GET, POST, PUT, PATCH, and DELETE) are contained in their own file (apiCalls.ts), a further separation of concerns.
- When data is returned it is set to state
- App continues to hold on to state and passes it on to the components that need it only to render the view
- Each child component only holds on to the state it needs
  - The input field values from the form, when a user creates a product (in CreateProduct component)
  - Error messages that are saved to state to allow for the rendering of user friendly messages 


## Installation and Viewing 

### Deployment

This application will be deployed at a future date, due to new Typescript additions being added.

## The Express server is located in another repo [here](https://github.com/ShaunaMyers/kick-start-this-api)

To view the application on your local device:

- Clone down this repository
- CD into the repository
- Run `npm i` in your terminal
- Run `npm start` in your terminal
- To run a server locally, find instructions [here](https://github.com/ShaunaMyers/kick-start-this-api)
- For later additions: You will not need to clone our API as this project will be deployed to Heroku

### Learning Goals

To solidify and demonstrate the understanding of:

- The ability to independently learn a new technology
- Building a server through Express
- Establishing and seeding a database using PostgreSQL
- Deploying a database
- Building a frontend using React to display data
- Implementing TypeScript
- Using an [external API](https://stripe.com/) to allow users to make payments


### Technologies Used

<p text-align="center"> 
    <img alt="React Badge" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)" />
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="HTML5 Badge" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" />
    <img alt="CSS3 Badge" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" />
    <img alt="Sass Badge" src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" />
    <img alt="TypeScript" src="https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/" />
</p>

## Functionality 

#### View All Products
- A user may view all products on main page<br>
<img width="1440" alt="Screen Shot 2022-01-13 at 5 47 39 PM" src="https://user-images.githubusercontent.com/74690897/149432019-3024aa9e-bd12-48d8-9bb7-124804eb201d.png">




#### View Specific Product
- The user may click "more info" on the product to see it in greater detail<br>
<img width="1440" alt="Screen Shot 2022-01-13 at 5 47 19 PM" src="https://user-images.githubusercontent.com/74690897/149432030-ae4c5e0b-1841-419c-8fd7-2eb35f044d8d.png">




#### Choose to add a Product
- The user may click on a plus icon in the top right and can fill out a form to add their own product<br>
<img width="1440" alt="Screen Shot 2022-01-13 at 5 49 37 PM" src="https://user-images.githubusercontent.com/74690897/149432187-b379b0d6-2516-40ae-9742-9110671eabbc.png">


#### Choose to Delete a Product
- The user may type in "adminview" at the end of the url and will be taken to an admin page where they can delete products<br>
  - *In future additions This functionality will only be available after logging in. Each user could then edit or delete their own products
<img width="1438" alt="Screen Shot 2022-01-13 at 5 50 21 PM" src="https://user-images.githubusercontent.com/74690897/149432252-124d4803-b9ea-407c-83b4-26c498b44188.png">



#### Choose to donate
- The user may click on a donate button on a specific product and will be taken to a payment form<br>

<img width="1439" alt="Screen Shot 2022-01-13 at 5 51 20 PM" src="https://user-images.githubusercontent.com/74690897/149432340-7d1ffced-3ad6-4554-ae13-966bf887ff1d.png">




## Future Additions

- Deployment after all TypeScript errors have been addressed
- Styling- MUI components need some custom styling added and this was a task that was too big to take on while learning PostGres, Express, TypeScript, and trying to implement the Stripe API
- Connect to Stripe API so that users can submit payments to fund products
- *Log-in funcionality- so users can:
  - favorite products
  - save payment information for future use
  - add their own products
  - erase their own products
- *Users can choose to be notified about similar types of products (if they have donated or favorited products)
  - Add "types" as a column to the database table
- *Share*: ability to share products they like so that fundraising can happen more quickly
- *Users can choose to receive periodic emails about a product's progress towards its goal

### Want to Contribute?
If you would like to contribute, please fork this repository and clone it down to your local machine. Once you've successfully implemented the changes in code necessary for your intended contribution without changing any of the current functionality of main, submit a pull request for authors to review the changes.


### Authors
- [Shauna Myers](https://github.com/ShaunaMyers)


**************************************************************************

**[Back to top](#table-of-contents)**

