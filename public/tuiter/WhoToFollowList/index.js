import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
<!--            <ul class="list-group">-->
<!--            &lt;!&ndash; continue here &ndash;&gt;-->
<!--            </ul>-->
    <div class="wd-who-to-follow-container">
        <div class="wd-who-to-follow-heading">
          Who to follow
        </div>
        ${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
        <div class="wd-show-more">
          Show more
        </div>
    </div>
`);
};

export default WhoToFollowList;
