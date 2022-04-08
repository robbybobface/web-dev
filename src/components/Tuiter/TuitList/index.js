import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../../../actions/tuit-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        [ tuits.length ]);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.slice(0).reverse().map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
};

export default TuitList;
