const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
            userName: 'NASA',
            handle: 'NASA'
        }
    }) => {
    return (
        <>
            <div className="wd-who-to-follow-row">
                <img className="wd-account-img-lg"
                     src={who.avatarIcon}/>
                <div className="wd-account-details">
                  <div className="wd-account-name">
                    <div className="wd-account">
                        {who.userName}
                    </div>
                    <span className="fa-stack fa-1x wd-stack">
                        <i className="fas fa-certificate fa-stack-1x"/>
                        <i className="fas fa-check fa-stack-1x"/>
                    </span>
                  </div>
                  <div className="wd-account-handle">
                    @{who.handle}
                  </div>
                </div>
                <ul className="nav nav-pills wd-nav-override">
                  <li className="nav-item">
                    <a className="nav-link wd-nav-link-override-sm active" href="../../../../public/tuiter/tuit.html">
                    Follow
                    </a>
                  </li>
                </ul>
            </div>
        </>
    );
};
export default WhoToFollowListItem;
