import { graphql } from 'gatsby';
import React from 'react';
import PostLink from '../../components/post-link';
import TemplateGlobal from '../../templates/global';
import { palette } from '@leandrocrs/styles';
import styled from 'styled-components';

const PostContainer = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  li {
    padding: 1rem 0;
    width: 100%;
  }

  li + li {
    border-top: 1px solid ${palette.tealGreen};
  }

  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <li key={edge.node.id}>
        <PostLink post={edge.node} />
      </li>
    ));

  return (
    <TemplateGlobal title="Blog">
      <h2>Artigos</h2>

      <PostContainer>{Posts}</PostContainer>
    </TemplateGlobal>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
