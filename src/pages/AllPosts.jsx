import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

  return (
    <div className="w-full py-6 bg-gray-50">
      <Container>
        <div
          className="
            flex flex-wrap -mx-3
          "
        >
          {posts.map((post) => (
            <div
              key={post.$id}
              className="
                px-3 mb-6
                w-full
                sm:w-1/2
                md:w-1/3
                lg:w-1/4
              "
            >
              {post.status === "active" ? <PostCard post={post} /> : null}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts