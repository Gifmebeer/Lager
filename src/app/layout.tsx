import '@mantine/core/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThirdwebProvider from '@/helpers/ThirdwebProvider';
import { theme } from '@/../theme';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <ThirdwebProvider>
            <Container>{children}</Container>
          </ThirdwebProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
