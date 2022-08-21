import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value='2500' size="small"/>
      <DisplayBalances/>
      <MainHeader title='History' type='h3'/>
      
      <EntryLine description='Something' value='$10' isExpense/>
      <EntryLine description='Something' value='$100'/>

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
