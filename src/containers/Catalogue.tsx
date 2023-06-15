import { UilCar, UilSearch, UilWordpress } from '@iconscout/react-unicons'
import {
  Container,
  Title,
  Box,
  Text,
  TextInput,
  Flex,
  Button,
  Select,
  MediaQuery,
  Pagination,
} from '@mantine/core'
import CarCard from '../components/CarCard'
import { deislCars, electricityCars, gasCars } from '../utils'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Catalogue() {
  const [showedCars, setShowedCar] = useState(deislCars)

  return (
    <Container className='catalogue' size='xl'>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: '-200px' }}
      >
        <Box className='head'>
          <Title id='catalogue'>Car Catalogue</Title>
          <Text>Explore out cars you might like</Text>
        </Box>
        <Flex
          wrap='wrap'
          gap={10}
          justify='space-between'
          className='catalogue-nav'
        >
          <Flex gap={10} wrap='wrap' align={'center'}>
            <TextInput placeholder='Volkswagen...' icon={<UilWordpress />} />
            <TextInput placeholder='Tiguan...' icon={<UilCar />} />
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Button size='sm'>
                <UilSearch />
              </Button>
            </MediaQuery>
          </Flex>
          <Flex gap={10}>
            <Select
              defaultValue='Fuel'
              data={[
                { value: 'Fuel', label: 'Fuel' },
                { value: 'Gas', label: 'Gas' },
                { value: 'Electricity', label: 'Electricity' },
              ]}
              onChange={value => {
                console.log(value)
                if (value === 'Fuel') setShowedCar(deislCars)
                else if (value === 'Gas') setShowedCar(gasCars)
                else if (value === 'Electricity') setShowedCar(electricityCars)
              }}
            />
            <Select
              placeholder='Year'
              defaultValue='Fuel'
              clearable
              data={[
                { value: '2015', label: '2015' },
                { value: '2016', label: '2016' },
                { value: '2017', label: '2017' },
                { value: '2018', label: '2018' },
                { value: '2019', label: '2019' },
                { value: '2020', label: '2020' },
                { value: '2021', label: '2021' },
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
              ]}
            />
          </Flex>
        </Flex>
      </motion.div>
      <Box className='cards'>
        {showedCars.map((card, i) => {
          return i > 10 ? null : (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-50px 0px' }}
            >
              <CarCard
                carName={`${card?.make} ${card?.model}`}
                carYear={`${card.year}`}
                drive={card?.drive}
                w={i}
                cityMPG={card?.city_mpg}
              />
            </motion.div>
          )
        })}
      </Box>
      <Pagination mt={30} total={20} position='center' size='md' />
    </Container>
  )
}
