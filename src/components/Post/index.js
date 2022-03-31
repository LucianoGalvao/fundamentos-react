import React from 'react';
import propTypes from 'prop-types';
import PostHeader from './PostHeader';

import styles from './Post.scss';

import { Subtitle, Rate } from './styles';

export default function Post(props) {
  return (
    <article className={props.post.removed ? styles.deleted : styles.post}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Média: {props.post.likes / 2}</Rate>
    </article>
  );
}

Post.propTypes = {
  onRemove: propTypes.func.isRequired,
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    read: propTypes.bool.isRequired,
    removed: propTypes.bool.isRequired,
  }).isRequired,
};
