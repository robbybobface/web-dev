import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
        <>
            <div className="wd-who-to-follow-container">
                <div className="wd-who-to-follow-heading">
                    Who to follow
                </div>
                {
                    who.map(who => {
                        return (
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
                <div className="wd-show-more">
                    Show more
                </div>
            </div>
        </>
    );
};

export default WhoToFollowList;
