import {
    CREATE_TUIT,
    UPDATE_TUIT,
    DELETE_TUIT,
    FIND_ALL_TUITS
} from "../../../actions/tuit-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                action.newTuit,
                ...state
            ];
        case UPDATE_TUIT:
            // const tuit = state.find(tuit => tuit._id === action.tuit._id);
            // const likes = tuit.stats.likes;
            // const liked = tuit.liked;
            // const dislikes = tuit.stats.dislikes;
            // const disliked = tuit.disliked;
            // if (likes === 0) {
            //
            // }
            // console.log(likes, liked, dislikes, disliked);
            return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
        default:
            return state;
    }

};

export default tuitsReducer;
