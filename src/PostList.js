import axios from "axios";
import { useEffect } from "react";
import { usePostStore } from "./Store/PostStore";

const PostList = () => {
    const {posts, setPosts, setSelectedPost} = usePostStore();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setPosts(response.data);
        });
        
        
    }, [setPosts]);
    

    return (
        <div>
            <h1>Post List</h1>
            <ul className="list-group">
                {
                    posts.map((post) => {
                        return <li className="list-group-item" onClick={() => setSelectedPost(post)} key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PostList;