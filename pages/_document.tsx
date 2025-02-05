import React from 'react';
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   type DocumentContext,
   type DocumentInitialProps,
} from 'next/document';
// import { CssBaseline } from '@heroui/react';
// import {globalStyles} from '../styles/global.stitches';

class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return {
         ...initialProps,
         styles: React.Children.toArray([initialProps.styles]),
      };
   }

   render() {
      return (
         <Html lang="en">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
            {/* <Head>{CssBaseline.flush()}</Head> */}
            <Head>
               <meta name="theme-color" content="#000000" />
            </Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
