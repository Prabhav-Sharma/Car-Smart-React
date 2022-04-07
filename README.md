# [CarSmart](https://carsmartreact.netlify.app/)
An E-commerce platform built using react

The backend code for this project is currently provided by [Mockbee](https://mockbee.netlify.app/)

The platform enables the user to navigate through a range of cars from several categories namely, Sedans, SUV, EVs, Luxury and Hatchbacks. Allows the user to filter products, sort them based on parameters, bookmark products & add products to cart.

## Features
### Authentication 
- Authentication allows the user to login/signup into the app to unlock personalized features.
- Redirects user to login page, if an attempt is made to navigate to protected pages which require the user to be authenticated
- Authentication is achieved by using an encoded token so as to not publicize user data.
- The user on successfully logging in, is navigated back to whichever page their were trying to reach before being redirected to the login page.

### Bookmarks
- The user can save thier favourite vehicles for closer inspection later.
- The user can directly add items to cart through their bookmarks or navigate to the product's page to read more about it.

### Cart
- The user can add or remove items in cart, the cart value is calculated for them, the cart value is broken down based on the nature of the product
- The user can increase/ decrease the item's quantity
- If the quantity becomes 0, the item is directly removed from the cart.

### Compare
- The user can compare two products at the same item
- All of the product's details are compared side to side in a table
- The user can search the database for the products they want to compare and add them to compare

### Alerts & Loaders
- The web-app has been made in a way that doesn't leave the user confused, figuring out whether the thing they tried to achieve, actually happened or not
- There are alerts for all API calls, which would be triggered both on success and failure.
- There are button loaders which indicate the task is in progress, upon completion the loader stops and an alert is fired to inform the user about the result.

### Preview:
![chrome-capture (11)](https://user-images.githubusercontent.com/88072012/162270078-32c0992c-5502-4576-a071-bcaf7eb2cb2c.gif)

