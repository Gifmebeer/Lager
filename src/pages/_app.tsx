import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/globals.css';
import type { AppProps } from 'next/app';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThirdwebProvider from '@/helpers/ThirdwebProvider';
import { theme } from '@/../theme';
import Head from 'next/head';
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
      <Head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Metatags />
      <main
        lang="en"
        className={`${metamorBit_Latin.variable} ${gtAmericaStandard_Regular.className} ${gtAmericaStandard_Medium.variable}`}
      >
        <ThirdwebProvider>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </main>
    </MantineProvider>
  );
}
