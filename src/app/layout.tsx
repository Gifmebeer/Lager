import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThirdwebProvider from '@/helpers/ThirdwebProvider';
import { theme } from '@/../theme';

const metamorBit_Latin = localFont({
  src: './fonts/MetamorBit_Latin-Regular.otf',
  variable: '--font-metamorbit-latin',
});

const gtAmericaStandard_Regular = localFont({
  src: './fonts/GT-America-Standard-Regular.otf',
  variable: '--font-gt-america-standard-regular',
});

const gtAmericaStandard_Medium = localFont({
  src: './fonts/GT-America-Standard-Medium.otf',
  variable: '--font-gt-america-standard-medium',
});

export const metadata: Metadata = {
  title: 'GifMeBeer',
  description: 'Gif Me Beer NFTs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${metamorBit_Latin.variable} ${gtAmericaStandard_Regular.variable} ${gtAmericaStandard_Medium.variable}`}
    >
      <head>
        <ColorSchemeScript />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
