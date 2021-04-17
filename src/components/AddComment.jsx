import React from 'react';

export default function AddComment () {
  const [content, setContent] = React.useState('');

  const handleChange = event => {
    setContent(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    setContent('');
  };

    return (
      <form onSubmit={handleSubmit} className="AddComment">
        <input
          type="text"
          name="content"
          placeholder="Comment"
          value={content}
          onChange={handleChange}
        />
        <input className="create" type="submit" value="Create Comment" />
      </form>
    );
  }

