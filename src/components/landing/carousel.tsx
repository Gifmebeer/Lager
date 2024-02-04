import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, useMantineTheme, Flex, Image } from '@mantine/core';
import { useRouter } from 'next/navigation';

const data = [
  {
    image: '/images/promos/horizontal-01.png',
    title: 'promo 1',
    category: 'promo',
  },
  {
    image: '/images/promos/vertical-01.png',
    title: 'promo 2',
    category: 'promo',
  },
];

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
  const theme = useMantineTheme();
  const router = useRouter();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Flex
      w={'100%'}
      py={100}
      bg={'rgba(234, 134, 229, 1)'}
      align={'center'}
      justify='center'
      direction={'column'}
    >
      <Carousel
        w={'100%'}
        slideSize={{ base: '100%', sm: 0 }}
        slideGap={{ base: 'xl', sm: 2 }}
        align={'start'}
        mb={'xl'}
      >
        {slides}
      </Carousel>
      <Button
        onClick={() => router.push('/promos')}
        className={'connectButton2'}
        variant='light'
        mt={'lg'}
      >
        SEE ALL PROMOS
      </Button>
    </Flex>
  );
}
