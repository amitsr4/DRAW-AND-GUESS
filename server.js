const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs'); 


const players = [
    {id: 1, name: 'player 1'},
    {id: 2, name: 'player 2'},    
];

app.get('/', (req,res)=>{
    console.log("Server Up");
    app.render('welcome-view');
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port: http://localhost:${PORT}`)
});


