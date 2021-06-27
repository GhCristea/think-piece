import React from 'react'
import Post from './Post';
import NewPost from './NewPost';

export default function Posts({ posts, onCreate, onRemove }){
  return (
    <section className="Posts">
      <NewPost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} onRemove={onRemove}/>)}
    </section>
  )
}
