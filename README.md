# Pokémon Search App

Welcome to the Pokémon Search App! This application allows users to search for Pokémon using various filters and view detailed information about each Pokémon. Below is a guide to help you set up and use the app.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Features

1. **Pokémon Search Form**: A form with two fields - a select box for Pokémon types and an input box for search terms.
2. **Pokémon List Display**: Display a list of Pokémon cards based on the search criteria.
3. **Filter Pokémon**: Filter the Pokémon list using the type and search term.
4. **Pokémon Details Page**: Redirect to a detailed page for each Pokémon when a Pokémon card is clicked.
5. **Breadcrumb Navigation**: Show the URL path on the Pokémon details page.
6. **Responsive Design**: The app is responsive and optimized for mobile view.

## Requirements

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/pokemon-search-app.git
   cd pokemon-search-app

2. **Install Dependencies**:
   ```sh
   npm install
   # or
   yarn install

3. **Start the development server **:
   ```sh
   npm start
   # or
   yarn start


## Usage
Home Page: The home page contains a form with a select box for Pokémon types and an input box for the search term.

Select Box: Choose a Pokémon type to filter the list.
Input Box: Enter a search term to filter the list.
Pokémon List: A list of Pokémon cards is displayed below the form. The list updates based on the selected type and search term.

Pokémon Details: Click on a Pokémon card to navigate to the details page of the Pokémon. This page shows detailed information about the selected Pokémon.

Breadcrumb Navigation: The details page includes a breadcrumb to show the navigation path (e.g., Home -> Pikachu).



### API Documentation
The app uses the PokéAPI to fetch data about Pokémon. Here are some of the key endpoints used:

Get All Pokémon Types:
GET /api/v2/type/

Get Pokémon by Type:
GET /api/v2/type/{id or name}

Search Pokémon by Name:
GET /api/v2/pokemon/{id or name}

Get Pokémon Details:
GET /api/v2/pokemon/{id or name}

