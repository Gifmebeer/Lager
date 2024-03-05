import React from 'react';

import { Accordion, Container } from '@mantine/core';


  const groceries = [
    {
      value: '1. What is Gifme.Beer?',
      description:
        'It is a Craft Beer digital collection of cards in NFT format using blockchain technology',
    },
    {
      value: '2. What is a blockchain?',
      description:
        'Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. A blockchain database stores data in blocks that are linked together in a chain.',
    },
    {
      value: '3. What is an NFT?',
      description:
        'A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. The ownership of an NFT is recorded in the blockchain and in some cases can be transferred by the owner, allowing NFTs to be sold and traded.',
    },
    {
      value: '4. What is a Wallet?',
      description:
        'A blockchain or crypto wallet is a way to manage, secure, and use cryptocurrencies such as Bitcoin Ethereum, and other digital assets based on a blockchain (for example, an NFT). There are two basic types of blockchain wallets: software wallets and hardware wallets.',
    },
    {
      value: '5. What types of NFTs can you collect with Gifme.Beer? (transferable and nontransferable)',
      description:
        'There are two types of NFTs on Gifme.Beer, transferable, which you will be able to give away or sell to other users, and non-transferable which are locked to your account.',
    },
    {
      value: '6. How can you join?',
      description:
        'If you are familiar with Blockchain technology you can log in with your Metamask or Coinbase wallet with the Optimism network selected. Otherwise, just sign up on our webpage and we will automatically create a wallet for you to join.',
    },
    {
      value: '7. What can I do with the NFTs I collect?',
      description:
        'Every NFT represents a brand, a bar, a beer, a festival, or any other related asset in the craft beer space. We encourage you to collect them as a way to keep track of your fun beer-related memories. Some brands will let you participate in polls if you have their NFTs. Also, owning NFTs will give you a chance to join promotions temporarily offered by the brands giving them away. You will have to check the promotions page.',
    },
    {
      value: '8.- How can I transfer my NFTs to another member? You need gas',
      description:
        'To transfer anything on a blockchain you need to pay a small amount of fees to the network. You can freely transfer your NFTs if you use your Metamask or Coinbase wallet and have enough Optimism to pay for the fees, if you use the automatically created wallet you will have to wait until we implement the transfer functionality but you will also need funds to pay for the fees as they will be not covered by GifmeBeer.',
    },
    {
      value: '9. What are the promotions?',
      description:
        'Promotions are special offers, raffles, or gifts beer companies do every once in a while. They are free to decide when to announce them and you are free to join, if you are interested in one specific promotion, just make sure you meet the requirements on the promotion details page.',
    },
    {
      value: '10. How do I join promotions?',
      description:
        'You can check the details of active promotions and see if you meet the requirements with the NFTs you own. If you do, just follow the instructions on how to redeem your prize.',
    },
  ];

  

const Faqs: React.FC = () => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control >{item.value}</Accordion.Control>
      <Accordion.Panel c='blue'>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container bg='#EAEAEA' mih='30vh' mt={{ base: 'lg', md: 'xl' }}>
    <Accordion variant="separated" disableChevronRotation defaultValue="Apples">
      {items}
    </Accordion>
    </Container>
  );
}


export default Faqs;