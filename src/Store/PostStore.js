import { createContext, useContext, useState } from "react";

export const PostStoreContext = createContext();

const PostStoreProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <PostStoreContext.Provider
            value={{ posts, setPosts, selectedPost, setSelectedPost }}>
            <main>{children}</main>;
        </PostStoreContext.Provider>
    )
}

export const usePostStore = () => {
    return useContext(PostStoreContext);
}

export default PostStoreProvider;