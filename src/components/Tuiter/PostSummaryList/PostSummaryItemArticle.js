const PostSummaryItemArticle = (post) => {
    return (
        <>
            <div className="wd-content-article wd-content">
                <div className="wd-article-container">
                    <div className="wd-article-account">
                        <img className="wd-account-img"
                             src={post.avatarImg}/>
                        <div className="wd-account">
                            {post.userName}
                        </div>
                        <span className="fa-stack fa-1x">
                            <i className="fas fa-certificate fa-stack-1x"/>
                            <i className="fas fa-check fa-stack-1x"/>
                        </span>
                        {"\u16EB"} {post.time}
                    </div>
                    <div className="wd-article-title">
                        {post.title}
                    </div>
                </div>
                <img className="wd-article-img"
                     src={post.img}/>
            </div>
        </>
    );
};

export default PostSummaryItemArticle;
