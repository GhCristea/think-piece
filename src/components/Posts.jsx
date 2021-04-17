import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

export default function Posts({ posts, onCreate }){
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} />)}
    </section>
  )
}
