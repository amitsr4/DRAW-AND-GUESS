const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 


const players = [
    {id: 1, name: 'player 1'},
    {id: 2, name: 'player 2'},    
];

app.use(bodyParser.urlencoded({ extended: false }));

//middleware & static files
app.use(express.static('public'));

// app.get('/word-choosing-view.ejs', (req,res)=>{
//     res.render('word-choosing-view', {title: 'Home'});
// });

app.get('/', (req,res)=>{
    res.render('welcome-view', {title: 'Home'});
});

app.post('/drawing-view',(req,res)=>{
    const word =req.body.word;
    res.render('drawing-view', {title: 'Drawing', word})
});

// app.post('/drawing-view', (req,res)=>{
//     const draw = new Draw(req.body);

//     draw.save().then((result) =>{
//         res.redirect('/waiting-view')
//     })
//     .cath((err)=>{ 
//         console.log(err);
//     })
// });

app.get('/word-choosing-view', (req,res)=>{
    res.render('word-choosing-view', {title: 'Choose word'});
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port: http://localhost:${PORT}`)
});


