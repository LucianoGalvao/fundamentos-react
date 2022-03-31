import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { Title } from './styles';

import { ThemeProvider } from '../../context/ThemeContext';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia #01',
      subtitle: 'Subtítulo da notícia #01',
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Título da notícia #02',
      subtitle: 'Subtítulo da notícia #02',
      likes: 10,
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: 'Título da notícia #03',
      subtitle: 'Subtítulo da notícia #03',
      likes: 50,
      read: false,
      removed: false,
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
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true, read: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as='h2'>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      {posts.map((post, index) => (
        <Post key={index} post={post} onRemove={handleRemove} />
      ))}
    </ThemeProvider>
  );
}
