(function() {

  var writeNote = document.querySelector('#write-note');
  var noteContainer = document.querySelector('.note-container');
  var colors = ['red-note', 'yellow-note', 'green-note', 'seafoam-note','lightblue-note', 'blue-note', 'purple-note', 'pink-note', 'darkpink-note'];

  function openWriteNote() {
    var writeInner = writeNote.innerHTML;

    //only open the note if it's collapsed
    if(writeInner === 'Write note') {
      writeNote.innerHTML = '';

      //create all the nodes for the writeNote div
      var input = document.createElement('input'),
          text = document.createElement('textarea'),
          colorSelect = document.createElement('div')
          submitButton = document.createElement('button'),
          buttonText = document.createTextNode('Done');

      input.setAttribute('placeholder', 'Title');
      text.setAttribute('placeholder', 'Write note');
      colorSelect.setAttribute('class', 'color-select');

      //create the color selects
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

      //append new nodes to the dom
      submitButton.appendChild(buttonText);
      colorSelect.appendChild(submitButton);
      writeNote.appendChild(input);
      writeNote.appendChild(text);
      writeNote.appendChild(colorSelect);

      //add note to the dom when user submits
      submitButton.addEventListener('click', function(e) {
        submitNote(input, text, e);
      });
    }
  }

  function submitNote(input, text, e) {
    var noteTitle = input.value,
        noteText = text.value,
        noteColor = writeNote.getAttribute('class');
        note = document.createElement('div'),
        title = document.createElement('h1'),
        innerNoteText = document.createElement('p');

    title.setAttribute('class', 'title');
    title.innerText = noteTitle;
    innerNoteText.innerText = noteText;
    note.classList.add('note');
    note.classList.add(noteColor);
    note.appendChild(title);
    note.appendChild(innerNoteText);
    noteContainer.insertBefore(note, noteContainer.firstChild);

    //reset write note div
    writeNote.innerHTML = 'Write note';
    writeNote.setAttribute('class', 'white-note');
    e.stopPropagation();
  }

  writeNote.addEventListener('click', openWriteNote);

}());
