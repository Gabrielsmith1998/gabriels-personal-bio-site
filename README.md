# Gabriels Personal Bio Site


> The user could be an organization or recruiter attempting to learn more about me and my abilities when looking for a position to fill.

### [Deployed App](https://gabriel-smith-bio-site.netlify.app)

## [Loom Video](https://www.loom.com/share/911adb98acca49ffa0a132368954323e)

## [Personal Bio ERD](https://user-images.githubusercontent.com/86996271/143664252-846cafe2-59b4-4977-9261-923189e26490.png)

## ![Bio Flowchart](https://user-images.githubusercontent.com/86996271/143665341-e1cdc3bd-e85d-4405-a666-9a68c4a3d9e7.png)


# Personal Bio Site: Authentication and Routing

## User Stories - Authentication

* As a user, if I go to the application and I am not logged in, I should see the application with a google authentication button in the NavBar.
* As a user, I should be able to authenticate via google.
* As a user, I should always see a navbar.
* As a user, when I am logged in/out, the navbar should only display Home, Projects, Technology.
* As a Admin user, when I am logged in, the navbar should still display Home, Projects, Technology as well devPortal which allows me as admin to CRUD.
* As a user, when I click the logout button in the navbar I should be logged out and should see the login button in the NavBar.

## User Stories - Routing
* As a user if I click the home link in the navbar, I should navigate to '/home' which displays the about me description as well as my projects..
* As a user if I click the Project link in the navbar, I should navigate to '/projects'  which will display all of my uploaded projects.
* As a user if I click the Technologies link in the navbar, I should navigate to '/tech'  which displays all of my uploaded technology.
* As a admin user if I click the Dev Portal link in the navbar, I should navigate to '/devPortal' which will bring up a view that allows me to crud on the applications projects and technologies.


# Gabriels Personal Bio Site: CRUD on Projects and Tech

## Admin User Stories CRUD
* As an Admin user, when I click devPortal in the navbar I will be shown 4 links. 2 that allow me to create projects and technologies as well as 2 more that allow me to edit and delete projects and technologies
<img width="1440" alt="Screen Shot 2021-11-26 at 7 50 42 PM" src="https://user-images.githubusercontent.com/86996271/143664952-8c650235-58e5-4f01-8a45-d34e9913fcf2.png">

### CREATE
* As an admin user, when I click on Create Project or Create Tech, I should be navigated to /createProjects which will display a form for creation
<img width="1440" alt="Screen Shot 2021-11-26 at 7 50 59 PM" src="https://user-images.githubusercontent.com/86996271/143664961-8fec9a01-406d-4cea-9a94-a6482a68ce3c.png">

### READ
* As a user, when I navigate to the /projects and /tech route, I should see a list of either my Projects or Technology displayed on the screen.
* As a user, when I click on an item on the My Item page, I should be taken to the Single Item page and see details for that item
<img width="1440" alt="Screen Shot 2021-11-26 at 7 51 10 PM" src="https://user-images.githubusercontent.com/86996271/143664975-c77eb2cb-09f8-4fa5-bb2f-b031e0f8c8bd.png">

### UPDATE
* As an Admin user, when I click on the Edit Projects link in the devPortal, I should be redirected to the editProject page and should see a form pre-populated with all the information for the projects I am editing.  Once I make edits and push the save button, Firebase should edit and I should be redirected to the '/home' page.

* As an Admin user, when I click on the Edit Tech link in the devPortal, I should be redirected to the editTech page and should see a form pre-populated with all the information for the tech I am editing.  Once I make edits and push the save button, Firebase should edit and I should be redirected to the '/home' page.
<img width="1440" alt="Screen Shot 2021-11-26 at 8 12 04 PM" src="https://user-images.githubusercontent.com/86996271/143664982-7e5d52f0-0c3d-4971-8b3a-0e728ad4adc8.png">

### DELETE
* As an Admin user, when I click the Delete Projects link in the devPortal, there all my projects will be displayed with a delete button that when clicked will delete the project from the firebase database and redirect me back to the Home page

* As an Admin user, when I click the Delete Tech link in the devPortal, there all my tech will be displayed with a delete button that when clicked will delete the tech from the firebase database and redirect me back to the Home page
