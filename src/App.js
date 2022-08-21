import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });
    console.log('result', result);
    console.log('entries', entries);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value='2500' size="small"/>
      <DisplayBalances/>
      <MainHeader title='History' type='h3'/>
      
      <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen}/>
      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm 
        addEntry={addEntry}
        description={description} 
        value={value} 
        isExpense={isExpense}
        setDescription={setDescription} 
        setValue={setValue} 
        setIsExpense={setIsExpense}
      />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: '$1000.00',
    isExpense: false
  },
  {
    id: 2,
    description: 'Water Bill',
    value: '$20.00',
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300.00',
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: '$50.00',
    isExpense: true
  }
]