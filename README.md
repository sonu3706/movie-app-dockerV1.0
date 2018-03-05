# MovieCruiser

This application helps you search movies over internet and save specific movies in your database in a watchlist. You have to solve a specific problem here as described in PROBLEM.md. To get yourself familiar with this applciation, please go through the following steps.

## Installation

Step 1. Install and run MySQL database server in your local machine  
Step 2. Create a schema in MySQL to be used by application along with a user through which application can connect to that schema (you will be adding data to this schema as you run the application and need not have any data before).  
Step 3. Update and run `. ./env-variables.sh` to set the schema name, username, password in the environment variables as the server to them for booting up.  
Step 4. For backend, run `mvn package` and then `npm run spring-boot:run` in the same process as Step 3.  
Step 5. For frontend, run `npm install` and then `npm run start` in a different process.  

Navigate to `http://localhost:4200/` to view the running application. For a demo, refer -> https://drive.google.com/file/d/14nSnHb_8Phx4lnvwAd2yTZWHBKMjAasJ/view?ts=59ffe3c1  

## Running using Docker

step 1. Run `./build.sh` to generate node_modules and then it will build the frontend and will do `docker-compose up --build`

## Running lint checks

Run `npm run lint`  

## Running unit tests

Run `npm run test` to execute the karma unit tests.  

## Running end-to-end tests

Run `npm run e2e` to execute the protractor end-to-end tests. 

## Tech stack

- Angular.io
- Java
- Spring Boot
- MySQL 

## Repository structure

The folders and files you see in this repository, is how it is expected to be in projects:

	Project
	|
	├── MovieCruiserServer 			// All the backend application specific files and folders should be stored here including their test cases
	|	|__ src/main 
	|	|   | 								
	|	|	|__ com.stackroute.moviecruiser.config
	|	|	|		|
	|	|	|		|__ DataBaseConfig.java 		// 	this class contains database configuration for the application
	|	|	|		|
	|	|	|		|__ SwaggerConfig.java 			// this class integrates Swagger for tha RESTful APIs documentation 				 
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.controllers
	|	|	|		|
	|	|	|	    |__ MovieController.java 		// this class maps the RESTful APIs with services     
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.domain
	|	|	|		|
	|	|	|		|__ Movie.java                 // this class will be acting as data model for 'movie' table in the database
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.exceptions
	|	|	|		|
	|	|	|		|__ MovieNotFoundException.java                 // this class will handle the specific exception when requested movie was not found
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.repositories
	|	|	|		|
	|	|	|		|__ MovieDAO.java                 // interface that provides access to the underlying 'movie' table of database
	|	|	|		|
	|	|	|		|__ MovieDAOImpl.java 			// this is implementation of MovieDAO interface
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.services
	|	|			|
	|	|			|__ MovieService.java                 // interface that declare the services of the application
	|	|			|
	|	|			|__ MovieServiceImpl.java 			// this is implementation of MovieService interface
	|	|
	|	|
	|	|
	|	|__ src/resources
	|	|	|__application.properties 					// this is configuration file for database connectivity
	|	|
	|	|
	|	|__ src/test          
	|	|	|__ com.stackroute.moviecruiser.controllers
	|	|	|		|__ MovieControllerTest.java 		// this contains all test cases for MovieController
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.repository
	|	|			|__MovieDAOImplTest.java 			// this contains all test cases for MovieDAOImpl
	|	|
	|	|
	|	|__ pom.xml                                    // this contains all the dependencies required by the project
	├── e2e
	|	|
	|	|__ e2e-spec.ts           // This has end to end test cases of the project covering both frontend and backend, backend should be running for these tests		
	|	|
	|	|__ tsconfig.e2e.json    // specifies the root files and the compiler options required to compile the project.
	|
	|
	├── src
	|	|
	|	|__ app/app.module.ts 		//  the root module that tells Angular how to assemble the application
	|	|
	|	|__ app/app.component.ts    // the root component of the application
	|	|
	|	|__ app/**/*.component.ts   // all the other components of the application
	|	|
	|	|__ app/services			// all the services of the application should stay here
	|	|
	|	|__ app/app-routing 		// defines all the routes
	|	|
	|	|__ karma-tests				// includes all the unit tests of components
	|	|
	|	|__ index.html 		// the main HTML page that is served when someone visits your site
	|
	|
	├── env-variables.sh    // sets the environment variables which /MovieCruiserServer/src/main/resources/application.properties is dependant on
	|
	|
	├── karma.conf.js       // specifies configuration for running unit cases of angular components using karma
	|
	|
	├── package.json 		// includes all the dependencies the solution requires, this shall include all scripts like `npm run build`, `npm run lint`, `npm run test`, `npm run start`, `npm run e2e`, `npm run spring-boot:run`
	|
	|
	├── pom.xml            // this points to the backend application so that it could be run from root directory
	|
	|
	├── PROBLEM.md         // Describe about the problem of the assignment/project that you have to accompalish
	|
	├── protractor.conf.js // specifies configuration for running end to end test cases using protractor
	|
	├── README.md        // includes all the steps required to run the application on local machine
	|
	|
	├── tsconfig.json    // specifies the root files and the compiler options required to compile the project.
	|
	|
	├── tslint.json      // specifies the tslint rules to run
	|
	|
	├── .gitignore		// specifies intentionally untracked files to ignore during git operations