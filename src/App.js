import './App.css';
import Dentist from './components/ListDentist';
import Patient from './components/ListPatient';

function App() {
  return (
    <div className=" m-3 Container">
      
        <h2 className="title">DentalTech</h2>
        <span className="mt-0 text-muted">Manager App</span>
        
        <Patient />
        
      
    </div>
  );
}

export default App;
