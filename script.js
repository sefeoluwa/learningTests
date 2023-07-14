const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=yoL5mPguQkpHju4h4jBF6bN8CQpmsUXf&s=dogs', {mode: 'cors'})
  .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });


   