import styled from 'styled-components';

import PostTile from '../Title';

export const Container = styled.article`
  margin-bottom: 24px;
  opacity: ${(props) => (props.removed ? 0.5 : 1)};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;

export const Title = styled(PostTile)`
  color: #fff;
  text-decoration: ${(props) => (props.read ? 'line-through' : 'none')};
`;
