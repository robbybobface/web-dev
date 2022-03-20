const PostSummaryItemTopic = (post) => {
    return (
        <>
            <div className="wd-content-topic-row wd-content">
                <div className="wd-content-topic">
                    <div className="wd-trending">
                        {post.trending}
                    </div>
                    <div className="wd-topic">
                        {post.title}
                    </div>
                    <div className="wd-tuit-total wd-trending">
                        {post.tuits}
                    </div>
                </div>
                <div className="wd-topic-options">
                    ...
                </div>
            </div>
        </>
    );
};

export default PostSummaryItemTopic;
