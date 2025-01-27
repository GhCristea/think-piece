import React, {  useState } from 'react';
import {addPostToFirestore} from '../utils/real-time';

function MakePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


    
  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  
  const handleChangeContent = event => {
    setContent(event.target.value );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const post = {
      title,
      content,
      user: {
        uid: '1111',
        displayName: 'Steve Kinney',
        email: 'steve@mailinator.com',
        photoURL: 'http://placekitten.com/g/200/200',
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    addPostToFirestore(post);
  };

    return (
      <form onSubmit={handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={handleChangeContent}
        />
        <input className="create" type="submit" value="Create Post" />
      </form>
    );
  }

export default MakePost;
