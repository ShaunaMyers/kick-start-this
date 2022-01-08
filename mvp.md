## Phase 1/MVP - Sprint 1

##### Home Page/Products Page  
* As a user, when I visit the application home page I can view kickstarter products (with images, name, and amount of funding needed for each. 
    * Should be able to see each product's image, name, & amount of funding goal
    * Should be able to see a tab in the upper right: "Add your product idea"
<br />

##### Product View
* As user, I can click on a specific product to view that product in greater detail:
    * When I click on that product I should be able to see that product's image, name, description, amount of funding goal, & funds raised.
    * I should also be able to see a button, labeled "donate"
    * I should also see a link that allows me to continue browsing all the kickstarter products
<br />

##### Donation Form
 * As a user, I can click the "donate" button and will be taken to a payment form (using Stripe API) 
    * This payment form should accept my name, email, and payment details (credit card)
    * When I enter in my details and press "donate" again, I should see a confirmation message, saying that that my payment was successful
    * When I see the confirmation message I should also see a link that will allow me to return to browse kickstarter products
<br />

##### Add Kickstarter Product
* As a user, I should see a tab in the navigation bar that, when clicked will take me to a page with a form that will allow me to add my own product
* I should be able to enter in product user name, user email, product title, description, funding goal amount, image(s)
* When I click on button to create my product I should see a confirmation message, letting me know that my prodcut was successfully created/added
* When I see the confirmation message I should also see a link that will allow me view that product 
* When I see the confirmation message I should also see a link that will allow me to return to browse kickstarter products
<br />

## Phase 2/Nice to Have Features/ Future Additions
* User should be able to search, from the home page, for specific types of products, add types to form so user can select from a drop down menu of product types
* User has option to login to their account, or to create an account, after pressing the "donate" button for a specific product (authentication)
* User can add bank details to their account so that when any of their kickstarter products receive funding, they receive the money (authentication)
* User has option to contribute to a kickstarter product using a monthly payment plan/subscription
* User sees a checkbox during payment that allows user to choose to receive periodic emails about the product's progress towards its funding goal
* User sees a checkbox during payment that allows user to choose to receive periodic emails about similar kickstarter ideas
* User's that login (login/make account link would be visible in in navbar) could view past payments with associated kickstarter product's details
* User would have a favorites tab (in navbar) after loggin in, which would allow user to favorite any kickstarter products, to easily save them for the future
* User would receive suggestions (after logging in) about products they might be interested in, based on their past purchases and favorited selections
