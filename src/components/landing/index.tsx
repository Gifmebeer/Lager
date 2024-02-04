import { Flex } from '@mantine/core';
import Hero from './hero';
import Collections from './collections';
import Carousel from './carousel';

const LandingPage = () => {
  return (
    <Flex justify={'center'} align={'center'} direction='column'>
      <Hero />
      <Collections />
      <Carousel />
    </Flex>
  );
};

export default LandingPage;
