import { useEffect } from "react";
import { useCommentStore } from "../Store/CommentStore";
import { usePostStore } from "../Store/PostStore";

const PostDetails = () => {
    const { selectedPost } = usePostStore();

    const { setPostId } = useCommentStore();

    useEffect(() => {
        if (selectedPost !== null) {
            setPostId(selectedPost.id);
        }

    }, [setPostId, selectedPost]);

    if (selectedPost !== null) {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{selectedPost.title}</h1>
                    <p className="lead">{selectedPost.body}</p>
                </div>
            </div>
        )
    } else {
        return <div className="alert alert-warning">Please select a post.</div>
    }

}

export default PostDetails;