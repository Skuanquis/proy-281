import './App.css';
import "./styles.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from './routes/About';
import Team from './routes/Team';
import SignIn from './routes/SignIn';
import Events from './routes/Events';

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}
