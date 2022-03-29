import React from "react";
import { useParams } from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    return (
        <>
            <div className="d-none d-xxl-block">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override 
                       ${active === 'home' ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-home ms-0 pe-1"/>Home</a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action ${active === 'explore'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-2"/>Explore</a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell pe-2"/>Notifications</a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/>Messages</a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark ms-1 pe-2"/>Bookmarks</a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul pe-2"/>Lists</a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user pe-2"/>Profile</a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"/>
                      <i className="fas fa-ellipsis-h fa-stack-1x"/>
                    </span>
                        More</a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'home' ? 'active' : ""}`}>
                        <i className="fas fa-home ms-0 pe-1"/>Home</a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'explore' ? 'active' : ""}`}>
                        <i className="fas fa-hashtag pe-2"/>Explore</a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell pe-2"/>Notifications</a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/>Messages</a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark ms-1 pe-2"/>Bookmarks</a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul pe-2"/>Lists</a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user pe-2"/>Profile</a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"/>
                      <i className="fas fa-ellipsis-h fa-stack-1x"/>
                    </span>
                        More</a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-lg-block d-xl-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'home' ? 'active' : ""}`}>
                        <i className="fas fa-home ms-0 pe-1"/></a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action ${active === 'explore'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag ms-1 pe-1"/></a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell ms-1 pe-2"/></a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/></a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark pe-2"/></a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul ms-1 pe-2"/></a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user spe-2"/></a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"/>
                      <i className="fas fa-ellipsis-h fa-stack-1x"/>
                    </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'home' ? 'active' : ""}`}>
                        <i className="fas fa-home pe-1"/></a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action ${active === 'explore'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"/></a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell pe-2"/></a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/></a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark pe-2"/></a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul pe-2"/></a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user spe-2"/></a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                   <span className="fa-stack fa-1x wd-more-icon">
                     <i className="fas fa-circle fa-stack-1x"/>
                     <i className="fas fa-ellipsis-h fa-stack-1x"/>
                   </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-sm-block d-md-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'home' ? 'active' : ""}`}>
                        <i className="fas fa-home pe-1"/></a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action ${active === 'explore'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"/></a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell pe-2"/></a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/></a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark pe-2"/></a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul pe-2"/></a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user spe-2"/></a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                   <span className="fa-stack fa-1x wd-more-icon">
                     <i className="fas fa-circle fa-stack-1x"/>
                     <i className="fas fa-ellipsis-h fa-stack-1x"/>
                   </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-block d-sm-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="/tuiter/home/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'home' ? 'active' : ""}`}>
                        <i className="fas fa-home pe-1"/></a>
                    <a href="/tuiter/explore/"
                       className={`list-group-item list-group-item-action ${active === 'explore'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"/></a>
                    <a href="/tuiter/notifications/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'notifications' ? 'active' : ""}`}>
                        <i className="fas fa-bell pe-2"/></a>
                    <a href="/tuiter/messages/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'messages' ? 'active' : ""}`}
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"/></a>
                    <a href="/tuiter/bookmarks/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'bookmarks' ? 'active' : ""}`}>
                        <i className="fas fa-bookmark pe-2"/></a>
                    <a href="/tuiter/lists/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'lists' ? 'active' : ""}`}>
                        <i className="fas fa-list-ul pe-2"/></a>
                    <a href="/tuiter/profile/"
                       className={`list-group-item list-group-item-action wd-list-group-item-override
                       ${active === 'profile' ? 'active' : ""}`}>
                        <i className="fas fa-user spe-2"/></a>
                    <a href="#"
                       className={`list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override
                       ${active === 'more' ? 'active' : ""}`}>
                  <span className="fa-stack fa-1x wd-more-icon">
                    <i className="fas fa-circle fa-stack-1x"/>
                    <i className="fas fa-ellipsis-h fa-stack-1x"/>
                  </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../../../../public/tuiter/tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default NavigationSidebar;
