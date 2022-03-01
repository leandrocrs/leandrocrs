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
