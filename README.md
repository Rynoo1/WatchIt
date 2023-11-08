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
    ·
    <a href="https://drive.google.com/file/d/1jvRSXFn-Iq1vtbiTRCvSAZWxFY51oS26/view?usp=sharing">View Demo</a>
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

![Alt text](readme_images/Screenshot%202023-11-08%20at%2016.00.02.png)

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
1. Install Express.js and dependencies: Navigate to the server and the necessary dependencies.
```sh
cd server
npm install
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
npm install react-router-dom bootstrap react-bootstrap axios 
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

* **Filters**
![Alt text](readme_images/Blue%20iMac%20Front-3.png)
Users can filter products by various categories such as brand or strap material and view all watches that fit that description.
<br/>

* **Inventory Management**

![Alt text](readme_images/Blue%20iMac%20Front.png)

<br/>

![Alt text](readme_images/Blue%20iMac%20Front-1.png)
Through the Inventory management page, the admin users are able to update, delete and add products to the database. The changes are then instantly made and updated on the web page. Admins are able to update products through the above pop up.

![Alt text](readme_images/Blue%20iMac%20Front-4.png)
Admins can easily add new watches by completing this form.


* **Checking Out**
![Alt text](readme_images/Blue%20iMac%20Front-2.png)
Users can complete their orders and check out on the check out page. Only users who have created an account and logged in are able to check out an order. The user is also able to make last minute changes to their cart on the check out page, after which the total is updated. Once successfully checked out, an order is created.
<br/>

* **Dispatching Orders**
![Alt text](readme_images/Blue%20iMac%20Front-5.png)
The Admin users can view orders and dispatch them once they have been completed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Development Process

Creative and technical decisions made. Describe architecture of the systems, theme of the application and the reason why I approached the project in this way. ERD's, User-flow, Dataflow, etc go here. Can include code snippets to explain approach to implement specific functionality, challenges faced and how it was approached to solve them, reviews and tests that were performed etc.

**Use Case Diagram**
![Alt text](readme_images/E-Commerce%20Use%20Case%20Diagram.png)

**Data Flow Diagram**
![Alt text](readme_images/WatchIt%20Data%20Flow%20Diagram(1).png)

<br/>

**Development Challenges**

* **Image handling using Multer:**
This project uses Multer middleware to handle the uploading and displaying of images. The process of setting this up and using it for the first time took longer than expected and there were a few issues during this process. Initially, if a product was updated without an image included it would delete the existing image and leave it with no image. This was fixed with an if statement in the routes to check if a file is included in the upload and then either updating the image field or leaving it. After this I noticed that it would upload new images everytime it was updated and not delete images when the product is deleted. So I used the built in file system module to update the image instead of uploading a separate new image and delete the image if the product is deleted.
```js
//deleting
router.delete('/api/watch/:id', async (req, res) => {
    try {
        const watch = await WatchSchema.findById(req.params.id);
        if (!watch) {
            return res.status(404).json({ message: "Watch not Found!" });
        }

        if (watch.image) {
            fs.unlink(`./images/${watch.image}`, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        await watch.deleteOne();
        res.status(201).json({ message: "Watch successfully deleted!" });
    } catch (error) {
        console.error("Error deleting Watch: ", error);
        res.status(500).json(error);
    }
})

//updating
router.put('/api/watch/:id', upload.single('imageUp'), async (req, res) => {

    let data = JSON.parse(req.body.information)
    if (req.file) {

        const existing = await WatchSchema.findById(req.params.id);
        if (existing.image) {
            fs.unlink(`./images/${existing.image}`, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
        const update = ({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description,
            image: req.file.filename
        })
        await WatchSchema.findByIdAndUpdate(req.params.id, update)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    } else {
        const update = ({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description
        })
        await WatchSchema.findByIdAndUpdate(req.params.id, update)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    }
})
```
<br/>

* **User Authentication:**
For user authentication I used bcrypt to hash passwords and JWT to create authentication tokens. I then stored this and information like user rank in the local storage to easily check if a user is logged in and if they have access to certain pages or not.
<br/>

* **Product ID:**
To get the correct product ID from the products or home page to the individual products page to load the correct product information from the database I initially used session storage. However, I updated this to using the URL instead and implemented updated error handling for if there are mistakes in the URL. This update gave every product it's own URL that could be shared and would preserve the product if the user went back into their history.
```js
//setting URL when going from all products to individual product page
  const handleButtonClick = () => {
      const queryParams = new URLSearchParams();
      queryParams.append('productid', props.id);
      navigate(`/prod?${queryParams.toString()}`);
  };

//using product ID from URL on individual product page
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productid = searchParams.get('productid');

```
<br/>

* **Displaying the correct Navbar and Footer:**
Depending on if the user is signed in, and which user is signed in, a different navbar and footer is displayed that has different navigation options. This was achieved by checking the local storage for the user's details such as logged in and admin status and then doing conditional checks to display the correct footer or navbar.
<br/>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Final Outcome
* [Demo Video](https://drive.google.com/file/d/1jvRSXFn-Iq1vtbiTRCvSAZWxFY51oS26/view?usp=sharing)

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