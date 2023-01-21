import {React, useState} from 'react';
import NewNoteForm from './components/NewNoteForm';
import Note from './components/Note';

const App = () => { 
  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ]
const [note, setNote] = useState(notes);
const [newNote, setNewNote] = useState('nueva nota');

const addNote=(event)=>{
  event.preventDefault()
  const noteObject={
    content:newNote,
    date: new Date().toISOString(),
    important: Math.random()<0.5,
    id: notes.length+1
  }
  setNote(notes.concat(noteObject))
  setNewNote('')
}

const handleOnChange=(event)=>{
  console.log(event.target.value)
  setNewNote(event.target.value)
}


  return (
    <>
    <h1>Notes:</h1>
      <ul>
        {note.map(
          note=>(
            <Note key={note.id} note={note.content}/>
          )
          )}
      </ul>
      <NewNoteForm 
        submit={addNote}
        newNote={newNote}
        onChange={handleOnChange}
      />
    </>
  );
}

export default App;
