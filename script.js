let notes = [
  {
    id:'bbl8ldksy',
    name:'Shopping List',
    creationDate:'12.09.2022',
    category:'Task',
    content:'Cheese, tea, fruits',
    dates:'',
    status:'active'
  },
  {
    id:'bal83dksi',
    name:'New Feature',
    creationDate:'01.09.2022',
    category:'Idea',
    content:'Create new feature',
    dates:'',
    status:'active'
  },
  {
    id:'wbl87dksq',
    name:'This day',
    creationDate:'05.09.2022',
    category:'Random Thought',
    content:'Beauty of this day',
    dates:'',
    status:'active'
  },
  {
    id:'bdl5ldksd',
    name:'Books list',
    creationDate:'05.09.2022',
    category:'Task',
    content: 'Andrew Matthews - Goodreads,Jen Sincero - You Are a Badass',
    dates:'',
    status:'active'
  },
  {
    id:'ebl84dksr',
    name:'Dantist visit',
    creationDate:'03.09.2022',
    category:'Task',
    content:'change Dantist visit from 04.09.2022 to 06.09.2022',
    dates:'04.09.2022, 06.09.2022',
    status:'active'
  },
  {
    id:'bbl87dksi',
    name:'Сelebration organization',
    creationDate:'03.09.2022',
    category:'Idea',
    content:'Nice place for Сelebration',
    dates:'',
    status:'active'
  },
  {
  id:'cbl2ldksk',
  name:'What if',
  creationDate:'09.09.2022',
  category:'Random Thought',
  content:'What if...',
  dates:'',
  status:'active'
}
];

let archivedNotes=[];

let summList = [
  {
    id:8,
    category:'Task',
    active: 0,
    arcived: 0
  },
  {
    id:9,
    category:'Idea',
    active: 0,
    arcived: 0
  },
  {
    id:10,
    category:'Random Thought',
    active: 0,
    arcived: 0
  }
]

function createNotesList(){
  let notesList=document.querySelector('.notes-list');
  notes.forEach(note=> {
  let row = document.createElement('div');
  row.classList.add('list-row');
  const noteNumber = document.createElement('div');
  noteNumber.classList.add('col');
  noteNumber.textContent=note.id;
  const noteName = document.createElement('div');
  noteName.classList.add('col');
  noteName.textContent=note.name;
  const created = document.createElement('div');
  created.classList.add('col');
  created.textContent = note.creationDate;
  const noteCategory = document.createElement('div');
  noteCategory.classList.add('col');
  noteCategory.textContent = note.category;
  const noteContent = document.createElement('div');
  noteContent.classList.add('col');
  noteContent.textContent = note.content;
  const dates = document.createElement('div');
  dates.classList.add('col');
  dates.textContent = note.dates;
  const actionIcons = document.createElement('div');
  actionIcons.classList.add('action-icons');
  let editIcon = document.createElement('img');
  editIcon.setAttribute('src','./icons/edit.svg');
  editIcon.setAttribute('alt','edit');
  editIcon.setAttribute('data-modal-btn','add-note');
  editIcon.classList.add('editNote');
  let archiveIcon = document.createElement('img');
  archiveIcon.setAttribute('src','./icons/archive.svg')
  archiveIcon.setAttribute('alt','archive');
  archiveIcon.classList.add('dir');
  let delIcon = document.createElement('img');
  delIcon.setAttribute('src','./icons/white-bin.svg');
  delIcon.setAttribute('alt','bin');
  delIcon.classList.add('bin');
  actionIcons.appendChild(editIcon);
  actionIcons.appendChild(archiveIcon);
  actionIcons.appendChild(delIcon);
  row.appendChild(noteNumber);
  row.appendChild(noteName);
  row.appendChild(created);
  row.appendChild(noteCategory);
  row.appendChild(noteContent);
  row.appendChild(dates);
  row.appendChild(actionIcons);
  notesList.appendChild(row);
  })
}

function createArchivedNotesList(){
  let archivedNotesList=document.querySelector('.archived-notes-list');
  archivedNotesList.textContent='';
  archivedNotes.forEach(note=> {
  let row = document.createElement('div');
  row.classList.add('list-row');
  const noteNumber = document.createElement('div');
  noteNumber.classList.add('col');
  noteNumber.textContent=note.id;

  const noteName = document.createElement('div');
  noteName.classList.add('col');
  noteName.textContent=note.name;
  const created = document.createElement('div');
  created.classList.add('col');
  created.textContent = note.creationDate;
  const noteCategory = document.createElement('div');
  noteCategory.classList.add('col');
  noteCategory.textContent = note.category;
  const noteContent = document.createElement('div');
  noteContent.classList.add('col');
  noteContent.textContent = note.content;
  const dates = document.createElement('div');
  dates.classList.add('col');
  dates.textContent = note.dates;
  const actionIcons = document.createElement('div');
  actionIcons.classList.add('action-icons');
  let editIcon = document.createElement('img');
  editIcon.setAttribute('src','./icons/edit.svg');
  editIcon.setAttribute('alt','edit');
  editIcon.setAttribute('data-modal-btn','add-note');
  editIcon.classList.add('editNote');
  let archiveIcon = document.createElement('img');
  archiveIcon.setAttribute('src','./icons/archive.svg')
  archiveIcon.setAttribute('alt','archive');
  archiveIcon.classList.add('dir');
  let delIcon = document.createElement('img');
  delIcon.setAttribute('src','./icons/white-bin.svg');
  delIcon.setAttribute('alt','bin');
  delIcon.classList.add('bin');
  actionIcons.appendChild(editIcon);
  actionIcons.appendChild(archiveIcon);
  actionIcons.appendChild(delIcon);
  row.appendChild(noteNumber);
  row.appendChild(noteName);
  row.appendChild(created);
  row.appendChild(noteCategory);
  row.appendChild(noteContent);
  row.appendChild(dates);
  row.appendChild(actionIcons);
  archivedNotesList.appendChild(row);
  })
}

