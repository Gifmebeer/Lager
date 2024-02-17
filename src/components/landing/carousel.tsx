import { CURRENT_PROMOS } from '@/constants/promos';
import { Carousel } from '@mantine/carousel';
import { Button, useMantineTheme, Flex, Image } from '@mantine/core';
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
  const theme = useMantineTheme();
  const router = useRouter();
  const slides = CURRENT_PROMOS.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Flex
      w={'100%'}
      p={'100px 0 0 0'}
      bg='#EAEAEA'
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
        mb={'xl'}
      >
        See all Promotions
      </Button>
    </Flex>
  );
}
