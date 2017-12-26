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
  } else if (question == 'Which position are you applying for?') {
    res.send('Software Engineer with Fullstack, Backend, or Frontend experience - bRealTime - New York or Chicago')
  } else if (question == 'How did you hear about this position?'){
    res.send('AngelList')
  } else if (question == 'Please list your relevant university degree(s).') {
    res.send('Pace University, Seidenberg School of Computer Science and Information
    \nSUNY Binghamton, Harpur College of Arts and Science ')
  } else if (question == 'Please provide a URL where we can download your resume and cover letter.'){
    res.send('https://drive.google.com/file/d/1UQB_sFeRWeQ6upbExBmSMIcmYEqntT8T/view?usp=sharing')
  } else if (question == 'Please provide a URL where we can download the source code of your resume submission web service.') {
    res.send('https://github.com/rcohen0511/EngineMedia')
  } else if (question == 'Can you provide proof of eligibility to work in the US?'){
    res.send('Yes')
  } else if (question == 'Please solve this puzzle: ABCD A=--- B>--- C->-- D<---') {
    res.send('')
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
