const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const textContainer = document.getElementById('textContainer');
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

const texts = [];


function addText(text) {
  const textItem = document.createElement('div');
  textItem.classList.add('text-item');
  textItem.textContent = text;

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.addEventListener('click', () => {
    textInput.value = text;
    removeText(text);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.addEventListener('click', () => {
    removeText(text);
  });

  textItem.appendChild(editButton);
  textItem.appendChild(deleteButton);
  textContainer.appendChild(textItem);
}


function removeText(text) {
  const index = texts.indexOf(text);
  if (index !== -1) {
    texts.splice(index, 1);
    renderTexts();
  }
}
