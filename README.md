# Pokemon Search App

Welcome to the Pokémon Search App! This application allows users to search for Pokémon using various filters and view detailed information about each Pokémon. Below is a guide to help you set up and use the app.

## Table of Contents
  Features
  Requirements
  Installation
  Usage
  API Documentation
  Folder Structure
  Contributing
  License
  
### Features
Pokémon Search Form: A form with two fields - a select box for Pokémon types and an input box for search terms.

Pokémon List Display: Display a list of Pokémon cards based on the search criteria.

Filter Pokémon: Filter the Pokémon list using the type and search term.

Pokémon Details Page: Redirect to a detailed page for each Pokémon when a Pokémon card is clicked.

Breadcrumb Navigation: Show the URL path on the Pokémon details page.

Responsive Design: The app is responsive and optimized for mobile view.

## Requirements
Node.js (v12 or higher)
npm (v6 or higher) or yarn (v1.22 or higher)
Installation
Clone the Repository:

sh
Copy code
git clone https://github.com/your-username/pokemon-search-app.git
cd pokemon-search-app
Install Dependencies:

sh
Copy code
npm install
# or
yarn install
Start the Development Server:

sh
Copy code
npm start
# or
yarn start
Usage
Home Page: The home page contains a form with a select box for Pokémon types and an input box for the search term.

Select Box: Choose a Pokémon type to filter the list.
Input Box: Enter a search term to filter the list.
Pokémon List: A list of Pokémon cards is displayed below the form. The list updates based on the selected type and search term.

Pokémon Details: Click on a Pokémon card to navigate to the details page of the Pokémon. This page shows detailed information about the selected Pokémon.

Breadcrumb Navigation: The details page includes a breadcrumb to show the navigation path (e.g., Home -> Pikachu).

API Documentation
The app uses the PokéAPI to fetch data about Pokémon. Here are some of the key endpoints used:

Get All Pokémon Types:

bash
Copy code
GET /api/v2/type/
Get Pokémon by Type:

bash
Copy code
GET /api/v2/type/{id or name}
Search Pokémon by Name:

bash
Copy code
GET /api/v2/pokemon/{id or name}
Get Pokémon Details:

bash
Copy code
GET /api/v2/pokemon/{id or name}
Folder Structure
java
Copy code
pokemon-search-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Breadcrumb.js
│   │   ├── PokemonCard.js
│   │   ├── PokemonDetails.js
│   │   ├── PokemonForm.js
│   │   └── PokemonList.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── PokemonDetailsPage.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Happy Coding! If you have any questions or issues, please feel free to open an issue on the repository.





