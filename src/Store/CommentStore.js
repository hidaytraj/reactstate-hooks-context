import { createContext, useContext, useState } from "react";

export const CommentStoreContext = createContext();

const CommentStoreProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState(null);

    return (
        <CommentStoreContext.Provider
            value={{ comments, setComments, postId, setPostId }}>
            {children}
        </CommentStoreContext.Provider>
    )
}

export const useCommentStore = () => {
    return useContext(CommentStoreContext);
}

export default CommentStoreProvider;