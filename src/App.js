import logo from './logo.svg';
import './App.css';
import Form from './form';
import Tableshow from './Tableshow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Routes>
<Route path='/' element={<Home/>} />
  <Route path='/edit/:index' element={<Edit/>} />
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
