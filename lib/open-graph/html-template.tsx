/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-head-element */
import { PropsWithChildren } from "react";
import * as ReactDOMServer from "react-dom/server";

export const parabolColor = `#4a3272`;
export const color = `#fff`;
export const spacing = 16;
export const maxWidth = 600;
export const h1fontSize = 40;
export const h2fontSize = 20;
export const fontSize = 16;

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

  /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
  body,
  table,
  td,
  a {
      -ms-text-size-adjust: 100%; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
  }

  /**
   * Remove extra space added to tables and cells in Outlook.
   */
  table,
  td {
      mso-table-rspace: 0pt;
      mso-table-lspace: 0pt;
  }

  /**
   * Remove blue links for iOS devices.
   */
  a[x-apple-data-detectors] {
      font-family: inherit ;
      font-size: inherit ;
      font-weight: inherit ;
      line-height: inherit ;
      color: inherit ;
      text-decoration: none ;
  }

  /**
   * Collapse table borders to avoid space between cells.
   */
  table {
      border-collapse: collapse ;
  }

  img {
      height: auto;
      line-height: 100%;
      text-decoration: none;
      border: 0;
      outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  i,
  b,
  a,
  ul,
  li,
  blockquote,
  hr,
  img,
  div,
  span,
  strong {
      line-height: 1.2;
      margin:0;
      padding:0;
  }

  html, body {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  body {
    background-image: url('${process.env.NEXT_PUBLIC_URL}/img/background.svg');
    background-size: cover;
  }
`;

export const Html: React.FC<PropsWithChildren & { lang: string }> = ({
  lang,
  children,
}) => {
  return (
    <html lang={lang} style={{ height: "100%", width: "100%" }}>
      {children}
    </html>
  );
};

export const Head: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
      <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
      {children}
    </head>
  );
};

export const Body: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <body
      style={{
        color,
        padding: 0,
        margin: 0,
        fontSize,
        width: "100%",
        height: "100%",
      }}
      {...rest}
    >
      {children}
    </body>
  );
};

export const Space = ({ size = 1 }: { size?: number }) => {
  return <div style={{ height: size * spacing }} />;
};

export function renderHTML({ content }: { content: string }) {
  return ReactDOMServer.renderToStaticMarkup(
    <Html lang="en">
      <Head />
      <Body>
        <main
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/img/logo.svg`}
              style={{ height: "auto", width: 200 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: spacing * 4,
              backgroundColor: "white",
              color: parabolColor,
              borderRadius: spacing,
              margin: spacing * 2,
            }}
          >
            <h2
              style={{
                fontSize: h2fontSize,
                marginLeft: spacing,
                fontWeight: 400,
              }}
            >
              {content}
            </h2>
          </div>
        </main>
      </Body>
    </Html>
  );
}
