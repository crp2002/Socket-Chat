$( () => {
        var socket = io();
        $('form').submit(()=>{
          socket.emit('chat message', $('#input-message').val());
          $('#input-message').val('');
          return false;
        });
        socket.on('chat message', (msg)=>{
          $('#messages').append($('<li>').text(msg));
          window.scrollTo(0, document.body.scrollHeight);
        });
      });