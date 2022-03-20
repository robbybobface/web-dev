const PostSummaryItemEvent = (post) => {
    return (
        <>
            <div className="wd-content-event wd-content">
                <div className="wd-event-container">
                    <div className="wd-event-topic">
                        {post.headline}
                    </div>
                    <div className="wd-event-headline">
                         <span className="wd-event-headline-container">
                        {post.title}
                        </span>
                    </div>
                    <div className="wd-event-trending-row">
                        {post.trending.length > 1 ? 'Trending with\u00a0' : ''}
                        <span className="wd-trending-with">
                            {post.trending}
                        </span>
                    </div>
                </div>
                <img className="wd-event-img"
                     src={post.img}/>
            </div>
        </>
    );
};

export default PostSummaryItemEvent;
