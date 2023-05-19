import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { ImpDates } from './components/ImpDates';
import { PreviousEvents } from './components/PreviousEvents';
import { Program } from './components/Program';
import { Submission } from './components/Submission';
import { Committee } from './components/Committee';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route exact path='/importantDates' element={<ImpDates />} />
          <Route exact path='/previousEvents' element={<PreviousEvents />}/>
          <Route exact path='/program' element={<Program />}/>
          <Route exact path='/submission' element={<Submission />} />
          <Route exact path='/committee' element={<Committee />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
