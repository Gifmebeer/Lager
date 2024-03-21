import React from 'react';
import { useState } from 'react';
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
  Flex,
  Select,
  Dialog,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

// @ts-ignore
import { isNotEmpty, useForm } from '@mantine/form';

import { COUNTRIES } from '@/constants/legal';
import Text from '../Text';

const Breweries: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
  const form = useForm({
    initialValues: {
      brewerie: false,
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
      legal: { checked },
      newsletter: '',
    },

    validate: {
      company: (value: any) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      name: (value: any) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      city: (value: any) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      province: (value: any) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      country: isNotEmpty('Select country'),
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: isNotEmpty('Fill in a phone'),
      /* web: (value) =>
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(
          value,
        )
          ? null
          : 'Invalid web adress', */
      shoponline: isNotEmpty('Shop online?'),
      tpowner: isNotEmpty('Tap owner?'),
      legal: isNotEmpty('Terms of use must be accepted'),
      /*       legal: (value) => (!value ? 'Must have at least 2 letters' : null),
       */
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch('/api/saveForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form: values }), // Assuming your API expects an object with a `form` key
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        form.reset();
        toggle();
      } else {
        console.error('Form submission error:', result.error);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Form submission exception:', error);
    }
  };

  return (
    <Container bg="#EAEAEA" mih="30vh" p="lg" mb={'xl'}>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
        bg="#FF0"
      >
        <Text
          c="black"
          size="lg"
          mb="xs"
          fw={'bold'}
          content="Form submitted!"
        />
      </Dialog>
      <Text
        mb="xl"
        mt="100px"
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c="black"
        maw={isMobile ? '100%' : '500px'}
        content="ARE YOU IN THE BREWING BUSINESS?
        JOIN US!"
      />

      <Box maw={1200} mx="auto">
        <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
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
              label="BREWERY"
              styles={{
                inner: {
                  order: 0,
                },
                input: {
                  border: '1px solid black',
                },
              }}
              color="black"
              {...form.getInputProps('brewerie', { type: 'checkbox' })}
            />

            <Checkbox
              mt="md"
              label="FESTIVAL"
              styles={{
                inner: {
                  order: 0,
                },
                input: {
                  border: '1px solid black',
                },
              }}
              color="black"
              {...form.getInputProps('festival', { type: 'checkbox' })}
            />
            <Checkbox
              mt="md"
              label="TAPROOM"
              styles={{
                inner: {
                  order: 0,
                },
                input: {
                  border: '1px solid black',
                },
              }}
              color="black"
              {...form.getInputProps('taproom', { type: 'checkbox' })}
            />
            <Checkbox
              mt="md"
              label="SHOP"
              styles={{
                inner: {
                  order: 0,
                },
                input: {
                  border: '1px solid black',
                },
              }}
              color="black"
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
                input: {
                  border: '1px solid black',
                },
              }}
              color="black"
              {...form.getInputProps('club', { type: 'checkbox' })}
            />
          </Flex>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                withAsterisk
                label="COMPANY NAME "
                placeholder="Company Name"
                mb="lg"
                radius="md"
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
                withAsterisk
                label="CONTACT PERSON NAME"
                placeholder="Name"
                mb="lg"
                radius="md"
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

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                withAsterisk
                label="CITY / TOWN"
                placeholder="City - Town"
                mb="lg"
                radius="md"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('city')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                withAsterisk
                label="PROVINCE"
                placeholder="Province"
                mb="lg"
                radius="md"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('province')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                withAsterisk
                label="COUNTRY"
                placeholder="Select country"
                searchable
                error
                radius="md"
                data={COUNTRIES}
                defaultValue="Selecct"
                mb="lg"
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
                {...form.getInputProps('country')}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                withAsterisk
                label="E-MAIL"
                mb="lg"
                radius="md"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <NumberInput
                label="PHONE NUMBER"
                placeholder="Phone"
                mb="lg"
                radius="md"
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
            radius="md"
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid black',
              },
            }}
            {...form.getInputProps('web')}
          />

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                label="SHOP ONLINE"
                placeholder="Shop online"
                data={['Yes', 'No']}
                defaultValue="Selecct"
                clearable
                mb="lg"
                radius="md"
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
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                label="DO YOU OWN A TAPROOM?"
                placeholder="Do you own a taproom?"
                data={['Yes', 'No']}
                defaultValue="Selecct"
                clearable
                mb="lg"
                radius="md"
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
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="HOW MANY BEERS DO YOU HAVE? "
                placeholder="5"
                mb="lg"
                radius="md"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('beernum')}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="INSTAGRAM "
                placeholder=""
                mb="lg"
                radius="md"
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
                radius="md"
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

          <Checkbox
            mt="md"
            mb="md"
            label="I have read and agree to the website Legal Terms*"
            styles={{
              inner: {
                order: 0,
              },
              input: {
                border: '1px solid black',
              },
            }}
            color="black"
            checked={checked}
            // @ts-ignore
            onChange={(event) => setChecked(event.currentTarget.checked)}
            {...form.getInputProps('legal', { type: 'checkbox' })}
          />

          <Checkbox
            mt="md"
            label="I want to receive news from gefme.beer"
            styles={{
              inner: {
                order: 0,
              },
              input: {
                border: '1px solid black',
              },
            }}
            color="black"
            defaultChecked
            {...form.getInputProps('newsletter', { type: 'checkbox' })}
          />

          <Group justify="flex-end" mt="md">
            <Button
              loading={loading}
              type="submit"
              ff="MetamorBit-Latin"
              variant="filled"
              color="rgba(0, 0, 0, 1)"
              size="lg"
              radius="md"
              pt="sm"
              pb="md"
            >
              SEND
            </Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
};

export default Breweries;
