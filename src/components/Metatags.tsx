import Head from 'next/head';

const Metatags = () => {
  return (
    <Head>
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
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Metatags;
