
import './App.css';
import { AddTransaction } from './component/AddTransaction';
import  { Balance } from './component/Balance';
import { Header } from './component/Header';
import{ IncomeExpences } from './component/IncomeExpences';
import { TransactionList } from './component/TransactionList';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>


      <div className="container">
      <Header />
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

    
  
  );
}

export default App;
