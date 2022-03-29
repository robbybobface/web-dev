import { useDispatch } from "react-redux";
import React from "react";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: 'like-tuit', tuit });
    };
    return (
        <>
            <div className="wd-tuit-actions-row">
                <div className="wd-tuit-action">
                    <a className="wd-tuit-action-redirect">
                        <i className="far fa-comment"/>
                        {tuit.stats.comments}
                    </a>
                </div>
                <div className="wd-tuit-action">
                    <a className="wd-tuit-action-redirect">
                        <i className="fas fa-retweet"/>
                        {tuit.stats.retuits}
                    </a>
                </div>
                <div className="wd-tuit-action">
                    <span className="wd-tuit-likes" onClick={likeTuit}>
                        {
                            tuit.liked &&
                            <a className="wd-tuit-action-redirect"><i className="fas fa-heart"
                                                                      style={{ color: 'red' }}/></a>
                        }
                        {
                            !tuit.liked &&
                            <a className="wd-tuit-action-redirect"><i className="far fa-heart"/></a>
                        }
                        {tuit.stats.likes}
                    </span>

                </div>
                <div className="wd-tuit-action">
                    <a className="wd-tuit-action-redirect">
                        <i className="far fa-share-square"/>
                    </a>
                </div>
            </div>
        </>

    );
};
export default TuitStats;
