import './App.css';
import {Route,Routes} from "react-router-dom";
import Welcome from './components/welcome/Welcome';
import Home from './components/home/Home';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
