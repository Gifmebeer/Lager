import Head from 'next/head';
import { ColorSchemeScript } from '@mantine/core';

const Metatags = () => {
  return (
    <Head>
      <ColorSchemeScript />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
      <title>GifmeBeer | Collect your Craft Beer Experiences</title>

      <meta name="description" content="Collect your Craft Beer Experiences" />
      <meta property="og:image" content="/image.jpg" />
      <meta
        property="og:title"
        content="GifmeBeer | Collect your Craft Beer Experiences"
      />
      <meta property="og:description" content="Brewing Art into Blockchain" />
      <meta property="og:url" content="https://gifme.beer/" />

      <meta name="twitter:image" content="/image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="GifmeBeer - Collect your craft beer experiences"
      />
      <meta name="twitter:description" content="Brewing Art into Blockchain" />
      <link rel="icon" href="https://gifme.beer/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="https://gifme.beer/images/gmb_logo.png"
      />
    </Head>
  );
};

export default Metatags;
