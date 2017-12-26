var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/', function (req, res) {
	// displayForm(res);
  console.log(req);
  console.log('get')
  console.log(req.query);
  if (req.query.d == 'Please return OK so that I know your service works'){
    res.json('OK':'OK')
  }
  // console.log(res);
  res.json({ 'answer': 'answer 1'})
});

app.post('/', function (req, res) {
	console.log('post')
  res.json({ 'test': 'test'})
});

function displayForm(res){
    console.log(res)
}
