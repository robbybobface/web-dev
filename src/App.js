import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/Tuiter/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index exact={true} element={<Labs/>}/>
                        <Route path="labs" exact={true} element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               exact={true}
                               element={<Tuiter/>}>
                            <Route index
                                   exact={true}
                                   element={<HomeScreen/>}/>
                            <Route path="home"
                                   exact={true}
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   exact={true}
                                   element={<ExploreComponent/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
