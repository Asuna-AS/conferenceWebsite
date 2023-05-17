import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { ImpDates } from './components/ImpDates';
import { PreviousEvents } from './components/PreviousEvents';
import { Program } from './components/Program';
import { Submission } from './components/Submission';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route exact path='/importantDates' element={<ImpDates />} />
          <Route exact path='/previousEvents' element={<PreviousEvents />}/>
          <Route exact path='/program' element={<Program />}/>
          <Route exact path='/submission' element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
