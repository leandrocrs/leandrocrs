import { palette } from '@leandrocrs/styles';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  border-top: 0.5rem double ${palette.mistyBlue};

  p {
    color: ${palette.mistyBlue};
    text-align: center;
    width: 100%;
  }
`;

export default function SiteFooter() {
  return (
    <Footer>
      <p>Made with love by @leandrocrs</p>
    </Footer>
  );
}
