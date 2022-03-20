import PostSummaryItemTopic from "./PostSummaryItemTopic";
import PostSummaryItemEvent from "./PostSummaryItemEvent";
import PostSummaryItemArticle from "./PostSummaryItemArticle";

const PostSummaryItem = (
    {
        post = {
            type: 'topic',
            title: 'SpaceX',
            tuits: '55.K Tuits',
            trending: 'Trending in Science'
        }
    }
) => {
    switch (post.type) {
        case 'topic':
            return PostSummaryItemTopic(post);
        case 'event':
            return PostSummaryItemEvent(post);
        case 'article':
            return PostSummaryItemArticle(post);
        default:
            console.log('error with items');
    }
};

export default PostSummaryItem;
