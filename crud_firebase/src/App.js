import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SearchDelete from './Components/SearchDelete';
import FireBaseConfig from './Components/FireBaseConfig';
import AddEdit from './Components/AddEdit';
import LoginRegister from './Components/LoginRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/view' element={<SearchDelete />}/>
        <Route path='/' element={<LoginRegister />}/>
        <Route path='/AddEdit' element={<AddEdit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
