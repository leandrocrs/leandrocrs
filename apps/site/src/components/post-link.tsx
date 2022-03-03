import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  a {
    text-decoration: none;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
  }

  h3 {
    flex-grow: 1;
  }

  time {
    align-items: center;
    color: #808080;
    display: inline-flex;
    font-size: 0.75rem;
    justify-content: flex-end;
    width: 200px;
  }
`;

const PostLink = ({ post }) => (
  <Container>
    <Link to={['/blog', post.frontmatter.slug].join('')}>
      <h3>{post.frontmatter.title}</h3>
      <time>{post.frontmatter.date}</time>
    </Link>
  </Container>
);

export default PostLink;
