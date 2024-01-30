import './carousel.css';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  Button,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Flex,
  Image,
} from '@mantine/core';
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
  return <Image src={image} alt={title} w={500} ml={150} />;
  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={'carousel_card'}
    >
      <div>
        <Text className={'carousel_category'} size='xs'>
          {category}
        </Text>
        <Title order={3} className={'carousel_title'}>
          {title}
        </Title>
      </div>
      <Button variant='white' color='dark'>
        Read article
      </Button>
    </Paper>
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
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: 'xl', sm: 2 }}
        align='start'
        mb={'xl'}
      >
        {slides}
      </Carousel>
      <Button
        onClick={() => router.push('/promos')}
        className='connectButton2'
        variant='light'
      >
        SEE ALL PROMOS
      </Button>
    </Flex>
  );
}
