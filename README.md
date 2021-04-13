# Google Book Search

The Google Book Search is an application that permits user to search for books found via the Google Books API.  When the resulting search results are displayed, the user can click a View button to get information on book at google books.  When the Save button is clicked, the user is able to save that particular book to a Saved Books list.  To prevent the user from adding the same book multiple times to their saved list, clicking the Save button also removes that book from the search results list.  Via the Saved Books menu option, the user can then display a list of their saved books.  Each book can either be viewed at Google Books or can be deleted from the list.

This application was built using React and utilizes component state and context.  It also uses mongoose with Atlas database when deployed at Heroku.

## Table of Contents
* [Screenshots](#Screenshots)
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#Technologies)
* [Repository](#Repository)
* [Deployment](#Deployment)

#### Google Book Search home page
The following is a screenshot of the Google Book Search application home page.

<p align="center">
  <img src="./public/images/googlebooksearchHome.png" alt="google book search home page">
</p>

#### Google Book Search Results
The following is a screenshot of the Search Results.

<p align="center">
  <img src="./public/images/googlebooksearchResults.png" alt="google book search results">
</p>

#### Google Book Saved Books
The following is a screenshot of the Saved Books.

<p align="center">
  <img src="./public/images/googlebooksaved.png" alt="google book saved books">
</p>

## Installation

* Fork or clone the repo.
* Make sure to install all the dependencies by running the following command:
    * **npm install**

## Usage

To use this application once installed, the user launches the application from a terminal window as follows:

**npm start**

This will then open a browser window at localhost:3000.

The application can alternatively be run as a deployed application following the link in the Deployment section.

## Technologies

* React
* axios
* Heroku
* Bootstrap
* HTML
* CSS
* Javascript

## Repository

Direct link to repository:  https://github.com/jtoth7824/googleBookSearch

## Deployment

The Employee Directory application was deployed to Github Pages so that anyone can run the application.   The link to execute the application is as follows:

https://secure-ocean-84141.herokuapp.com/


[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://www.mit.edu/~amini/LICENSE.md)