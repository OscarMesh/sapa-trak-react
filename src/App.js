
import './App.css';
import  { Balance } from './component/Balance';
import { Header } from './component/Header';
import{ IncomeExpences } from './component/IncomeExpences';

function App() {
  return (
    
      <div className="container">
      <Header />
        <Balance />
        <IncomeExpences />
      </div>

    
  
  );
}

export default App;
