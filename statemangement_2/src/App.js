import './App.css';
import Component_State from './Components/Component_State';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/component_state' element={<Component_State num = {0}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
