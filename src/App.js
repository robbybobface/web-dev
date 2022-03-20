import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact={true} path="/hello" element={<HelloWorld/>}/>
                    <Route exact={true} path="/" element={<Labs/>}/>
                    <Route exact={true} path="/labs" element={<Labs/>}/>
                    <Route exact={true} path="/tuiter" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
