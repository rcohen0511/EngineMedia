var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/questions', function (req, res) {
	// displayForm(res);
  console.log(req);
  console.log('get')
  res.json({ 'answer': 'answer 1'})
});

app.post('/books', function (req, res) {
	console.log('post')
  res.json({ 'test': 'test'})
});

function displayForm(res){
    console.log(res)
}
