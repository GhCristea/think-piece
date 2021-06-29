import React from 'react'
import Post from './Post';
import MakePost from './MakePost';

export default function Posts({ posts, onCreate, onRemove }){
  return (
    <section className="Posts">
      <MakePost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} onRemove={onRemove}/>)}
    </section>
  )
}
