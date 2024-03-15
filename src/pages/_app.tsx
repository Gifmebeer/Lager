import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThirdwebProvider from '@/helpers/ThirdwebProvider';
import { theme } from '@/../theme';
import Metatags from '@/components/Metatags';

const metamorBit_Latin = localFont({
  src: '../fonts/MetamorBit_Latin-Regular.otf',
  variable: '--font-metamorbit-latin',
});

const gtAmericaStandard_Regular = localFont({
  src: '../fonts/GT-America-Standard-Regular.otf',
  variable: '--font-gt-america-standard-regular',
});

const gtAmericaStandard_Medium = localFont({
  src: '../fonts/GT-America-Standard-Medium.otf',
  variable: '--font-gt-america-standard-medium',
});

export const metadata: Metadata = {
  title: 'GifMeBeer',
  description: 'Gif Me Beer NFTs',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Metatags />
      <main
        lang="en"
        className={`${metamorBit_Latin.variable} ${gtAmericaStandard_Regular.className} ${gtAmericaStandard_Medium.variable}`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8QY9E6TQHS"
        />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8QY9E6TQHS');
          `}
        </Script>
        <ThirdwebProvider>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </main>
    </MantineProvider>
  );
}
