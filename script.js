document.addEventListener('DOMContentLoaded', function() {
    var songList = document.getElementById('songList');
    var currentSong = document.getElementById('currentSong');
    var audioPlayer = document.getElementById('audioPlayer');
  
    // Event listener for song selection
    songList.addEventListener('click', function(event) {
      var selectedSong = event.target.textContent;
      currentSong.textContent = selectedSong;
      audioPlayer.src = 'Music/' + selectedSong + '.mp3';
      audioPlayer.load(); // Load the audio file
      audioPlayer.play(); // Play the audio
    });
  });
  