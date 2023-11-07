<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

![GitHub repo size](https://img.shields.io/github/repo-size/Rynoo1/watchit?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/Rynoo1/watchit?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Rynoo1/watchit?color=lightblue)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">

  ![Alt text](readme_images/Group%2085.png)

  </a>

<h3 align="center">WatchIt</h3>

  <p align="center">
    E-Commerce web application for watches
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

WatchIt is an E-commerce web application for the sale of watches. Users can navigate the site and browse the products, however, if they would like to make a purchase and check out, they would have to sign in or create an account. There are two types of accounts, a User account and an Admin account. The User accounts allows the user to make purchases and view the products, while the Admin account allows the admin user to add, edit or delete products from the database, as well as view the orders to dispatch orders when they have been completed. WatchIt is fully responsive and is made for all screen sizes!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With
MERN Stack

* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express]][Express-url]
* [![React][React]][React-url]
* [![Nodejs][Nodejs]][Node-url]
* [![JWT][JWT]][JWT-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]
* [![Mongoose][Mongoose]][Mongoose-url]
* ![Multer]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you start, ensure you have the following:

1. **Node.js and npm:** Make sure you have Node.js and npm installed on your system, or download [Node.js](https://nodejs.org/en)

2. **MongoDB:** You'll need a running MongoDB server. You can install [MongoDB](https://www.mongodb.com/) locally or use a cloud-based server like MongoDB Atlas.

3. **Code Editor:** You should have a code editor installed, such as VS Code.

4. **Git:** Install [Git](https://git-scm.com/) if you haven't already.

### Installation

**1. Clone the Repository**
```sh
git clone https://github.com/Rynoo1/WatchIt
```
**2. Navigate to the Project Directory**
```sh
cd watchit
```
**3. Set up the Backend**
1. Install Express.js and dependencies: Navigate to the server and install Express.js along with all the necessary dependencies
```sh
cd server
npm install express jsonwebtoken joi bcrypt multer nodemon
```
2. Install Mongoose: Mongoose is a library for MongoDB
```sh
npm install mongoose
```
3. Set up connections: Set up database connections and routes

**4. Set Up Frontend**
Install Frontend dependencies: Navigate to client directory and install frontend dependencies
```sh
cd client
npm install
```

**5. Start the Development Servers**
1. Start the Express.js server: Navigate to the server directory and start the Express development server
```sh
cd server
npm run dev
```
2. Start the React server: Start the React server in the client side
```sh
cd client
npm start
```

**6. Access the Application**
You can now access the application through your web browser at `http://localhost:3000`


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Project Features

--Adding, editing, deleting products
--Checking out
--Filters
--Dispatching orders
--Creating profile/logging in

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Development Process

Creative and technical decisions made. Describe architecture of the systems, theme of the application and the reason why I approached the project in this way. ERD's, User-flow, Dataflow, etc go here. Can include code snippets to explain approach to implement specific functionality, challenges faced and how it was approached to solve them, reviews and tests that were performed etc.

**Use Case Diagram**
![Alt text](readme_images/E-Commerce%20Use%20Case%20Diagram.png)

**Data Flow Diagram**
![Alt text](readme_images/WatchIt%20Data%20Flow%20Diagram(1).png)

<br/>
challenges faced

-image handling using multer

-user authentication with hashing and bcrypt, jwt, etc

-passing product id to individual product page
--used session storage, then url

-displaying navbar and footer differently dependig on who is signed in
--sesstion storage and && if statement

-cart link removing product id from url??
--used a tag instead of navlink

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Final Outcome
* demo video
* promo video

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Ryno de Beer - 221361@virtualwindow.co.za

LinkedIn - https://www.linkedin.com/in/rynodebeer01/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Readme Template](https://github.com/othneildrew/Best-README-Template/tree/master)
* [Badges](https://shields.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Mongoose]: https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com/docs/
[Express]: https://img.shields.io/badge/Express-000000?logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[React]: https://img.shields.io/badge/React-62DAFB?logo=react&logoColor=white
[React-url]: https://react.dev/
[Nodejs]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[JWT]: https://img.shields.io/badge/JWT-000000?logo=json-web-tokens&logoColor=white
[JWT-url]: https://jwt.io/
[Bootstrap]: https://img.shields.io/badge/React%20Bootstrap-7952B3
[Bootstrap-url]: https://react-bootstrap.netlify.app/
[Multer]: https://img.shields.io/badge/Multer-CB3837