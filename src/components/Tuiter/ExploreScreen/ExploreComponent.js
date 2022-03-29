import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (
    {
        active = 'for-you'
    }
) => {
    return (
        <>
            <div className="wd-searchbar wd-content-top wd-content-search">
                <i className="fas fa-search"/>
                <input type="text" placeholder="Search Tuiter"/>
                <div className="wd-settings">
                    <i className="fas fa-cog"/>
                </div>
            </div>
            <div className="d-none d-md-block">
                <ul className="nav nav-tabs wd-content-tabs wd-categories-tabs wd-override-tabs nav-fill">
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'for-you'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'trending'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'news' ? 'active'
                            : ""}`}
                           href="../../../../public/tuiter/old-news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'sports'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'entertainment'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className="d-block d-md-none">
                <ul className="nav nav-tabs wd-content-tabs wd-categories-tabs wd-override-tabs nav-fill">
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'for-you'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'trending'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'news' ? 'active'
                            : ""}`}
                           href="../../../../public/tuiter/old-news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link wd-override-nav-link ${active === 'sports'
                            ? 'active' : ""}`}
                           href="../../../../public/tuiter/old-sports.html">Sports</a>
                    </li>
                </ul>
            </div>

            <div className="wd-img-container">
                <img className="wd-explore-img"
                     src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg"/>
                <div className="wd-bottom-left-caption">SpaceX's Starship</div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;
