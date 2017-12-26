var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/', function (req, res) {
	// displayForm(res);
  // console.log(req);
  console.log('get')
  console.log(req.query);
  console.log(req.query['d']);

  var question = req.query['d'];
  if (question == 'Please return OK so that I know your service works.'){
    res.send('OK')
  } else if (question == 'What is your email address?') {
    res.send('rcohen0511@gmail.com')
  } else if (question == 'Please provide a phone number we can use to reach you.'){
    res.send('917-416-0409')
  }
  // console.log(res);
  res.send('OK')
});

app.post('/', function (req, res) {
	console.log('post')
  res.json({ 'test': 'test'})
});

function displayForm(res){
    console.log(res)
}
