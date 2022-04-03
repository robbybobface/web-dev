import React from "react";
import '../Styles/explore.css';
import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";
import { deleteTuit } from "../../../actions/tuit-actions";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="wd-tuit-bookmarks">
                <div className="wd-tuit wd-content">
                    <img className="wd-tuit-profile-img"
                         src={tuit.logoImage}/>
                    <div className="wd-tuit-content">
                        <div className="wd-tuit-account-container">
                            <div className="wd-tuit-account">
                                <div className="wd-tuit-username">{tuit.postedBy.username}</div>
                                {tuit.verified ? <span className="fa-stack fa-1x">
                                    <i className="fas fa-certificate fa-stack-1x"/>
                                    <i className="fas fa-check fa-stack-1x"/>
                                </span> : '\u00a0'}
                                <div className="wd-tuit-details">@{tuit.handle} {"\u16EB"} {tuit.time}</div>
                            </div>
                            <div className="wd-tuit-options">
                                <i onClick={() => deleteTuit(dispatch, tuit)}
                                   className="fa-solid fa-x"/>
                            </div>
                        </div>
                        <div className="wd-tuit-post">
                            {tuit.tuit}
                        </div>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 wd-border-radius-30px"
                                 style={{ width: "100%", borderRadius: "30px" }}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-30px"
                                    style={{ width: "100%", borderRadius: "30px" }}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        }
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TuitListItem;
