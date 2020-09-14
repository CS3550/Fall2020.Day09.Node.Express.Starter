# Day 9 Node/Express Starter Code

This code demonstrates how to start a project in node.

## Getting started

- Make sure have node and npm installed on your machine
    - Go to https://nodejs.org/en/download/ if you don't have these installed.
- Create a new folder and open a terminal in that folder location.
    - In MacOS this is the terminal program.
    - On Windows you can click the Windows button and type ```cmd``` and navigate to the folder you created.
    - If you're on Linux I don't need to tell you how to do this.

- If you are using the code in this repo type: ```npm install ```. This will install express, which is declared as a dependency in the ```package.json``` file.

- If you are starting from scratch, type: ```npm init -y```. This will create the ```package.json``` file for you. Then type: ```npm install express```. This both adds express as a declared dependency in ```package.json``` and install it in the ```node_modules``` folder.  Note that if you are using ```git```, be sure to include a ```.gitignore``` file with the line ```node_modules``` so you don't commit your OS-specific file to your repository.


- Run your server
```node index.js```

- Open a browser that points to the server:```http://localhost:8888```. Note that your port number may change if you use a different port number.
