const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
let role = "", name = "";
let currWord;
let currDrawer = 'free';
let currGuesser = 'free';
let avialability = 'available';
let response ='';
let draw;


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

//middleware & static files
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    // if(currDrawer != 'free' && currDrawer != 'free'){   //TODO later need to check whether the role is taken or not.
    //     avialability = 'full';
    // }
    res.render('welcome-view', { title: 'Home', name: '' });
});
app.get('/waiting-view', (req, res) => {
    res.render('waiting-view', { title: 'Waiting',name,response });
});

app.post('/waiting-view', (req, res) => {
    role = req.body['button'];
    name = req.body['name'];
    draw = req.body.imgBase64;
    currWord = req.body.word;
    if (role == currGuesser) {
        res.render('guessing-view', { title: 'Waiting', draw, name,response });
    }
    else {
        res.render('waiting-view', { title: 'Waiting', name,response});
    }
});

app.post('/word-choosing-view', (req, res) => {
    role = req.body['button'];
    name = req.body['name'];
    if (role == 'Drawer') {
        currDrawer = req.body['name'];
        res.render('word-choosing-view', { title: 'Choosing', role, name, response });
    } else {
        currGuesser = req.body['name'];
        res.render('guessing-view', { title: 'Guessing', role, name, draw, response});
    }

});
app.get('/instructions', (req, res) => {
    name = req.body['name'];
    res.render('instructions', { title: 'Instruction', name });
});

app.get('/word-choosing-view.ejs', (req, res) => {
    name = req.body['name'];
    role = req.body['button'];

    res.render('word-choosing-view', { title: 'Home', name,role, response });
});

app.get('/guessing-view', (req, res) => {
    name = req.body['name'];
    role = req.body['button'];

    if (currWord == req.body['guess']) {
        //TODO add scores.
        response = 'Your Answer is CORRECT! and now is your turn to draw';
        res.render('word-choosing-view', { title: 'Home', name,role, response });
    } else {
        response = 'Your Answer is wrong! Keep trying, you can do it!';

        res.render('guessing-view', { title: 'Home', name, role, response});

    }

});

app.post('/drawing-view', (req, res) => {
    currWord = req.body.word;
    role = req.body['button'];
    name = req.body['name'];
    res.render('drawing-view', { title: 'Drawing', currWord, name, role });
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port: http://localhost:${PORT}`)
});


