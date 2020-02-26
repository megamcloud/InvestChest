<a href="https://investchest.derekwolpert.com">
    <img src="./readme_images/logo.png" alt="InvestChest Logo" title="InvestChest" align="right" height="60" />
</a>

# InvestChest

## Overview

InvestChest was completed as apart of the Winter 2020 assessment for the New York Tech Talent Pipeline. The given instructions were to build a fullstack web-based stock profolio application where users can purchase stock based on values fetched from a third-party API. 
The specifics of the functionality for the app (user registration/signin/purchase forms, portfolio and transaction page, etc.) were given ahead of time, but there was freedom select the technologies one viewed best fit for the task. There were also rough design and styling guidelines given with the instructions (including the wireframe mockups included below).

Technologies used include MERN (MongoDB, Express.js, React, Node.js) stack, Redux, Webpack, SASS, CSS3, HTML5 and the third-party IEX Cloud finance API.

<p align="middle">
    <img src="./readme_images/final_splash.png" width="430" />
    <img src="./readme_images/dark_portfolio.png" width="430" />
</p>

## Architecture & Technologies

- <b>React</b>, a JavaScript library used to assist with efficient management of rapidly changing data and maintaining a single-page web application structure.
- <b>Redux</b>, a JavaScript library used in coordination with React to create a centralized store for organizing and accessing data.
- <b>Express.js</b>, a web application framework, used with Node.js, to provide server-side structure for querying and retrieval of API data.
- <b>Node.js</b>, a runtime environment used to execute JavaScript for server-side scripting.
- <b>JavaScript</b>, the project's front and backend programing language.
- <b>MongoDB</b>, a document-oriented (NoSQL) database system used for storage and management of information.
- <b>Webpack</b>, a JavaScript bundler to assist with development and production builds.
- <b>SASS, CSS3 and HTML5</b>, used to manage the presentation and styling of the project.
- <b>IEX Cloud</b>, a third-party finance API used to query and recieve real-time stock prices.

## Functionality

- Comprehensive registration/authentication behavior for management of user sessions, and keeping track of user information (e.g. available cash, trades association, etc.).
- Error handling for input fields to prevent invalid entries along with appropiate error mesages (e.g. prevents users from signing in with incorrect credentials, stops a user from registering an account under a previously used email address, prevent purchase of a stocks that cost more than a user's available cash, etc.).
- Seperate Portfolio and Transaction pages. Portfolio page displays an aggregated list of all stocks a user has purchased, and lists in alphabetical order based on stock ticker. If a stock was purchased in two seperate transactions then the transactions are grouped together. Transaction page displays a list of each individual trade in reverse-chronological order.
- Color indicators for the pricing information on the Portfolio page to indicate if a user has gained (green) or lost (red) money when comparing how much they've spent on the stock verses it's current price.
- Dynamic and auto-detecting light/dark mode in conjunction with a theme switch in the webpage's header.
- A polished, intuitive, responsive user interface/experience.

## Wireframe vs. Final Design
<p align="middle">
    <img src="./readme_images/wireframe_signin.jpg" width="430" />
    <img src="./readme_images/final_signin.png" width="430" />
</p>
<p align="middle">
    <img src="./readme_images/wireframe_register.jpg" width="430" />
    <img src="./readme_images/final_register.png" width="430" />
</p>
<p align="middle">
    <img src="./readme_images/wireframe_portfolio.jpg" width="430" />
    <img src="./readme_images/final_portfolio.png" width="430" />
</p>
<p align="middle">
    <img src="./readme_images/wireframe_transactions.jpg" width="430" />
    <img src="./readme_images/final_transactions.png" width="430" />
</p>

## Resources

- The background image for the splash page was taken by Verne Ho, and was feature on Unsplash: https://unsplash.com/photos/0LAJfSNa-xQ
- The basis for the styling of the loading spinner adapted from Loading.io: https://loading.io/css
- The CSS reset used in this project: https://meyerweb.com/eric/tools/css/reset