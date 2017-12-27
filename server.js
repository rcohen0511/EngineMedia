var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/', function (req, res) {
  console.log(req.query['d']);

  var question = req.query['d'];
  var question = 'Please solve this puzzle:\nABCD\nA-->-\nB-=--\nC->--\nD-<--'
  var puzzle = []

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
  } else if (question == 'How many years of software development experience do you have?'){
    res.send('3')
  } else if (question == 'Please list your relevant university degree(s).') {
    res.send('Pace University, Seidenberg School of Computer Science and Information\n\rSUNY Binghamton, Harpur College of Arts and Science ')
  } else if (question == 'Please provide a URL where we can download your resume and cover letter.'){
    res.send('https://drive.google.com/file/d/1UQB_sFeRWeQ6upbExBmSMIcmYEqntT8T/view?usp=sharing')
  } else if (question == 'Please provide a URL where we can download the source code of your resume submission web service.') {
    res.send('https://github.com/rcohen0511/EngineMedia')
  } else if (question == 'Can you provide proof of eligibility to work in the US?'){
    res.send('Yes')
  } else if (question.startsWith('Please solve this puzzle')) {
    var result = '';
    var a;
    var b;
    var c;
    var d;
    var info = question.split("\n");
    var map = [a,b,c,d]

    console.log(info);
    // I know this is probably not the most efficient way to do this, but
    // I am a bit stuck on how to do this better so I will just move forward.
    // These nested for loops build out an array holding a value for each
    // letter, A corresponds to 0, B to 1, etc.
    for (let y = 0; y < 4; y++){
      for (let j = 2; j < info.length; j++){
        for (let i = 0; i < info[j].length; i++){
          if (info[j][i] == '>'){
            if (map[i-1] != undefined){
              map[j-2]=map[i-1]+1
            }
          } else if (info[j][i] == '<'){
            if (map[i-1] != undefined){
              map[j-2]=map[i-1]-1
            }
          } else if (info[j][i] == '='){
            map[j-2]=0
          }
        }
      }
    }
    // The next bit of code structures the answer in the appropriate format
    // using the fuction bellow and the hash table built above
    function buildString(index, map){
      var result = ''
      for (let i = 0; i < map.length; i++){
        if (map[index]>map[i]){
          result += '>'
        }
        else if (map[index]<map[i]){
          result += '<'
        }
        else if (map[index]==map[i]){
          result += '='
        }
      }
      return result
    }

    result += 'ABCD\n'
    result += 'A'+ buildString(0) + '\n'
    result += 'B'+ buildString(1) + '\n'
    result += 'C'+ buildString(2) + '\n'
    result += 'D'+ buildString(3)

    res.send(result);
  }


});

// app.post('/', function (req, res) {
// 	console.log('post')
//   res.json({ 'test': 'test'})
// });
//
// function displayForm(res){
//     console.log(res)
// }
