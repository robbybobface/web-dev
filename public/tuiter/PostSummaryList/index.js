import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

const PostSummaryList = () => {
    return (`
        <div class="wd-post-summary-list">
    ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
    </div>
`);
};

export default PostSummaryList;
