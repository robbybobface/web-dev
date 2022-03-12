import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <>
            <div className="d-none d-xxl-block">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home ms-0 pe-1"></i>Home</a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-2"></i>Explore</a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell pe-2"></i>Notifications</a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i>Messages</a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark ms-1 pe-2"></i>Bookmarks</a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul pe-2"></i>Lists</a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user pe-2"></i>Profile</a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"></i>
                      <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                    </span>
                        More</a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home ms-0 pe-1"></i>Home</a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-2"></i>Explore</a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell pe-2"></i>Notifications</a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i>Messages</a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark ms-1 pe-2"></i>Bookmarks</a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul pe-2"></i>Lists</a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user pe-2"></i>Profile</a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"></i>
                      <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                    </span>
                        More</a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-lg-block d-xl-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home ms-0 pe-1"></i></a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag ms-1 pe-1"></i></a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell ms-1 pe-2"></i></a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i></a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark pe-2"></i></a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul ms-1 pe-2"></i></a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user spe-2"></i></a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                    <span className="fa-stack fa-1x wd-more-icon">
                      <i className="fas fa-circle fa-stack-1x"></i>
                      <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                    </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home pe-1"></i></a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"></i></a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell pe-2"></i></a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i></a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark pe-2"></i></a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul pe-2"></i></a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user spe-2"></i></a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                   <span className="fa-stack fa-1x wd-more-icon">
                     <i className="fas fa-circle fa-stack-1x"></i>
                     <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                   </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-sm-block d-md-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home pe-1"></i></a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"></i></a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell pe-2"></i></a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i></a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark pe-2"></i></a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul pe-2"></i></a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user spe-2"></i></a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                   <span className="fa-stack fa-1x wd-more-icon">
                     <i className="fas fa-circle fa-stack-1x"></i>
                     <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                   </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
            <div className="d-block d-sm-none fa-2x">
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action disabled wd-list-group-item-override"
                       aria-current="true">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="../home.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-home pe-1"></i></a>
                    <a href="../explore.html"
                       className={`list-group-item list-group-item-action ${active === 'home'
                           ? 'active' : ""} wd-list-group-item-override`}>
                        <i className="fas fa-hashtag pe-1"></i></a>
                    <a href="../notifications.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bell pe-2"></i></a>
                    <a href="../messages.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override"
                       aria-disabled="true">
                        <i className="fas fa-inbox pe-1"></i></a>
                    <a href="../bookmarks.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-bookmark pe-2"></i></a>
                    <a href="../lists.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-list-ul pe-2"></i></a>
                    <a href="../profile.html"
                       className="list-group-item list-group-item-action wd-list-group-item-override">
                        <i className="fas fa-user spe-2"></i></a>
                    <a href="#"
                       className="list-group-item list-group-item-action wd-list-group-item-more wd-list-group-item-override">
                  <span className="fa-stack fa-1x wd-more-icon">
                    <i className="fas fa-circle fa-stack-1x"></i>
                    <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                  </span>
                    </a>
                </div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav-link-override active"
                           href="../tuit.html">Tuit</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default NavigationSidebar;
