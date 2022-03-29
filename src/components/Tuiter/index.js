import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import './Styles/explore.css';
import './Styles/home.css';
import './Styles/global.css';
import './Styles/whats-happening.css';

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const Tuiter = () => {
    const sampleLocation = useLocation();
    console.log(sampleLocation.pathname.split('/'));
    let page = '';
    const url = sampleLocation.pathname.split('/');
    if (url[2] !== '') {
        page = url[2];
    } else {
        page = 'home';
    }
    return (
        <>
            <Provider store={store}>
                <div className="row mt-2">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active={page}/>
                    </div>
                    <div className="col-10 col-lg-7 col-xl-6">
                        <Outlet/>
                    </div>
                    <div className="d-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>


                <h1>React Links</h1>
                <Link to="/hello">
                    Hello
                </Link> |
                <Link to="/labs">
                    Labs
                </Link>
            </Provider>
        </>
    );
};

export default Tuiter;
