onload = () => {
  document.body.classList.remove("container");
  
  // Crear y reproducir el audio automáticamente
  const audio = new Audio("audio.mp3");
  audio.loop = true;
  audio.volume = 1; // Volumen máximo
  
  // Manejar errores de carga
  audio.addEventListener('error', (e) => {
    console.error('Error al cargar el audio:', e);
    console.error('Verifica que el archivo assets/audio/audio.mp3 exista');
  });
  
  // Intentar reproducir automáticamente
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log('Audio reproduciéndose');
      })
      .catch(error => {
        console.log('Reproducción automática bloqueada. Haz clic en la página para reproducir.');
        // Reproducir al hacer clic en cualquier parte
        document.addEventListener('click', () => {
          audio.play().catch(e => console.error('Error al reproducir:', e));
        }, { once: true });
      });
  }

};
