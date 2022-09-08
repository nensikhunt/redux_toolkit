import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "./posts";

function Api() {
    const dispatch = useDispatch()
    const { posts } = useSelector(postsSelector)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    console.log('posts: ', posts);

    return (
        <div className="App">
            <section>
                <h1>posts</h1>
                <div className='content'>
                    {
                        posts.map((post, index) =>
                            <div key={index}>
                                <h4>{post.title}</h4>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Api;