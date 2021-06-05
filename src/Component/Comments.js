import axios from "axios";
import { useEffect } from "react";
import { useCommentStore } from "../Store/CommentStore";

const Comments = () => {
    const { comments, setComments, postId } = useCommentStore();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                setComments(response.data);
            });

    }, [setComments, postId]);

    if (comments !== null) {
        return (
            <div>
                <h1> Comments</h1>
                {
                    comments.map((comment) => {
                        return (
                            <blockquote className="blockquote mb-0" key={comment.id}>
                                <p>{comment.name}</p>
                                <footer className="blockquote-footer">{comment.body} <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        )
                    })
                }

            </div>
        )
    } else {
        return <div className="alert alert-warning">Please select a post to get comment  {postId}</div>
    }

}

export default Comments;