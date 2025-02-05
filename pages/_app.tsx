import '../styles/globals.css';
import type {AppProps} from 'next/app';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// import "./index.css";

function MyApp({Component, pageProps}: AppProps) {
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            dark: "dark",
         }}
      >
         <HeroUIProvider>
            <Component {...pageProps} />
         </HeroUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
