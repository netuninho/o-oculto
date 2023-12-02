document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('myAudio');
    const toggleButton = document.getElementById('toggleButton');
    let isPlaying = false;
  
    toggleButton.addEventListener('click', function() {
      if (isPlaying) {
        audioElement.pause();
        toggleButton.textContent = 'Play';
      } else {
        audioElement.play()
          .then(() => {
            console.log('Áudio reproduzido com sucesso!');
          })
          .catch(error => {
            console.error('Erro ao reproduzir áudio:', error);
          });
        toggleButton.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
    });
  });
  