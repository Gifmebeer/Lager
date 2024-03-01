import { CURRENT_PROMOS } from '@/constants/promos';
import { Carousel } from '@mantine/carousel';
import { Button, Flex, Image, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Image
      src={image}
      alt={title}
      w={{ base: '70%', sm: 300, md: 500 }}
      mx={{ base: '15%', sm: 100 }}
    />
  );
}

export default function CarouselSection() {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const router = useRouter();
  const slides = CURRENT_PROMOS.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Flex
      w={'100%'}
      p={{ base: '40px 0', md: '100px 0 50px 0' }}
      bg='#EAEAEA'
      align={'center'}
      justify='center'
      direction={'column'}
    >
      <Carousel
        slideSize={{ base: '100%', sm: 0 }}
        slideGap={{ base: 'xl', sm: 2 }}
        align={isMobile ? 'center' : 'start'}
        mb={'xl'}
      >
        {slides}
      </Carousel>
      <Button
        onClick={() => router.push('/promos')}
        className={'connectButton2'}
        variant='light'
        mb={'xl'}
      >
        See all Promotions
      </Button>
    </Flex>
  );
}
