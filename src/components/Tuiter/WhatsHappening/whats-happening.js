import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from 'react-textarea-autosize';

const WhatsHappening = () => {
    let [ whatsHappening, setWhatsHappening ]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    };
    return (
        <>
            <div className="wd-whats-happening-container">
                <img className="wd-tuit-profile-img wd-whats-happening-img"
                     src="https://pbs.twimg.com/profile_images/1502305122663157763/qbK0Ghl4_400x400.jpg"/>
                <div className="wd-whats-happening-content">
                    <div className="wd-textarea-container">
                        <TextareaAutosize className="wd-whats-happening"
                                          defaultValue="What's Happening?"
                                          placeholder="What's Happening?"
                                          onChange={(event) =>
                                              setWhatsHappening(event.target.value)}
                                          value={whatsHappening}
                                          maxLength="160"
                                          minRows={2}
                                          style={{
                                              width: "100%",
                                              color: "white",
                                              backgroundColor: "black",
                                              borderColor: "transparent",
                                              fontSize: "16px",
                                              margin: "15px 0 -15px 10px",
                                              resize: "none",
                                              overflow: "hidden",
                                              paddingRight: "4px"
                                          }}
                        />
                    </div>

                    <hr className="wd-line-break"/>
                    <div className="wd-tuit-options-container">
                        <div className="wd-tuit-icons">
                            <i className="fa-regular fa-image"/>
                            <i className="fa-solid fa-square-poll-horizontal"/>
                            <i className="fa-regular fa-face-smile"/>
                            <i className="fa-regular fa-calendar"/>
                            <i className="fa-solid fa-location-dot"/>
                        </div>
                        <button className="wd-tuit-btn"
                                onClick={tuitClickHandler}>
                            Tuit
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WhatsHappening;
