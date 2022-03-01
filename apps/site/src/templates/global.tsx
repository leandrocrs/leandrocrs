import { palette } from '@leandrocrs/styles';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Person } from 'schema-dts';
import styled, { keyframes } from 'styled-components';
import SiteMenu from '../components/site-menu';

const fadeInOut = keyframes`
  0% {
    opacity: 0%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    opacity: 0%;
  }
`;

const BlinkCursor = styled.span.attrs(() => ({
  children: '_',
  'aria-hidden': true,
}))`
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
  pointer-events: none;
  user-select: none;
`;

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  a {
    color: ${palette.mistyBlue};
  }

  a:hover {
    color: ${palette.coral};
  }

  p {
    line-height: 1.75;
  }

  ul li {
    line-height: 1.75;
  }

  h1 {
    color: ${palette.mistyBlue};
  }
`;

export interface TemplateGlobalProps {
  children: ReactNode;
  title?: string;
}

export function TemplateGlobal({
  children,
  title = 'Leandro Cavalcante - desenvolvedor frontend em São Paulo, Brasil.',
}: TemplateGlobalProps) {
  return (
    <StyledApp>
      <Helmet
        script={[
          helmetJsonLdProp<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Leandro Cavalcante',
            alternateName: 'leandrocrs',
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: [
                'Faculdade de Tecnologia da Zona Leste',
                'Escola Técnica de Guaianases',
              ],
            },
            image: 'https://leandrocrs.me/cover.jpg',
            sameAs: [
              'https://github.com/leandrocrs',
              'https://medium.com/@leandrocrs',
              'https://dev.to/leandrocr',
              'https://www.linkedin.com/in/leandrocrs/',
            ],
            address: 'São Paulo - Brazil',
            description: 'Desenvolvedor Frontend em São Paulo, Brasil',
            url: 'https://leandrocrs.me',
            knowsAbout: [
              'Frontend Web Development',
              'React',
              'Angular',
              'Typescript',
              'Javascript',
              'HTML',
              'CSS',
            ],
          }),
        ]}
      >
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="https://leandrocrs.me/" />
        <meta name="theme-color" content={palette.mistyBlue} />
      </Helmet>
      <header>
        <h1>
          Olá, sou o Leandro Cavalcante! <BlinkCursor />
        </h1>
      </header>
      <SiteMenu />
      <main>{children}</main>
    </StyledApp>
  );
}

export default TemplateGlobal;
