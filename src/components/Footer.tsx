import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import {
  IconBrandXFilled,
  IconBrandDiscordFilled,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Link from 'next/link';

const data = [
  {
    title: 'Community',
    links: [
      { label: 'HOLA@GIFME.BEER', link: '/' },
      { label: 'FAQ', link: '/' },
      { label: 'GIFME.BEER TEAM', link: '/' },
      { label: 'TERMS & CONDITIONS', link: '/tos' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={'link'}
        component='a'
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={'wrapper'} key={group.title}>
        {/* <Text className={'title'}>{group.title}</Text> */}
        {links}
      </div>
    );
  });

  return (
    <footer className={'footer'}>
      <Container className={'inner'}>
        <Link href='/' legacyBehavior>
          <Image
            w={'150px'}
            src='/images/gmb_logo.svg'
            alt='Logo'
            style={{ cursor: 'pointer' }}
          />
        </Link>

        <Group
          gap={'lg'}
          className={'social'}
          justify='flex-end'
          wrap='nowrap'
          mt={{ base: 'xl', md: 0 }}
        >
          <ActionIcon size='xl' color='white' variant='outline' radius='xl'>
            <IconBrandXFilled
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='xl' color='white' variant='outline' radius='xl'>
            <IconBrandDiscordFilled
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size='xl' color='white' variant='outline' radius='xl'>
            <IconBrandInstagram
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
        <div className={'groups'}>{groups}</div>
      </Container>
      <Container className={'afterFooter'}>
        <Text c='white' size='sm'>
          © {currentYear} All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
