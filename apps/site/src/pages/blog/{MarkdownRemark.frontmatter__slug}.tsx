import { graphql } from 'gatsby';
import React from 'react';
import TemplateGlobal from '../../templates/global';
import styled from 'styled-components';
import { palette } from '@leandrocrs/styles';

const Article = styled.article`
  time {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: ${palette.tealGreen};
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <TemplateGlobal title={frontmatter.title}>
      <div>
        <Article lang={frontmatter.lang || 'pt-br'}>
          <h1>{frontmatter.title}</h1>
          <time>{frontmatter.date}</time>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Article>
      </div>
    </TemplateGlobal>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        lang
        slug
        title
      }
    }
  }
`;
