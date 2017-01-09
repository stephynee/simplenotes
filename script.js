(function() {

  var writeNote = document.querySelector('#write-note');
  var colors = ['red-note', 'yellow-note', 'green-note', 'seafoam-note','lightblue-note', 'blue-note', 'purple-note', 'pink-note', 'darkpink-note'];

  function openWriteNote() {
    var writeInner = writeNote.innerHTML;
    
    if(writeInner === 'Write note') {
      console.log('clicked');
      writeNote.innerHTML = '';

      var input = document.createElement('input'),
          text = document.createElement('textarea'),
          colorSelect = document.createElement('div')
          submitButton = document.createElement('button'),
          buttonText = document.createTextNode('Done');

      input.setAttribute('placeholder', 'Title');
      text.setAttribute('placeholder', 'Write note');
      colorSelect.setAttribute('class', 'color-select');

      for(var i = 0; i < 9; i++) {
        (function(i) {
          var color = document.createElement('div');

          color.setAttribute('class', colors[i]);
          colorSelect.appendChild(color);

          color.addEventListener('click', function() {
            writeNote.setAttribute('class', colors[i]);
          });
        }(i));
      }

      submitButton.appendChild(buttonText);
      colorSelect.appendChild(submitButton);
      writeNote.appendChild(input);
      writeNote.appendChild(text);
      writeNote.appendChild(colorSelect);
    }
  }

  writeNote.addEventListener('click', openWriteNote);

}());
