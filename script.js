let notes = [
  {
    id:'bbl8ldksy',
    name:'Shopping List',
    creationDate:'2022-09-12',
    category:'Task',
    content:'Cheese, tea, fruits',
    dates:'',
    status:'active'
  },
  {
    id:'bal83dksi',
    name:'New Feature',
    creationDate:'2022-09-01',
    category:'Idea',
    content:'Create new feature',
    dates:'',
    status:'active'
  },
  {
    id:'wbl87dksq',
    name:'This day',
    creationDate:'2022-09-05',
    category:'Random Thought',
    content:'Beauty of this day',
    dates:'',
    status:'active'
  },
  {
    id:'bdl5ldksd',
    name:'Books list',
    creationDate:'2022-09-07',
    category:'Task',
    content: 'Andrew Matthews - Goodreads,Jen Sincero - You Are a Badass',
    dates:'',
    status:'active'
  },
  {
    id:'ebl84dksr',
    name:'Dantist visit',
    creationDate:'2022-09-03',
    category:'Task',
    content:'change Dantist visit from 04.09.2022 to 06.09.2022',
    dates:'04.09.2022, 06.09.2022',
    status:'active'
  },
  {
    id:'bbl87dksi',
    name:'Сelebration organization',
    creationDate:'2022-09-09',
    category:'Idea',
    content:'Nice place for Сelebration',
    dates:'',
    status:'active'
  },
  {
  id:'cbl2ldksk',
  name:'What if',
  creationDate:'2022-09-11',
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
  noteNumber.classList.add('id');
  noteNumber.textContent=note.id;
  const noteName = document.createElement('div');
  noteName.classList.add('col');
  noteName.classList.add('name');
  noteName.textContent=note.name;
  const created = document.createElement('div');
  created.classList.add('col');
  created.classList.add('creation-date');
  created.textContent = note.creationDate;
  const noteCategory = document.createElement('div');
  noteCategory.classList.add('col');
  noteCategory.classList.add('category');
  noteCategory.textContent = note.category;
  const noteContent = document.createElement('div');
  noteContent.classList.add('col');
  noteContent.classList.add('content');
  noteContent.textContent = note.content;
  const dates = document.createElement('div');
  dates.classList.add('col');
  dates.classList.add('dates');
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

  archiveMovement();
  addNoteToBin();
  openEditNoteModal();
}

function createArchivedNotesList(){
  let archivedNotesList=document.querySelector('.archived-notes-list');
  archivedNotesList.textContent='';
  archivedNotes.forEach(note=> {
  let row = document.createElement('div');
  row.classList.add('list-row');
  const noteNumber = document.createElement('div');
  noteNumber.classList.add('col');
  noteNumber.classList.add('id');
  noteNumber.textContent=note.id;
  const noteName = document.createElement('div');
  noteName.classList.add('col');
  noteName.classList.add('name');
  noteName.textContent=note.name;
  const created = document.createElement('div');
  created.classList.add('col');
  created.classList.add('creation-date');
  created.textContent = note.creationDate;
  const noteCategory = document.createElement('div');
  noteCategory.classList.add('col');
  noteCategory.classList.add('category');
  noteCategory.textContent = note.category;
  const noteContent = document.createElement('div');
  noteContent.classList.add('col');
  noteContent.classList.add('content');
  noteContent.textContent = note.content;
  const dates = document.createElement('div');
  dates.classList.add('col');
  dates.classList.add('dates');
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
  archiveIcon.classList.add('dir-de-archive');
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

  addNoteToBin();
  deArchiveMovement();
  openEditNoteModal();
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


// тоглер на кнопку с архивом
function archiveButtonTogler(){
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
}


// модальное окно

function openModal(){
  let modal = document.querySelector('.modal');
  modal.style.display='block';
  let close = document.querySelector('.modal-close');
  close.innerHTML = "\u00D7"
  close.addEventListener('click',() => modal.style.display='none');
  let submitBtn = document.querySelector('.save');
  submitBtn.addEventListener('click',() => modal.style.display='none');
  document.querySelector('.modal-title').textContent='Add Note'
  document.querySelector('.save').textContent='Save'
}

function addNewNote() {
  openModal();
  let form=document.querySelector('#new-note');
  let saveBtn=document.querySelector('.save');
  if (saveBtn.classList.contains('change')) saveBtn.classList.remove('change')

  document.querySelector('.save').addEventListener('click', function(event){
    let formObj = new FormData(form);
    let newNote = Object.fromEntries(formObj.entries());
    newNote.id = Math.random (). toString (36) .substr (2, 9);
    newNote.status='active';
    let cont = newNote.content;
    const regex = /\d{4}-\d{2}-\d{2}/g;
    let myDates= cont.match(regex).join();
    newNote.dates=myDates;
    notes.push(newNote);
    let notesList=document.querySelector('.notes-list');
    notesList.textContent='';
    createNotesList(notes);
    form.reset();
  })
}

function openEditNoteModal() {
  let openEditNoteModalBtn=document.querySelectorAll('.editNote');
  openEditNoteModalBtn.forEach(openModalButton => {
    openModalButton.addEventListener('click', function(event) {
      openModal();
      document.querySelector('.modal-title').textContent='Edit Note';
      document.querySelector('.save').textContent='Save Changes';
      // считать данные формы со строки в объект
      const actionIcons= openModalButton.parentNode;
      const rowForChange = actionIcons.parentElement;
      console.log('rowForChange',rowForChange)
      let id = rowForChange.querySelector('.id').textContent;
      let name = rowForChange.querySelector('.name').textContent;
      let creationDate = rowForChange.querySelector('.creation-date').textContent;
      let category = rowForChange.querySelector('.category').textContent;
      let content = rowForChange.querySelector('.content').textContent;
      let dataForEditing = {
        id,
        name,
        creationDate,
        category,
        content
      }
      // подставить данные из объекта в форму
      let form=document.querySelector('#new-note');
      form.querySelector('.name').value = dataForEditing.name;
      form.querySelector('.creation-date').value = dataForEditing.creationDate;
      const select=form.querySelector('.category');
      const options = Array.from(select.options);
      const optionToSelect = options.find(item => item.text === dataForEditing.category);
      optionToSelect.selected = true;
      form.querySelector('.content-aria').value = dataForEditing.content;
     // подменить данные в объектaх активных и архивных записей
     let saveCangesBtn=document.querySelector('.save');
      if (saveCangesBtn.classList.contains('save')) {
        saveCangesBtn.classList.add('change');
      }

      document.querySelector('.change').addEventListener('click',function() {
        let formObj = new FormData(form);
        let editedNote = Object.fromEntries(formObj.entries());
        editedNote.id=dataForEditing.id;
        console.log('editedNote', editedNote);
        console.log('notes', notes);
        let searchNote = notes.find((note)=>note.id === editedNote.id);
        let changeIndex = notes.findIndex((note)=>note.id===editedNote.id);
        if (searchNote!== undefined) {
        let {name, creationDate, category, content} = editedNote;
        notes[changeIndex].name = name;
        notes[changeIndex].creationDate=creationDate;
        notes[changeIndex].category=category;
        notes[changeIndex].content=content;
        let notesList=document.querySelector('.notes-list');
        notesList.textContent='';
        createNotesList();
        }
        if (searchNote === undefined) {
        console.log('searchNote === undefined')
        searchNote = archivedNotes.find((note)=>note.id === editedNote.id);
        changeIndex = archivedNotes.findIndex((note)=>note.id === editedNote.id);
        let {name, creationDate, category, content} = editedNote;
        archivedNotes[changeIndex].name=name;
        archivedNotes[changeIndex].creationDate=creationDate;
        archivedNotes[changeIndex].category=category;
        archivedNotes[changeIndex].content=content;
        let archNotesList=document.querySelector('.archived-notes-list');
        console.log('archNotesList',archNotesList)
        archNotesList.textContent='';
        createArchivedNotesList();
        }
        console.log('notes and', notes);
        console.log('indarchivedNotes end', archivedNotes);
      })
    });
  })
}

window.onclick = function(e){
  if (e.target.hasAttribute('data-modal-window')) {
    let modals=document.querySelectorAll('*[data-modal-window]');
    modals.forEach(modal => modal.style.display='none');
  }
}

document.querySelector('.cancel').addEventListener('click',()=>{
document.querySelector('[data-modal-window]').style.display='none';
})


// удаление
function addNoteToBin(){
  document.querySelectorAll('.bin').forEach(delBtn=>{
    delBtn.addEventListener('click',(e) => {
    console.log('click')
    const actionIcons= delBtn.parentNode;
    const rowForDel = actionIcons.parentNode;
    let idElForDel = rowForDel.children[0].textContent;
    notes=notes.filter(note=>note.id!==idElForDel);
    rowForDel.remove();
    console.log(notes);
    })
  })
}

// и перемещение
function archiveMovement(){
  document.querySelectorAll('.dir').forEach(archiveBtn=>{
    archiveBtn.addEventListener('click',(e)=>{
    console.log('arcived');
    const actionIcons= archiveBtn.parentNode;
    const rowForArchive = actionIcons.parentNode;
    let idElemForArcive = rowForArchive.children[0].textContent;
    rowForArchive.remove();
    let noteForArchived=notes.filter(note => note.id === idElemForArcive);
    noteForArchived[0].status='archived';
    archivedNotes.push(noteForArchived[0]);
    notes = notes.filter(note => note.id !== idElemForArcive)
    console.log('notes from arch', notes);
    console.log('archivedNotes', archivedNotes);
    createArchivedNotesList();
    })
  })
}

function deArchiveMovement(){
  document.querySelectorAll('.dir-de-archive').forEach(archiveBtn=>{
    archiveBtn.addEventListener('click',(e)=>{
    console.log('dearcived');
    const actionIcons= archiveBtn.parentNode;
    const rowForDeArchive = actionIcons.parentNode;
    let idElemForDeArcive = rowForDeArchive.children[0].textContent;
    rowForDeArchive.remove();
    let noteForDeArchived=archivedNotes.filter(note => note.id === idElemForDeArcive);
    noteForDeArchived[0].status='active';
    notes.push(noteForDeArchived[0]);
    let notesList=document.querySelector('.notes-list');
    notesList.textContent='';
    createNotesList();
    archivedNotes = archivedNotes.filter(note => note.id !== idElemForDeArcive);
    console.log('archivedNotes from deArch',archivedNotes);
    console.log('notes from deArch', notes);
    createArchivedNotesList();
    })
  })
}
