import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('');
  const [findPersons, setFindPersons] = useState([]);

  const handleOnChance=(e)=>{
    setNewPerson(e.target.value)

  }

  const handleOnChanceNumber=(e)=>{
    setNewNumber(e.target.value)
  }

  const handleOnChangeSearch=(e)=>{
    setSearch(e.target.value) 
    const findView=persons.filter((item)=>{
      const searchValue=search.toLowerCase()
      const viewValue=item.name.toLowerCase()
      return viewValue.indexOf(searchValue) >-1
    }) 
    setFindPersons(findView)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newPersonAdd={
      name:newPerson,
      number:newNumber
    }
    setPersons(persons.concat(newPersonAdd)) 
    setNewPerson('') 
    setNewNumber('')  
  }    

  return (
    <>
      <h2>Search Name</h2>
      <input onChange={handleOnChangeSearch} value={search}/>
      <ul>
        {findPersons        
        .map(person=>(
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name:<input onChange={handleOnChance} value={newPerson}/>
        </div>
        <div>
          Number: <input onChange={handleOnChanceNumber} value={newNumber}/>
        </div>
        <button>add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons        
        .map(person=>(
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
