function HasWord(word) {
  word_found = false;
  fetch('/ukr-dict/base.lst')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      lines = data.split('\n');
      for (var line of lines) {
        if (line === word) {
          console.log('Word found!');
          word_found = true;
          break;
        }
        /*const [word, tags] = line.split(' ');
        if (word === wordToSearch) {
          return true;
        }*/
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });  
  if (word_found === false)
    console.log('Word not foudn!);
}
