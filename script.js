(function() {

  const writeNote = document.querySelector('#write-note');
  const noteContainer = document.querySelector('.note-container');
  const colors = ['red-note', 'yellow-note', 'green-note', 'seafoam-note','lightblue-note', 'blue-note', 'purple-note', 'pink-note', 'darkpink-note'];

  function openWriteNote() {
    const writeInner = writeNote.innerHTML;

    //only open the note if it's collapsed
    if(writeInner === 'Write note') {
      writeNote.innerHTML = '';

      //create all the nodes for the writeNote div
      const input = document.createElement('input');
      const text = document.createElement('textarea');
      const colorSelect = document.createElement('div');
      const submitButton = document.createElement('button');
      const buttonText = document.createTextNode('Done');

      input.setAttribute('placeholder', 'Title');
      text.setAttribute('placeholder', 'Write note');
      colorSelect.setAttribute('class', 'color-select');

      //create the color selects
      for(let i = 0; i < 9; i++) {
        (function(i) {
          const color = document.createElement('div');

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

      //increase the height of the text area as the text grows
      text.addEventListener('input', function() {
        this.style.height = '44px';
        this.style.height = this.scrollHeight + 'px';
      });

      //add note to the dom when user submits
      submitButton.addEventListener('click', function(e) {
        submitNote(input, text, e);
      });
    }
  }

  function submitNote(input, text, e) {
    const noteTitle = input.value;
    const noteText = text.value;
    const noteColor = writeNote.getAttribute('class');
    const note = document.createElement('div');
    const title = document.createElement('h1');
    const innerNoteText = document.createElement('p');

    //create note and add to DOM
    title.setAttribute('class', 'title');
    title.innerText = noteTitle;
    innerNoteText.innerText = noteText;
    note.classList.add('note');
    note.classList.add(noteColor);
    note.appendChild(title);
    note.appendChild(innerNoteText);
    noteContainer.insertBefore(note, noteContainer.firstChild);

    //remove note from Dom
    note.addEventListener('click', function(e) {
      this.remove();
    });

    //reset write note div
    writeNote.innerHTML = 'Write note';
    writeNote.setAttribute('class', 'white-note');
    e.stopPropagation();
  }

  writeNote.addEventListener('click', openWriteNote);

}());
