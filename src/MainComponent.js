import Comments from "./Component/Comments";
import PostDetails from "./Component/PostDetails";
import PostList from "./PostList";

const MainComponent = () => {
    return (
        <div className="row">

            <div className="col-5">
                <PostList></PostList>
            </div>

            <div className="col-7">
                <div className="fixed-section">
                    <PostDetails />
                    <Comments></Comments>
                </div>

            </div>



        </div>
    )
}

export default MainComponent;