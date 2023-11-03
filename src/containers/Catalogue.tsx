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
import {
  deislCars,
  electricityCars,
  gasCars,
  paginateArray,
} from '../components/utils'
import { useState } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { FaCar, FaSearch, FaWordpress } from 'react-icons/fa'

export default function Catalogue() {
  const carInPage = 10
  const [showedCars, setShowedCar] = useState(
    paginateArray(deislCars, carInPage)
  )
  const [showData, setShowData] = useState(showedCars[0])

  return (
    <LazyMotion features={domAnimation}>
      <Container className='catalogue' size='xl'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-150px' }}
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
              <TextInput placeholder='Volkswagen...' icon={<FaWordpress />} />
              <TextInput placeholder='Tiguan...' icon={<FaCar />} />
              <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Button size='sm'>
                  <FaSearch />
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
                  if (value === 'Fuel')
                    setShowedCar(paginateArray(deislCars, carInPage))
                  else if (value === 'Gas')
                    setShowedCar(paginateArray(gasCars, carInPage))
                  else if (value === 'Electricity')
                    setShowedCar(paginateArray(electricityCars, carInPage))
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
        </m.div>
        <Box className='cards'>
          {showData.map((card, i) => {
            return (
              <m.div
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: '-50px 0px' }}
                style={{ width: '100%' }}
              >
                <CarCard
                  car={card}
                  // w={i}
                  price={Math.floor(Math.random() * 11) + 50}
                />
              </m.div>
            )
          })}
        </Box>
        <Pagination
          mt={30}
          total={showedCars.length}
          position='center'
          size='md'
          onChange={e => {
            window.location.href = '#catalogue'
            setShowData(showedCars[e - 1])
          }}
        />
      </Container>
    </LazyMotion>
  )
}
