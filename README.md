# Be-Panic-App-Front-End

## Original Intent

To create a e-commerce shop focused on panic-buying.

## MVP

- working database
- working api with all crud operations
- models for products, reviews, users
- displaying items on the home page
- basket
- authentication

## Bonus

- sending out emails
- admin and super admin consoles for controlling products and user access
- intake form for address and payment details
- buttons for removing and adding items in the basket page
- search function
- filtering on product page
- having buyer and seller access to the page

## Running the apps

we used react to build the app and to test the front-end we used the script 'npm run start:client' and for the back-end we used 'npm start dev'

npm install for the dependencies

## Where we ended up

we have most of the elements that we wanted to create
we changed the vision as necessary as our vision for the project continued.
for example:

- we removed the product on the home page in favour of having a central search bar that would take you directly to the product you need
- we don't have the filtering section of the product page due to having to remove redux
- there is no message to mention that the search returns no result in the product page

## Screenshots and Wireframes

![alt text](https://user-images.githubusercontent.com/64632596/137585118-de0ee6ad-acb8-4ed3-837f-20197b5ee2ce.png 'Wireframe Home')

![alt text](https://user-images.githubusercontent.com/64632596/137585393-15cc645b-a9b6-4fe1-b619-7b8fd67c8078.png 'Wireframe Product Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585446-9342b2ef-b92b-46c3-8cf6-d2492c6f953b.png 'Wireframe Single Product Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585510-7a355b97-b1a4-4828-ba3e-f93d8abe5f7f.png 'Wireframe Register Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585530-8412e219-dfa8-42df-bb74-b0e079782cdf.png 'Wireframe Login Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585562-e4cd87d2-4a5d-4cc4-9b96-cefecb4f50be.png 'Wireframe Search Not Found')
![alt text](https://user-images.githubusercontent.com/64632596/137585585-9d1631df-1d3b-4b7e-844a-fc2e62577688.png 'Wireframe Admin Product Console')
![alt text](https://user-images.githubusercontent.com/64632596/137585612-5534fbd5-8624-4b94-ad01-f01dc5ba7721.png 'Wireframe User Management Console')
![alt text](https://user-images.githubusercontent.com/64632596/137585640-d54448cd-2dce-4ee5-a034-737f08e07521.png 'Wireframe Basket Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585668-827f48b0-590b-490d-8a59-559ef4ea2acd.png 'Wireframe Address page')
![alt text](https://user-images.githubusercontent.com/64632596/137585683-6b23b61b-2313-4074-af09-7c3023efd4d5.png 'Wireframe Payment Page')
![alt text](https://user-images.githubusercontent.com/64632596/137585704-981d80cd-28eb-4b07-8d44-5e70de1e8418.png 'Wireframe Confirmation Page')

## Highlights

- Building a functioning fullstack app
- Fun idea for the project
- Getting the api and database working
- using a Kanban board to manage the project and sharing out tasks
- being close to a full ecommerce shop that could take orders
- using figma as a wireframing tool to create a vision of a final result.

## Struggles

- linking the frontend to the back end
- webpack configurations, having to change versions
- getting to use the email handler when called in the API
- issues with model: hard to make a reusable model for forms and reviews making code very long
- getting the basket items to get removed in the api
- Animated Basket:

  With our initial idea we wanted to display the typical Ecommerce basket, along with the basket item total number inside of the NavBar. Through brainstorming we narrowed down to the idea of using ’Toastify’ notifications or ‘Redux’; finally settling on Redux. The learnings from this meant that we were able to display the following:

  - A product page in gallery form - this had a ‘Buy Now’ button for shoppers who know what they want
  - Individual product pages - which showed all of the details present in the product schema, along with an ‘Add to Basket’ button
  - An animated icon in the NavBar - that displayed the number of selected items next to the basket
  - A basket page - which listed the selected items, allowed customers to edit the qty and remove items from their basket selection. This page also displayed the total basket value amount, and had a ‘Proceed to Checkout’ button

  Once this was complete, we attempted to integrate the components with the rest of the app to link to the API. This is where the struggles began, and we soon learnt that it is better to do either or, rather than a hybrid of ‘React’ & ‘Redux’. As the initial solution was to “Reduxify” the rest of our app, we ended up scrapping the ‘Redux’ components and starting to build the basket process again from scratch.

## What we would like to add to the project

- basket displaying when empty
- footer with details
- toastify library for animations
- more developed emails that are tailored to the user and display the products that were purchased
- storing addresses of users
- linking to payment api?

## What we learnt

- building up an app from the ground up
- linking the front and back end
- don't mix technologies before understanding how they fit together

## Would we recommend trying this?

## Developing the idea

- idea for an e-commerce shop
- brainstorm types of products
- decided on panic buying shop
- wire-frame design to get idea of all desired features
- set up kanban for initial steps to get the process of the ground and sharing tasks
- kanban as source for links to resources used for the project: step by step files, links to repos (front + back end repos), wire-frame project, postman api collection.

## Feature list

Home:

- products listed with stock count and running out if < 10 in count
- register / login
- search bar for products - have search bar appear on all pages
- register page
- login page: users can only checkout if logged in
- store address details in db, but NOT PAYMENT DETAILS. In real world would be payment API.

Product page:

- products listed out
- ability to select by type of product
- filter by price, brand, customer review
- search
- gif in background?
- if search not found send to 404 page

Single product page:

- main image
- pull out data from api
- show if in stock
- add to basket
- animation to show added to basket
- show prod reviews
- admin consol for adding/updating/removing products

Basket summary page:

- list items added to the basket
- checkout button

Purchase confirmation:

- show that order has been placed
- send confirmation email
- randomly generated order number?

## Nice to have

Address page:

- web-form taking in shipping and billing address
- selection of type of shipping method

Payments page:

- take payment details
- place order button

## Steps to build the back end

- set up files: package.json, dependencies, git repo, gitignore, index.js, webpack, index.html, styles, .prettierrc.
- create components
- create api
- test that api returns data
