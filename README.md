Build info:

[![Build Status](https://travis-ci.org/aabarmin/spring-react-starter.svg?branch=DEV)](https://travis-ci.org/aabarmin/spring-react-starter)
[![Build Status](https://travis-ci.org/aabarmin/spring-react-starter.svg?branch=master)](https://travis-ci.org/aabarmin/spring-react-starter) 
[![Maintainability](https://api.codeclimate.com/v1/badges/93ff81e63c656b57872c/maintainability)](https://codeclimate.com/github/aabarmin/spring-react-starter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/93ff81e63c656b57872c/test_coverage)](https://codeclimate.com/github/aabarmin/spring-react-starter/test_coverage)

What is it
=

It's a starter for rapid application development with Spring Boot on backend and React on frontend. This application includes the following:
* Configured Spring Security for protecting restricted resources.
* Configured `UserDetailsService` for storing user information in database. Also, `UserManager` automatically creates administrator if
it's not present. Admin's login is in `application.yml` configuration file, password will be printed to console. 
* Configured REST authentication.
* Configured CORS policy. 
* UI for user's management. 
* Part of dashboard with user management. 
* Travis-CI pipeline for application build, frontend and backend tests. I'm going to add automated deploy to Heroku in future releases.
* Docker environment with PostgreSQL and pgAdmin (login/password for admin page is admin/admin). There is a special environment configuration
for Windows because of issue with DB files storage.
* Frontend is created with `create-react-app` as ordinary, promise middleware also was implemented.

How to use it
=

First of all, it's necessary to fork this repository (you can star it as well) and start your development in your favorite IDE. Backend
runs on `8080` port, frontend is on 3000. 

To start application the following commands might be executed:

```bash
./gradlew frontend:start
./gradlew bootRun -Dspring.profiles.action=dev
```

Also backend can be runned using some Spring Boot Starter in your IDE, most of them support it. 

Both backend and frontend have hot update - frontend because of NodeJS server, frontend because of Spring Boot Dev Tools. 

Future plans
=

At first, I'm going to add gradle task for building single application without NodeJS in production environment. And the following
improvements are planned:
* React DevTools for state monitoring
* Misc