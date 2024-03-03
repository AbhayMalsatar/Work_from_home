import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import State from './Components/state';
import Effect from './Components/effect';
import Context from './Components/context';
import Callback from './Components/callback';
import Ref from './Components/ref';
import Reducer from './Components/reducer';
import Memo from './Components/memo';
import Navigate from './Components/navigate';
import Location from './Components/location';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/state' element={<State />}/>
      <Route path='/effect' element={<Effect />}/>
      <Route path='/context' element={<Context />}/>
      <Route path='/callback' element={<Callback />}/>
      <Route path='/ref' element={<Ref />}/>
      <Route path='/reducer' element={<Reducer />}/>
      <Route path='/memo' element={<Memo />}/>
      <Route path='/navigate' element={<Navigate />}/>
      <Route path='/location' element={<Location />}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
