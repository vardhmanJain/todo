const express = require('express');

const app = express()
app.use(express.json());
let todos = [];

app.get('/', (req, res) =>{
	res.send(todos);
});

app.post('/', (req, res) =>{
	req.body.id = Math.random()*100;
	todos.push(req.body);
	res.send(todos);
});

app.listen(3000, ()=>{
	console.log("listening on port 3000");
});
