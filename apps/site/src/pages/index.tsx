import React from 'react';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Person } from 'schema-dts';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  address {
    display: inline;
  }

  .cover {
    position: relative;
  }
`;

export function Index() {
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
        <title>
          Leandro Cavalcante - desenvolvedor frontend em São Paulo, Brasil.
        </title>
        <link rel="canonical" href="https://leandrocrs.me/" />
      </Helmet>
      <header>
        <h1>Olá, sou o Leandro Cavalcante!</h1>
      </header>
      {/* <figure>
        <img className="cover" src="/cover.jpg" alt="" />
      </figure> */}
      <main>
        <p>
          Sou <strong>desenvolvedor frontend</strong> web na cidade de{' '}
          <address>São Paulo - SP/Brasil</address>, com experiência em{' '}
          <em>React</em> e <em>Angular</em>. Gosto de trabalhar com{' '}
          <em>TypeScript</em> e <em>JavaScript</em>, além de <em>HTML</em>e{' '}
          <em>CSS</em>. Já atuei como <em>FullStack</em>, acumulando experiência
          em <em>.NET</em> e<em>PHP</em>, mas sou apaixonado por interfaces e
          interações no <strong>frontend</strong>. Realizei trabalhos para
          empresas como <em>Portal R7 - Rede Record</em>,{' '}
          <em>Serasa Experian</em> e <em>Lojas Riachuelo</em>, atualmente
          ocupando posição de <strong>desenvolvedor sênior</strong>.
        </p>
        <h2>Onde me encontrar?</h2>
        <ul>
          <li>
            Blogs no{' '}
            <a href="https://medium.com/@leandrocrs" rel="noopener noreferrer">
              medium/@leandrocrs
            </a>{' '}
            e{' '}
            <a href="https://dev.to/leandrocr" rel="noopener noreferrer">
              dev.to/leandrocrs
            </a>
          </li>
          <li>
            Currículo em{' '}
            <a
              href="https://www.linkedin.com/in/leandrocrs/"
              rel="noopener noreferrer"
            >
              linkedin/in/leandrocrs
            </a>
          </li>
        </ul>
      </main>
    </StyledApp>
  );
}

export default Index;
