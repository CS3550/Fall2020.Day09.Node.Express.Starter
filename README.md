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

## Up on the internet

### AWS Lightsail

- Obtain an AWS account

- (Optional) Get AWS credits through AWS Educate or the GitHub Education Pack

- Log on to console.aws.amazon.com

- Go to aws.amazon.com/lightsail

- Click Create Instance

- Under "Select a Blueprint" Click Node.js

- Scroll down alh click "Create Instance"

- Once the virtual machine has booted up, click the console button to access the command line in a new browser window.

- At the command line, type ```git clone https://github.com/CS3550/Fall2020.Day09.Node.Express.Starter.git```. This will clone this repository into your new machine.

- Move into the directory you clone with ```cd Fall2020.Day09.Node.Express.Starter```

- Install the project dependencies with ```npm install```

- You need to run node in its own process, otherwise it will stop when your console session stops. To prevent this, you need to run node in its own process. Any easy way to do this is to type ```screen```

- Launch the node program in the new console with ```node index.js```

- To get out of screen type Alt+a then Alt+d

- You will still not be able to reach your server because AWS blocks port 8888 by default. To open port 8888, in LightSail find your virtual machine, click manage, then networking, and add 8888 to the firewall.
