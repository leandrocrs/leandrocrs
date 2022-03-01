import styled from 'styled-components';
import { palette } from '@leandrocrs/styles';

const StyledMenu = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border: 0.5rem dashed ${palette.mistyBlue};
  border-left-width: 0;
  border-right-width: 0;
  margin-bottom: 1rem;
  border-style: double;

  ul {
    list-style: none;
    display: inline-flex;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  li {
    padding: 0.5rem 1rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function SiteMenu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a
            href="https://github.com/leandrocrs/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/leandrocrs/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
}
