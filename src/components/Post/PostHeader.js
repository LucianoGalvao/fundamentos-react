import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong>
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
