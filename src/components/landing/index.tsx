import { Flex } from '@mantine/core';
import PrelaunchHero from './prelaunch.bbf.hero';
import Hero from './hero';
import Collections from './collections';
import Carousel from './carousel';
import Ads from './ads';
import BBFPromo from './bbf.lifetime.promo';

export const SHOW_BBF_LANDING = true;

export const LandingPage = () => {
  return (
    <Flex justify={'center'} align={'center'} direction="column">
      {SHOW_BBF_LANDING ? <PrelaunchHero /> : <Hero />}
      {SHOW_BBF_LANDING ? (
        <>
          <BBFPromo />
        </>
      ) : (
        <>
          <Collections />
          <Carousel />
          <Ads />
        </>
      )}
    </Flex>
  );
};
