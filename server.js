const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 

let currWord;
let currDrawer ='free';
let currGuesser= 'free';
let avialability = 'available';
let draw;


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}));

//middleware & static files
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
    if(currDrawer != 'free' && currDrawer != 'free'){
        avialability = 'full';
    }
    res.render('welcome-view', {title: 'Home'});
});
app.get('/waiting-view', (req,res)=>{
    res.render('waiting-view', {title: 'Waiting'});
});

app.post('/waiting-view',(req,res)=>{
    if(currGuesser){
    draw = req.body.imgBase64;
    currWord = req.body.word;
    res.render('guessing-view', {title: 'Waiting', draw});
    }
    else{
        res.render('waiting-view', {title: 'Waiting'});
    }
});

app.post('/word-choosing-view',(req,res)=>{
    const role = req.body['button']
    const name = req.body['name']
    if(role=='Drawer'){ 
        // if(currDrawer != 'free'){
        //     console.log("The drawer role is taken")
        // }else {
            currDrawer = name;
            res.render('word-choosing-view', {title: 'Choosing', role, name});
        // }
    } else{
        // if(currGuesser != 'free'){
        //     if(currDrawer!= 'free') console.log("Please wait until one player quit")
        //     else console.log("The Guesser role is taken")
        // }else {currGuesser = name;
        res.render('guessing-view', {title: 'Guessing', role, name});
        // }
    } 
   
});
app.get('/instructions', (req,res)=>{
    res.render('instructions', {title: 'Instruction'});
});

app.get('/word-choosing-view.ejs', (req,res)=>{
    res.render('word-choosing-view', {title: 'Home'});
});

app.get('/guessing-view',(req,res)=>{
    console.log(currWord);
    console.log(currDrawer +" drawer");
    console.log(currGuesser +" guesser");


    if(currWord == req.body['guess']) res.send('Correct!')
    else res.send('Wrong!');
    // res.render('guessing-view', {title: 'Guessing', currWord})
});

app.post('/drawing-view',(req,res)=>{
    currWord = req.body.word;
    res.render('drawing-view', {title: 'Drawing', currWord});
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port: http://localhost:${PORT}`)
});


