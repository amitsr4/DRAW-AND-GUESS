const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 

let currWord;
let currDrawer;
let currGuesser;
const players = [
    {}    
];

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}));

//middleware & static files
app.use(express.static('public'));
app.use(express.json()); //TODO not sure i need it.

app.get('/', (req,res)=>{
    res.render('welcome-view', {title: 'Home'});
});

app.post('/word-choosing-view',(req,res)=>{
    const id = req.body['button']
    players.push(id);
    res.render('word-choosing-view', {title: 'Choosing', id})
});

app.get('/word-choosing-view.ejs', (req,res)=>{
    res.render('word-choosing-view', {title: 'Home'});
});

app.post('/guessing-view',(req,res)=>{
    currWord = req.body.word;
    res.render('guessing-view', {title: 'Guessing', currWord})
});

app.post('/drawing-view',(req,res)=>{
    currWord = req.body.word;
    res.render('drawing-view', {title: 'Drawing', currWord})
});


// app.post('/drawing-view',(req,res)=>{
//     const word =req.body.word;
//     res.render('drawing-view', {title: 'Drawing', word})
// });

// app.post('/drawing-view', (req,res)=>{
//     const draw = new Draw(req.body);

//     draw.save().then((result) =>{
//         res.redirect('/waiting-view')
//     })
//     .cath((err)=>{ 
//         console.log(err);
//     })
// });


app.listen(PORT, () => {
    console.log(`Server started, listening on port: http://localhost:${PORT}`)
});


