import { Flex } from '@mantine/core';
import Hero from './prelaunch.hero';

// import Hero from './hero';
// import Collections from './collections';
// import Carousel from './carousel';
// import Ads from './ads';

const LandingPage = () => {
  return (
    <Flex justify={'center'} align={'center'} direction='column'>
      <Hero />
      {/* <Collections />
      <Carousel />
      <Ads /> */}
    </Flex>
  );
};

export default LandingPage;
