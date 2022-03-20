import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import { Link } from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

import './Styles/explore.css';
import './Styles/global.css';

const Tuiter = () => {
    return (
        <>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: 'https://pbs.twimg.com/profile_images/1494533433036402689/Wk0_1Mgn_400x400.jpg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic'*/}
            {/*}}/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryItem post={{*/}
            {/*    "type": "topic",*/}
            {/*    "title": "Saint Peters",*/}
            {/*    "tuits": "76.8k tuits",*/}
            {/*    "trending": "Sports \u16EB Trending"*/}
            {/*}}/>*/}
            {/*<PostSummaryList/>*/}
            {/*<ExploreComponent/>*/}

            <ExploreScreen/>
            <h1>React Links</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>

        </>

    );
};

export default Tuiter;
