let width = $(window).width();

const updateWindowSize = () => {
    $(window).resize(function () {
        width = $(window).width();
    });
    // console.log(width);
};

const WhoToFollowListItem = (who) => {
    window.addEventListener("resize", updateWindowSize);
    return (`
            <div class="wd-who-to-follow-row">
                <img class="wd-account-img-lg"
                     src=${who.avatarIcon}>
                <div class="wd-account-details">
                  <div class="wd-account-name">
                    <div class="wd-account">
                    ${(width >= 992 && width <= 1199) && who.userName.length > 7
        ? who.userName.substring(0, 7) + '...' : who.userName}
                    </div>
                    <span class="fa-stack fa-1x wd-stack">
                    <i class="fas fa-certificate fa-stack-1x"></i>
                    <i class="fas fa-check fa-stack-1x"></i>
                  </span>
                  </div>
                  <div class="wd-account-handle">
                    @${who.handle}
                  </div>
                </div>
                <ul class="nav nav-pills wd-nav-override">
                  <li class="nav-item">
                    <a class="nav-link wd-nav-link-override-sm active" href="tuit.html">
                    Follow
                    </a>
                  </li>
                </ul>
            </div>    
    `);
};
export default WhoToFollowListItem;
