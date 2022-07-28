
import './App.css';
import { AddTransaction } from './component/AddTransaction';
import  { Balance } from './component/Balance';
import { Header } from './component/Header';
import{ IncomeExpences } from './component/IncomeExpences';
import { TransactionList } from './component/TransactionList';

function App() {
  return (
    
      <div className="container">
      <Header />
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>

    
  
  );
}

export default App;
