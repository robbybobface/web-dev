import PostSummaryItemTopic from "./PostSummaryItemTopic.js";
import PostSummaryItemEvent from "./PostSummaryItemEvent.js";
import PostSummaryItemArticle from "./PostSummaryItemArticle.js";

const PostSummaryItem = (post) => {
    switch (post.type) {
        case 'topic':
            return PostSummaryItemTopic(post)
        case 'event':
            return PostSummaryItemEvent(post)
        case 'article':
            return PostSummaryItemArticle(post)
        default:
            console.log('error with items')
    }
};

export default PostSummaryItem;
