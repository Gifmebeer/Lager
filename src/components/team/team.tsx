import React from 'react';

import { Container, em, Image, Center, Divider } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import Text from '../Text';

const Team: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);

  return (
    <Container
      bg="#EAEAEA"
      mih="30vh"
      pt="lg"
      pb="lg"
      mt={{ base: 'lg', md: '100px' }}
      pr="lg"
      pl="lg"
    >
      <Text
        mb="xl"
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c="black"
        maw={isMobile ? '100%' : '500px'}
        content="Gifme.beer Team"
      />

      <Center>
        <Image
          src="/images/team/santi.png"
          /*           height={280} */
          alt=""
        />
      </Center>

      <Center>
        <Text
          mt="lg"
          c="black"
          ff="GT-America"
          style={{
            fontSize: isMobile ? '16px' : '16px',
            fontWeight: 'bold',
          }}
          maw={isMobile ? '100%' : '500px'}
          content="Santi “The Brain”"
        />
      </Center>

      <Center>
        <Text
          ff="GT-America"
          ta="center"
          c="#234FFF"
          style={{
            fontSize: isMobile ? '16px' : '16px',
          }}
          content="Making our business model ideas become a reality."
        />
      </Center>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Center>
        <Image
          src="/images/team/mateo.png"
          /*           height={160}
           */ alt=""
        />
      </Center>

      <Center>
        <Text
          mt="lg"
          c="black"
          ff="GT-America"
          style={{
            fontSize: isMobile ? '16px' : '16px',
            fontWeight: 'bold',
          }}
          maw={isMobile ? '100%' : '500px'}
          content="Mateo “The Maestro”"
        />
      </Center>

      <Center>
        <Text
          ff="GT-America"
          ta="center"
          c="#234FFF"
          style={{
            fontSize: isMobile ? '16px' : '16px',
          }}
          content="Our senior developer, always looking for ways to make tech life easier for our users."
        />
      </Center>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Center>
        <Image
          src="/images/team/Carol.png"
          /*           height={160}
           */ alt=""
        />
      </Center>

      <Center>
        <Text
          mt="lg"
          c="black"
          ff="GT-America"
          style={{
            fontSize: isMobile ? '16px' : '16px',
            fontWeight: 'bold',
          }}
          maw={isMobile ? '100%' : '500px'}
          content="Carol “The Artist”"
        />
      </Center>

      <Center>
        <Text
          ff="GT-America"
          ta="center"
          c="#234FFF"
          style={{
            fontSize: isMobile ? '16px' : '16px',
          }}
          content="Adding the magic touch to convert our code into beauty."
        />
      </Center>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Center>
        <Image
          src="/images/team/xavi.png"
          /*           height={160}
           */ alt=""
        />
      </Center>

      <Center>
        <Text
          mt="lg"
          c="black"
          ff="GT-America"
          style={{
            fontSize: isMobile ? '16px' : '16px',
            fontWeight: 'bold',
          }}
          maw={isMobile ? '100%' : '500px'}
          content="Xavier “The Brewer”"
        />
      </Center>

      <Center>
        <Text
          ff="GT-America"
          ta="center"
          c="#234FFF"
          mb="lg"
          style={{
            fontSize: isMobile ? '16px' : '16px',
          }}
          content="Always making sure everything is there to make things happen."
        />
      </Center>
    </Container>
  );
};

export default Team;
