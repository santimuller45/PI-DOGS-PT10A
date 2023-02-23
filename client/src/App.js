import { Route, Routes, useLocation} from "react-router-dom";
import { LandingPage, Home, Form , Detail} from './views/index.js';
import Nav from './components/Nav/Nav.jsx';

function App() {

  const location = useLocation();
  
 
  return (
    <div className="App">
      <div>
        {location.pathname === "/home" || location.pathname === "/form" ? <Nav/> : undefined}
      </div>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/detail/:detailId" element={<Detail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
