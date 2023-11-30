# README

Welcome to the New Creation Angular Frontend repository! 

## Versions

- node: v19.8.1
- npm: v9.5.1
- Angular: v14.2.8

> Note: I highly recommend installing nvm (Node Version Manager) to make managing these versions easier. Here is a guide for the installation and usage: https://help.dreamhost.com/hc/en-us/articles/360029083351-Installing-a-custom-version-of-NVM-and-Node-js

## Libraries

- Frontend Styling Framework: Bootstrap v5
- Icons: Bootstrap Icons v5
- Navbar Icons: Hamburgers

## Getting Started 

### Development

- Clone the project
- Run: `git fetch`
- Checkout the `master` branch and `git pull` to fetch the latest changes
- Create a new branch with a descriptive name (eg. `feature/home-page-redesign` or `bugfix/navbar-header-not-collapsing`)
- Push your changes to this feature branch, and create a Pull Request to merge into `master`

### Running Locally

- Open your terminal and make sure you've navigated to the project's root folder: `/nc-web-frontend`
- Run: `npm install`
- Start normally:
    - `npm run start`
    - Go to: `http://localhost:8080`
- Start with access to view on mobile:
    - `npm run mstart`
    - Find your local IP address by running either `ipconfig` or `ifconfig` (your IP address should look something like `192.168.10.xxx`)
    - On your phone, go to: `http://<Your IP Address>:8080`
    - You should be able to the FE now running locally to check that the pages are responsive

### Staging 

- If you would like to deploy to the staging environment, merge your branch into the `development` branch in git
- This will start an automatic deployment to a Netlify App, which can be accessed here: https://newcreation-development.netlify.app/

### Deployment

- After a PR is merged to `master`, a Github Action will start authomatically to build the project, and then deploy the necessary files to the live server 
- Go to the `Actions` tab in Github to monitor the deployment process
- Once complete, your changes should reflect on the live website