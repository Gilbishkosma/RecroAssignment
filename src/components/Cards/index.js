import { useEffect, useState } from 'react'
import Card from '../Card'




const Cards = () => {
    // state to store posts
    const [posts,setPosts] = useState([]);
    // state to store the page number
    const [page,setPage] = useState(0);

    useEffect(() => {   
        // a function to fetch posts from the api
        const fetchPosts = async () => {
            const data = await fetch(`http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`)
            const fetchedData = await data.json()
            // adding the newly fetched posts with older one
            setPosts(posts => [...posts,...fetchedData])
        }
        fetchPosts()
    },[page])


    useEffect(() => {
        // checking if the scroll is at the bottom of screen and changing page number.
        // maximum number of posts is 100
        const onScroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && posts.length < 100 ){
                setPage(page => page + 10)                
            }
        }

        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('scroll',onScroll)
    },[posts])

    return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        {posts?.map((item,index) => <Card  key={index} {...item} />)}
    </div>
    
}


export default Cards