function createSummList(){
  let sumBody=document.querySelector('.summary-table-body');
  summList.forEach(noteCategory=>{
    let row = document.createElement('div');
    row.classList.add('sum-row');
    const categoryName = document.createElement('div');
    categoryName.classList.add('colom');
    categoryName.textContent = noteCategory.category;
    const active = document.createElement('div');
    active.classList.add('coloms');
    active.textContent = noteCategory.active;
    const archived = document.createElement('div');
    archived.classList.add('coloms');
    archived.textContent = noteCategory.arcived;
    row.appendChild(categoryName);
    row.appendChild(active);
    row.appendChild(archived);
    sumBody.appendChild(row);
  }
  )
}

createNotesList();
createArchivedNotesList();
createSummList();



let showArchiveBtn=document.querySelector('.show-archive-btn');
let archivedNotesListWrapper=document.querySelector('.archived-notes-list-wrapper');
showArchiveBtn.addEventListener('click', ()=> {
  archivedNotesListWrapper.classList.contains('active')?
  archivedNotesListWrapper.classList.remove('active') :
  archivedNotesListWrapper.classList.add('active');

  archivedNotesListWrapper.classList.contains('active')?
  showArchiveBtn.innerHTML ="Hide Archive":
  showArchiveBtn.innerHTML ="Show Archive";
})

// модальное окно

let modalBtns=document.querySelectorAll('*[data-modal-btn]');
modalBtns.forEach(modalButton => {
  modalButton.addEventListener('click', function(){
  let name = modalButton.getAttribute('data-modal-btn');
  let modal = document.querySelector('[data-modal-window = '+name+']');
  modal.style.display='block';
  let close= document.querySelector('.modal-close');
  close.innerHTML="\u00D7"
  close.addEventListener('click',()=>modal.style.display='none');
  let submitBtn= document.querySelector('.save');
  submitBtn.addEventListener('click',()=>modal.style.display='none');
})
})

window.onclick = function(e){
  if (e.target.hasAttribute('data-modal-window')) {
    let modals=document.querySelectorAll('*[data-modal-window]');
    modals.forEach(modal => modal.style.display='none');
  }
}

document.querySelector('.cancel').addEventListener('click',()=>{
  let modals=document.querySelectorAll('*[data-modal-window]');
  modals.forEach(modal => modal.style.display='none');
})

// форма внутри модальног окна для добавления новой заметки, примитивная валидация, очистка при закрытии
//  добавление данных формы в объект
let form=document.querySelector('#new-note')
form.addEventListener('submit', function(event){
  event.preventDefault();
  let formObj = new FormData(form);
  let newNote = Object.fromEntries(formObj.entries());
  newNote.id = Math.random (). toString (36) .substr (2, 9);
  newNote.status='active';
  notes.push(newNote);
  // console.log('newNote',newNote);
  console.log('notes',notes);
  let notesList=document.querySelector('.notes-list');
  notesList.textContent='';
  createNotesList(notes);
  form.reset();
})

// удаление и перемещение
document.querySelectorAll('.bin').forEach(delBtn=>{
  delBtn.addEventListener('click',(e)=>{
  console.log('click')
  const actionIcons= delBtn.parentNode;
  const rowForDel = actionIcons.parentNode;
  let idElForDel = rowForDel.children[0].textContent;
  notes=notes.filter(note=>note.id!==idElForDel);
  rowForDel.remove();
  console.log(notes);
  })
})

document.querySelectorAll('.dir').forEach(archiveBtn=>{
  archiveBtn.addEventListener('click',(e)=>{
  console.log('arcived');
  const actionIcons= archiveBtn.parentNode;
  const rowForArchive = actionIcons.parentNode;
  let idElemForArcive = rowForArchive.children[0].textContent;
  rowForArchive.remove();
  let noteForArchived=notes.filter(note=>note.id===idElemForArcive);
  archivedNotes.push(noteForArchived[0]);
  console.log('archivedNotes', archivedNotes);
  createArchivedNotesList()
  })
})
