import { Text, Container, Group, rem, Flex, Image } from '@mantine/core';

const data = [
  {
    title: 'Community',
    links: [
      { label: 'ARE YOU IN THE BREWING BUSINESS? JOIN US!', link: null },
      { label: 'FAQS', link: '/faqs' },
      { label: 'GIFME.BEER TEAM', link: null },
      { label: 'TERMS & CONDITIONS', link: '/tos' },
      {
        label: 'HOLA@GIFME.BEER',
        link: 'mailto:hola@gifme.beer',
        color: '#ffff00',
      },
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
        c={link.color}
        component="a"
        href={link.link}
        /* onClick={(event) => event.preventDefault()}  */
      >
        {link.label}
      </Text>
    ));

    return (
      <Container
        w={{ base: '100vw', sm: '100%' }}
        maw="770px"
        fluid
        dir="column"
        key={group.title}
      >
        {/* <Text className={'title'}>{group.title}</Text> */}
        {links}
      </Container>
    );
  });

  return (
    <footer className={'footer'}>
      <Container className={'inner'} fluid maw="1280px">
        <div className={'groups'}>{groups}</div>

        <Group
          gap={'sm'}
          className={'social'}
          justify="flex-end"
          wrap="nowrap"
          mt={{ base: 'xl', md: 0 }}
        >
          <a href="https://twitter.com/GifmeBeer" target="_blank">
            <Image
              src="/images/icons/x.svg"
              style={{ width: rem(35), height: rem(35) }}
            />
          </a>
          <a href="https://www.instagram.com/gifmebeer/" target="_blank">
            <Image
              src="/images/icons/instagram.svg"
              style={{ width: rem(35), height: rem(35) }}
            />
          </a>
          <a href="https://discord.gg/n9tEPfQh" target="_blank">
            <Image
              src="/images/icons/discord.svg"
              style={{ width: rem(35), height: rem(35) }}
            />
          </a>
          <a
            href="https://mirror.xyz/0xeB5da736d4b8036df743E6792a778696FAb80336"
            target="_blank"
          >
            <Image
              src="/images/icons/mirror.svg"
              style={{ width: rem(35), height: rem(35) }}
            />
          </a>
        </Group>
      </Container>
      <Container className={'afterFooter'} mt="lg">
        <Text className={'afterFooter-t'} c="white" size="sm">
          © {currentYear} of all contents Gifme.beer | 2024
        </Text>
      </Container>
    </footer>
  );
}
