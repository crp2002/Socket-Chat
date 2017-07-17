let app  = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');
let port  = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.set({"Content-Type": "text/html","charset": "UTF-8"  });
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style.css', (req, res)=>{
    res.set({"Content-Type": "text/css","charset": "UTF-8"  });
    res.status(200).sendFile(path.join(__dirname+'/style.css'));

})
app.get('/main.js', (req, res)=>{
    res.set({"Content-Type": "text/js","charset": "UTF-8"  });
    res.status(200).sendFile(path.join(__dirname+'/main.js'));

})

io.on('connection', (socket)=>{
  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('Listening to port ' + port);
});