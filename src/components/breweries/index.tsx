import React from 'react';

import {
  Grid,
  Container,
  em,
  NumberInput,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Stack,
  Flex,
  Select,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { useForm } from '@mantine/form';

import Text from '../Text';
import { fontSize } from '../../../node_modules/@thirdweb-dev/react/dist/declarations/src/design-system/index';
import { loadGetInitialProps } from '../../../node_modules/next/dist/shared/lib/utils';

const Breweries: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const form = useForm({
    initialValues: {
      brewerie: '',
      festival: false,
      taproom: false,
      shop: false,
      club: false,
      company: '',
      name: '',
      city: '',
      province: '',
      country: '',
      email: '',
      phone: '',
      web: '',
      shoponline: '',
      tpowner: '',
      ig: '',
      fb: '',
      beernum: '',
      legal: '',
      newsletter: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container
      bg="#EAEAEA"
      mih="30vh"
      pt="lg"
      pb="lg"
      mt={{ base: 'lg', md: 'lg' }}
      pr="lg"
      pl="lg"
    >
      <Text
        mb="lg"
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c="black"
        maw={isMobile ? '100%' : '500px'}
        content="ARE YOU IN THE BREWING BUSINESS?
        JOIN US!"
      />

      <Box maw={1200} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Flex
            mih={50}
            mb="lg"
            gap="md"
            justify="space-between"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            <Checkbox
              
              mt="md"
              m='lg'
              label="BREWERY"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              defaultChecked
              {...form.getInputProps('brewery', { type: 'checkbox' })}
            />

            <Checkbox
              mt="md"
              label="FESTIVAL"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              {...form.getInputProps('festival', { type: 'checkbox' })}
            />
            <Checkbox
              mt="md"
              label="TAPROOM"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              {...form.getInputProps('taproom', { type: 'checkbox' })}
            />
            <Checkbox
              mt="md"
              label="SHOP"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              {...form.getInputProps('shop', { type: 'checkbox' })}
            />

            <Checkbox
              mt="md"
              label="CLUB"
              labelPosition="right"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              {...form.getInputProps('club', { type: 'checkbox' })}
            />
          </Flex>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="COMPANY NAME / "
                placeholder="Company Name"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('company')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="CONTACT PERSON NAME"
                placeholder="Name"
                mb="lg"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('name')}
              />
            </Grid.Col>
          </Grid>

          <TextInput
            label="CITY / TOWN"
            placeholder="City - Town"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('city')}
          />

          <TextInput
            label="PROVINCE"
            placeholder="Province"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('province')}
          />

          <Select
            label="COUNTRY"
            placeholder=""
            data={['Spain', 'Portugal', 'France', '...']}
            defaultValue="Selecct"
            clearable
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
              option: {
                fontFamily: 'GT-America',
              },
            }}
          />

          <TextInput
            mt="md"
            withAsterisk
            label="E-MAIL"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          


          

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
            label="PHONE NUMBER"
            prefix="+"
            placeholder="Phone"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('phone')}
          />
              
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
            <NumberInput
            label="PHONE NUMBER"
            placeholder="Phone"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('phone')}
          />
            </Grid.Col>
          </Grid>

          <TextInput
            label="WEBSITE"
            placeholder="web"
            mb="lg"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('web')}
          />

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="SHOP ONLINE"
                placeholder=""
                data={['Si', 'No']}
                defaultValue="Selecct"
                clearable
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                  option: {
                    fontFamily: 'GT-America',
                  },
                }}
                {...form.getInputProps('shoponline')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="DO YOU OWN A TAPROOM?"
                placeholder=""
                data={['Si', 'No']}
                defaultValue="Selecct"
                clearable
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                  option: {
                    fontFamily: 'GT-America',
                  },
                }}
                {...form.getInputProps('tpowner')}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="INSTAGRAM "
                placeholder=""
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('IG')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="FACEBOOK"
                placeholder=""
                mb="lg"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('fb')}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <NumberInput
                label="HOW MANY BEERS DO YOU PRODUCE? "
                placeholder=""
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('beernum')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}></Grid.Col>
          </Grid>

          <Checkbox
              mt="md"
              m='lg'
              label="I have read and agree to the website Legal Terms*"
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              defaultChecked
              {...form.getInputProps('brewery', { type: 'legal' })}
            />

            <Checkbox
              mt="md"
              m='lg'
              label="I want to receive news from gefme.beer"
              
              styles={{
                inner: {
                    order: 0,
                  },
              }}
              defaultChecked
              {...form.getInputProps('brewery', { type: 'newsletter' })}
            />


          <Group justify="flex-end" mt="md">
          <Button type="submit"  ff='MetamorBit-Latin' variant="filled" color="rgba(0, 0, 0, 1)" size='xl'>SEND</Button>
        </Group>

        
        </form>
      </Box>
    </Container>
  );
};

export default Breweries;
