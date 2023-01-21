import React from 'react';

const NewNoteForm = (props) => {
    const {submit, newNote, onChange}=props
    return (
        <>
        <form onSubmit={submit}>
        <input value={newNote} onChange={onChange}/>
        <button type='submit'>save</button>            
        </form>
        </>

    );
}

export default NewNoteForm;
