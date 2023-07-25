User List App
This is a simple web application that fetches user data from the randomuser.me API and displays it in a list format. The app allows the user to refresh the user list by clicking on a refresh button.

Features
Fetches user data from the randomuser.me API.
Displays user information (name, email, and contact) in a list.
Refreshes the user list on demand.
Technologies Used
HTML
CSS (style.css)
JavaScript (index.js)
Getting Started
To run this application, follow these steps:

Clone this repository to your local machine.
bash
Copy code
git clone <repository_url>
Navigate to the project folder.
bash
Copy code
cd <project_folder>
Open the index.html file in your preferred web browser.
App Structure
The main functionality of the app is implemented in the index.js file, and the HTML template is defined in the index.html file.

index.js
This JavaScript file contains the following functions:

getUsers: An asynchronous function that fetches user data from the randomuser.me API. It returns an array of user objects.

renderUsers: A function that takes an array of user objects as input and renders them in the user list. It updates the user list with user images, names, email addresses, and contact information.

clearList: A function that clears the user list by removing all the user items.

handleReload: A function that adds a click event listener to the refresh button. When the button is clicked, it clears the user list and fetches new user data to render.

main: The main function that initializes the app by fetching the initial user data, rendering it, and setting up the refresh button event listener.

index.html
This HTML file defines the structure of the app and contains the following elements:

header: Contains the refresh button.

section: Contains the user list.

template: Defines the template for each user item in the list, including the user's image, name, email, and contact information.

Contributing
