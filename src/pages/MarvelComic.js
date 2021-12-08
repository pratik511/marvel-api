import axios from "axios";
import React, { useState, useEffect } from "react";


function MarvelComic() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    let limit = 12;
    let page = 1;
    const getPosts = async () => {
        const response = await 
            axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&hash=866ddc8bf8343c53f45a710a0deb34c0&apikey=8b0c1cf5084a6b18d0034b1096ece30d`).then(result => setPosts(result.data.data.results))
            
console.log("response",response);
console.log("posts",posts);

        // const data = await response.json();
        // setPosts(data);
        // console.log(data);
    };

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        setIsFetching(true);
    }

    function getMorePosts() {
        setTimeout(() => {
            page++;
            setPosts([{ ...posts }], posts);
            setIsFetching(false);
        }, 1000);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(
        () => {
            getPosts();
        }, //eslint-disable-next-line
        []
    );
    useEffect(() => {
        if (!isFetching) return;
        getMorePosts();
    }, [isFetching]);

    return (
        <div className="App">
            {posts.map((post, index) => (
                <div key={index} className='card-item'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={post.images[0]?post.images[0].path + ".jpg": ""} className="card-img-top" alt='demoimg' />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            {/* <p className="card-text">{item.description} <br /> {item.pageCount}</p> */}
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            ))}
            {isFetching && (
                <div className="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            )}
        </div>
    );
}

export default MarvelComic;