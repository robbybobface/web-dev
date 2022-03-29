import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
                       <!-- search field and cog -->
              <div class="wd-searchbar wd-content-top wd-content-search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Tuiter">
                <div class="wd-settings">
                  <i class="fas fa-cog"></i>
                </div>
              </div>     
              <div class="d-none d-md-block">   
               <ul class="nav nav-tabs wd-content-tabs wd-categories-tabs wd-override-tabs nav-fill">
                  <li class="nav-item">
                    <a class="nav-link wd-override-nav-link active" href="../old-for-you.html">For you</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link wd-override-nav-link" href="../old-trending.html">Trending</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link wd-override-nav-link" href="../old-news.html">News</a>
                 </li>
                  <li class="nav-item">
                   <a class="nav-link wd-override-nav-link" href="../old-sports.html" tabindex="-1">Sports</a>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link wd-override-nav-link" href="../old-entertainment.html" tabindex="-1">Entertainment</a>
                  </li>
               </ul>
              </div>  
              <div class="d-block d-md-none">   
               <ul class="nav nav-tabs wd-content-tabs wd-categories-tabs wd-override-tabs nav-fill">
                  <li class="nav-item">
                    <a class="nav-link wd-override-nav-link active" href="../old-for-you.html">For you</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link wd-override-nav-link" href="../old-trending.html">Trending</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link wd-override-nav-link" href="../old-news.html">News</a>
                 </li>
                  <li class="nav-item">
                   <a class="nav-link wd-override-nav-link" href="../old-sports.html" tabindex="-1">Sports</a>
                 </li>
               </ul>
              </div> 
           <!-- image with overlaid text -->
           <div class="wd-img-container">
              <img class="wd-explore-img"
                   src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg">
              <div class="wd-bottom-left-caption">SpaceX's Starship</div>
           </div>
           ${PostSummaryList()}
    `);
};
export default ExploreComponent;
