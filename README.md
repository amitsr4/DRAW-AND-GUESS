## The DRAW & GUESS game  by Sahar Kalifa
> Building an API with endpoints.

### About the technolgy
>* I used Windows OS to built this project.
>* I chose to built the API with Node JS, Express framework and MongoDB.\
>* I chose Node because it is Non-blocking architecture (asynchronous by default).\
and it has more advantage like: ability to build API fast, handling request very fast, etc.\
>* I chose to work with MongoDB because its integrate easily with express, its scalabillity and flexibility.

### Pre-requirements
>* Having **Node v16.15.0** (the version i used) or above on your machine.\
You can download versions here: https://nodejs.org/en/
>* Having **npm v8.9.0** (the version i used) or above on your machine.\
You can download this version by runing in the cmd this command: "npm i -g npm@8.9"\
Run "npm -v" to check if all went well.
>* Having mongoDB on your pc or mongoDB Atlas (Cloud) (see 'How to install MongoDB' section)
>* **Not Must but recomended**: Having Postman so you can send POST request\
You can download Postman extension for chorme browser (very easily).
>* If you are working on Non-Windows machine errors can occurred, and the guide for installing MongoDB\
	does not fit for linux, or other OS.

### How to set up MongoDB
>* I chose to give you two option to work with MongoDB:
>	1. The first one is to download MongoDB community Server (v3.6), this option has priority beacuse \
	it can handle large size of file.txt and it response much faster. \
	but the install can take up to 5-10 min. if you are choosing this option please follow the next section.
>	2. The second option is to use MongoDB Atlas which its free, and you dont have to download anything cause the DB \
	is on the Cloud. i opened already a cluster there. if you are choosing this option please follow the Atlas section. \
	this option are limiting the DB to store up to 0.5GB.

### How to install MongoDB community Server (v3.6)
>* First download MongoDB community Server **v3.6** from this link https://www.mongodb.com/try/download/community
>	While you are installing the app **don't** install the MongoDB compass we will install it separately after.
>* Second download MongoDB Compass v1.3 from this link https://www.mongodb.com/try/download/compass?tck=docs_compass
>* Go to advance system setting on your PC, then go to 'Enviroment Variables' then select 'PATH' and then \
	'Edit' and add click 'New' to add this path C:\Program Files\MongoDB\Server\3.6\bin \
	Click 'OK'.
>* Now open up Command Propmt and enter 'c:\data\db' and then enter 'mongod'.
>* Now you can open MongoDB Compass and see our DB. DONE.

### How to set up MongoDB Atlas
>* Go to https://www.mongodb.com/cloud/atlas/register and register free. 
>* Click on 'Creat a database' --> choose the free option (shared) --> choose the deafults options \
	and then click 'Create Cluster'.
>* Set username to: 'Lemonade' and password to: 'Lemonade' and then click create user.
>* now scroll down and click 'My local Enviroment' and click on 'Add my current IP Address'.
>* Click finish and Close.
>* Now after you set the Cluster click on 'connect' and then click 'connect your application' and then \
	copy the connection string to the file in my project that called 'mongoDB.js'. \
	in the file 'mongoDB.js' you need to replace the 'mongodb://localhost:27017/WordAppearance' with \
	your connection string. and to replace the <password> with the password: Lemonade.

### How to run the project
>* If you chose to use 'MongoDB community Server' open cmd and run 'mongod' to make mongodb start. \
	else open MongoDB Atlas on your browser.
>* cd to express-api folder
>* run: 'npm install'
>* run: 'npm run server'
>* Make sure we see in the consle 'Connected to DataBase...'
>* Open 'Postman' to send POST request. **(see Endpoints section to know how to send POST)**.

### POST Endpoint
>* POST requests endpoint: 'http://localhost:3000/api/words/ \
> The first endpoint receives a text input and counts the number of appearances for each word in the input. \
> We have 3 ways to accept the input: by simple string, file path or URL. \
> The body of the POST will be: {"userText": string , "type": string} \
> To send **simple string** the body.type MUST BE: "simplestring" \
> To send **file path** the body.type MUST BE: "file" \
> To send **URL** the body.type MUST BE: "url" 
>
>* Important Note:
>*	1. If you send file path it need to be like this example: {"userText": "C:\\Users\\sahar\\Desktop\\file1.txt", "type": "file"}
>*	2. if you send URL is MUST START with http:// or https://, and it must return text without body. \
	example: https://www.w3.org/TR/PNG/iso_8859-1.txt

### GET Endpoint
>* GET requests endpoint: 'http://localhost:3000/api/statistics/:word' \
>* api/statistics/ for 'Receives a word and returns the number of times the word appeared so far (in all previous calls)'
>* You can send params from browser or from Postman.

### Assumptions and other important notes
>* I'm case insensitive (i.e. "Be" and "be" are the same word)
>* Mid word dashes, commas and digits **and** every special chars (@,#,$,%,^,&,...) could be **cleaned up** (i.e. me2 could count as me)
>* i didnt have time to handle all edge cases i prefer to focus on the technolgy and make the things works.
>* I'm assuming that all input are valid.
>* If you have any problem with running this project please feel free to reach me at, Sahar.
