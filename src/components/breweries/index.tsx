import React from 'react';

import { Container, em, TextInput, Checkbox, Button, Group, Box, Stack, Radio, Flex } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { useForm } from '@mantine/form';

import Text from '../Text';



const Breweries: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const form = useForm({
    initialValues: {
      breweie: false,
      festival: false,
      taproom: false,
      shop: false,
      club:false,
      company:'',
      name:'',
      city:'',
      province:'',
      country:'',
      email: '',
      phone:'',
      web:'',
      shoponline:'',
      tpowner:'',
      ig:'',
      fb:'',
      numbeer:'',
      legal:'',
      newsletter:'',
      
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      
    },
  });



  return (
    <Container
      bg='#EAEAEA'
      mih='30vh'
      pt='lg'
      pb='lg'
      mt={{ base: 'lg', md: 'lg' }}
      pr='lg'
      pl='lg'
    >
      <Text
        mb='lg'
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c='black'
        maw={isMobile ? '100%' : '500px'}
        content='ARE YOU IN THE BREWING BUSINESS?
        JOIN US!'
      />

<Box maw={1200} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>

      {/* <Checkbox
          mt="md"
          {...form.getInputProps('brewery', { type: 'checkbox' })}
          label="BREWERY"
        />
        <Checkbox
          mt="md"
          {...form.getInputProps('festival', { type: 'checkbox' })}
          label="FESTIVAL"
        />
        <Checkbox
          mt="md"
          {...form.getInputProps('taproom', { type: 'checkbox' })}
          label="TAPROOM"
        />
        <Checkbox
          mt="md"
          {...form.getInputProps('shop', { type: 'checkbox' })}
          label="SHOP"
        />
        <Checkbox
          mt="md"
          {...form.getInputProps('club', { type: 'checkbox' })}
          label="CLUB"
        /> */}

    <Stack>
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Radio checked={false} onChange={() => {}} label="BREWERY" />
      <Radio checked={false} onChange={() => {}} label="FESTIVAL" />
      <Radio checked={false} onChange={() => {}} label="TAPROOM" />
      <Radio checked={false} onChange={() => {}} label="SHOP" />
      <Radio checked={false} onChange={() => {}} label="CLUB" />
      </Flex>
      
    </Stack>

      <TextInput 
      label="COMPANY NAME / " 
      placeholder="Company Name" 
      {...form.getInputProps('company')} />

      <TextInput 
      label="CONTACT PERSON NAME" 
      placeholder="Name" 
      {...form.getInputProps('name')} />

    <TextInput 
      label="CITY / TOWN" 
      placeholder="City - Town" 
      {...form.getInputProps('city')} />

      <TextInput 
      label="PROVINCE" 
      placeholder="Province" 
      {...form.getInputProps('province')} />

      <TextInput 
      label="SELECT COUNTRY" 
      placeholder="Select" 
      {...form.getInputProps('country')} />

      <TextInput
      mt="md" 
      withAsterisk
      label="E-MAIL"
      placeholder="your@email.com"
      {...form.getInputProps('email')} />
      
       <TextInput 
      label="PHONE NUMBER" 
      placeholder="Phone" 
      {...form.getInputProps('phone')} />

      <TextInput 
      label="WEBSITE" 
      placeholder="web" 
      {...form.getInputProps('web')} />


        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>

    </Container>
  );
};

export default Breweries;
