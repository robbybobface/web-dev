import { useDispatch } from "react-redux";
import React from "react";
import { updateTuit } from "../../../actions/tuit-actions";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
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
                    <span className="wd-tuit-likes">
                        {
                            tuit.liked &&
                            <a className="wd-tuit-action-redirect">
                                <i onClick={() => updateTuit(
                                    dispatch, {
                                        ...tuit,
                                        liked: false,
                                        stats: {
                                            comments: tuit.stats.comments,
                                            retuits: tuit.stats.retuits,
                                            likes: tuit.stats.likes - 1,
                                            dislikes: tuit.stats.dislikes
                                        }
                                    })}
                                   className="fa-solid fa-thumbs-up"
                                   style={{ color: 'rgb(29, 161, 242)' }}/></a>
                        }
                        {
                            !tuit.liked &&
                            <a className="wd-tuit-action-redirect">
                                <i onClick={() => updateTuit(
                                    dispatch, {
                                        ...tuit,
                                        liked: true,
                                        stats: {
                                            comments: tuit.stats.comments,
                                            retuits: tuit.stats.retuits,
                                            likes: tuit.stats.likes + 1,
                                            dislikes: tuit.stats.dislikes
                                        }
                                    })}
                                   className="fa-regular fa-thumbs-up"/></a>
                        }
                        {tuit.stats.likes}
                    </span>
                </div>
                <div className="wd-tuit-action">
                    <span className="wd-tuit-likes">
                        {
                            tuit.disliked &&
                            <a className="wd-tuit-action-redirect">
                                <i onClick={() => updateTuit(
                                    dispatch, {
                                        ...tuit,
                                        disliked: false,
                                        stats: {
                                            comments: tuit.stats.comments,
                                            retuits: tuit.stats.retuits,
                                            likes: tuit.stats.likes,
                                            dislikes: tuit.stats.dislikes - 1
                                        }
                                    })}
                                   className="fa-solid fa-thumbs-down"
                                   style={{ color: 'rgb(29, 161, 242)' }}/></a>
                        }
                        {
                            !tuit.disliked &&
                            <a className="wd-tuit-action-redirect">
                                <i onClick={() => updateTuit(
                                    dispatch, {
                                        ...tuit,
                                        disliked: true,
                                        stats: {
                                            comments: tuit.stats.comments,
                                            retuits: tuit.stats.retuits,
                                            likes: tuit.stats.likes,
                                            dislikes: tuit.stats.dislikes + 1
                                        }
                                    })}
                                   className="fa-regular fa-thumbs-down"/></a>
                        }
                        {tuit.stats.dislikes}
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
