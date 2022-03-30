import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia #01',
      subtitle: 'Subtítulo da notícia #01',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia #02',
      subtitle: 'Subtítulo da notícia #02',
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Título da notícia #03',
      subtitle: 'Subtítulo da notícia #03',
      likes: 50,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título da notícia #0${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia #0${prevState.length + 1}`,
        likes: 0,
      },
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      {posts.map((post, index) => (
        <Post key={index} post={post} onRemove={handleRemove} />
      ))}
    </ThemeProvider>
  );
}
