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
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return <Image src={image} alt={title} />;
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
      p={100}
      bg={'rgba(234, 134, 229, 1)'}
      align={'center'}
      justify='center'
      direction={'column'}
    >
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: 'xl', sm: 2 }}
        align='center'
        slidesToScroll={mobile ? 1 : 2}
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
