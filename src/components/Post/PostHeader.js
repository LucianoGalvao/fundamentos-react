import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import { Title } from './styles';

export default function PostHeader(props) {
  return (
    <>
      <Title read={props.post.read} as='strong'>
        {props.post.title}
      </Title>
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: propTypes.func.isRequired,
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    read: propTypes.bool.isRequired,
  }).isRequired,
};
