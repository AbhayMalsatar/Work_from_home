import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import NoteState from './Components/Context/notes/NoteState';
function App() {
  return (
    <NoteState>
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
    </div>
    </NoteState>
  );
}

export default App;
