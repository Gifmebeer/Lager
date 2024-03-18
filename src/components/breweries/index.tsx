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
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { isInRange, isNotEmpty, useForm } from '@mantine/form';

import Text from '../Text';

const Breweries: React.FC = () => {
  const [checked, setChecked] = useState(false);
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
      company: (value) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      name: (value) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      city: (value) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      province: (value) =>
        value.length < 2 ? 'Must have at least 2 letters' : null,
      country: isNotEmpty('Select country'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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
                data={[
                  'Afghanistan',
                  'Albania',
                  'Algeria',
                  'Andorra',
                  'Angola',
                  'Antigua and Barbuda',
                  'Argentina',
                  'Armenia',
                  'Australia',
                  'Austria',
                  'Austrian Empire*',
                  'Azerbaijan',
                  'Baden*',
                  'Bahamas, The',
                  'Bahrain',
                  'Bangladesh',
                  'Barbados',
                  'Bavaria*',
                  'Belarus',
                  'Belgium',
                  'Belize',
                  'Benin (Dahomey)',
                  'Bolivia',
                  'Bosnia and Herzegovina',
                  'Botswana',
                  'Brazil',
                  'Brunei',
                  'Brunswick and Lüneburg*',
                  'Bulgaria',
                  'Burkina Faso (Upper Volta)',
                  'Burma',
                  'Burundi',
                  'Cabo Verde',
                  'Cambodia',
                  'Cameroon',
                  'Canada',
                  'Cayman Islands, The',
                  'Central African Republic',
                  'Central American Federation*',
                  'Chad',
                  'Chile',
                  'China',
                  'Colombia',
                  'Comoros',
                  'Congo Free State, The*',
                  'Costa Rica',
                  'Cote d Ivoire (Ivory Coast)',
                  'Croatia',
                  'Cuba',
                  'Cyprus',
                  'Czechia',
                  'Czechoslovakia*',
                  'Democratic Republic of the Congo',
                  'Denmark',
                  'Djibouti',
                  'Dominica',
                  'Dominican Republic',
                  'Duchy of Parma, The*',
                  'East Germany (German Democratic Republic)*',
                  'Ecuador',
                  'Egypt',
                  'El Salvador',
                  'Equatorial Guinea',
                  'Eritrea',
                  'Estonia',
                  'Eswatini',
                  'Ethiopia',
                  'Federal Government of Germany (1848-49)*',
                  'Fiji',
                  'Finland',
                  'France',
                  'Gabon',
                  'Gambia, The',
                  'Georgia',
                  'Germany',
                  'Ghana',
                  'Grand Duchy of Tuscany, The*',
                  'Greece',
                  'Grenada',
                  'Guatemala',
                  'Guinea',
                  'Guinea-Bissau',
                  'Guyana',
                  'Haiti',
                  'Hanover*',
                  'Hanseatic Republics*',
                  'Hawaii*',
                  'Hesse*',
                  'Holy See',
                  'Honduras',
                  'Hungary',
                  'Iceland',
                  'India',
                  'Indonesia',
                  'Iran',
                  'Iraq',
                  'Ireland',
                  'Israel',
                  'Italy',
                  'Jamaica',
                  'Japan',
                  'Jordan',
                  'Kazakhstan',
                  'Kenya',
                  'Kingdom of Serbia/Yugoslavia*',
                  'Kiribati',
                  'Korea',
                  'Kosovo',
                  'Kuwait',
                  'Kyrgyzstan',
                  'Laos',
                  'Latvia',
                  'Lebanon',
                  'Lesotho',
                  'Lew Chew (Loochoo)*',
                  'Liberia',
                  'Libya',
                  'Liechtenstein',
                  'Lithuania',
                  'Luxembourg',
                  'Madagascar',
                  'Malawi',
                  'Malaysia',
                  'Maldives',
                  'Mali',
                  'Malta',
                  'Marshall Islands',
                  'Mauritania',
                  'Mauritius',
                  'Mecklenburg-Schwerin*',
                  'Mecklenburg-Strelitz*',
                  'Mexico',
                  'Micronesia',
                  'Moldova',
                  'Monaco',
                  'Mongolia',
                  'Montenegro',
                  'Morocco',
                  'Mozambique',
                  'Namibia',
                  'Nassau*',
                  'Nauru',
                  'Nepal',
                  'Netherlands, The',
                  'New Zealand',
                  'Nicaragua',
                  'Niger',
                  'Nigeria',
                  'North German Confederation*',
                  'North German Union*',
                  'North Macedonia',
                  'Norway',
                  'Oldenburg*',
                  'Oman',
                  'Orange Free State*',
                  'Pakistan',
                  'Palau',
                  'Panama',
                  'Papal States*',
                  'Papua New Guinea',
                  'Paraguay',
                  'Peru',
                  'Philippines',
                  'Piedmont-Sardinia*',
                  'Poland',
                  'Portugal',
                  'Qatar',
                  'Republic of Genoa*',
                  'Republic of Korea (South Korea)',
                  'Republic of the Congo',
                  'Romania',
                  'Russia',
                  'Rwanda',
                  'Saint Kitts and Nevis',
                  'Saint Lucia',
                  'Saint Vincent and the Grenadines',
                  'Samoa',
                  'San Marino',
                  'Sao Tome and Principe',
                  'Saudi Arabia',
                  'Schaumburg-Lippe*',
                  'Senegal',
                  'Serbia',
                  'Seychelles',
                  'Sierra Leone',
                  'Singapore',
                  'Slovakia',
                  'Slovenia',
                  'Solomon Islands, The',
                  'Somalia',
                  'South Africa',
                  'South Sudan',
                  'Spain',
                  'Sri Lanka',
                  'Sudan',
                  'Suriname',
                  'Sweden',
                  'Switzerland',
                  'Syria',
                  'Tajikistan',
                  'Tanzania',
                  'Texas*',
                  'Thailand',
                  'Timor-Leste',
                  'Togo',
                  'Tonga',
                  'Trinidad and Tobago',
                  'Tunisia',
                  'Turkey',
                  'Turkmenistan',
                  'Tuvalu',
                  'Two Sicilies*',
                  'Uganda',
                  'Ukraine',
                  'Union of Soviet Socialist Republics*',
                  'United Arab Emirates, The',
                  'United Kingdom, The',
                  'Uruguay',
                  'Uzbekistan',
                  'Vanuatu',
                  'Venezuela',
                  'Vietnam',
                  'Württemberg*',
                  'Yemen',
                  'Zambia',
                  'Zimbabwe',
                ]}
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
