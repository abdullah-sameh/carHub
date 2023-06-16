import { UilCog, UilPump, UilStreering } from '@iconscout/react-unicons'
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Modal,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { arrProps, getImages } from '../utils'
import { useDisclosure, useHover } from '@mantine/hooks'
import { motion } from 'framer-motion'

type CarCardProps = {
  car: arrProps
  w: number
  price: number
}

export default function CarCard(props: CarCardProps) {
  const { car, w, price } = props
  const [imgs, setImages] = useState<string[] | undefined>(undefined)
  const { hovered, ref } = useHover()
  const [opened, { open, close }] = useDisclosure(false)

  const carName = `${car?.make} ${car?.model}`

  useEffect(() => {
    setTimeout(() => {
      getImages(carName, car?.year.toString())
        .then(imageUrls => {
          setImages(imageUrls)
        })
        .catch(error => {
          console.error(error)
        })
    }, 100 * w)
  }, [])

  return (
    <Card
      // className='animate__animated animate__bounceIn'
      withBorder
      display='grid'
      style={{ gap: '15px' }}
      ref={ref}
    >
      <Title order={2}>{carName}</Title>
      <Text className='price'>
        <sup>$</sup>
        {price}
        <sub>/day</sub>
      </Text>

      <Image width={'100%'} height={160} src={imgs && imgs[0]} />
      <Box mih={53}>
        {hovered ? (
          <Button
            className='animate__animated animate__bounceIn'
            w='100%'
            onClick={open}
          >
            Get More Information
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              align={'center'}
              justify={'space-between'}
              sx={{
                '& .mantine-SimpleGrid-root': {
                  justifyItems: 'center',
                  gap: 5,
                },
              }}
            >
              <SimpleGrid>
                <UilStreering color='var(--mantine-color-violet-9)' />
                <Text>Automatic</Text>
              </SimpleGrid>
              <SimpleGrid>
                <UilCog color='var(--mantine-color-orange-9)' />
                <Text>{car?.drive}</Text>
              </SimpleGrid>
              <SimpleGrid>
                <UilPump color='var(--mantine-color-lime-8)' />
                <Text>{car?.city_mpg} MPG</Text>
              </SimpleGrid>
            </Flex>
          </motion.div>
        )}
      </Box>

      <Modal
        className='card-modal'
        opened={opened}
        onClose={close}
        zIndex={99999}
      >
        <Box className='imgs'>
          <Image width='100%' height={150} radius='md' />
          <Image width='100%' height={100} radius='md' />
          <Image width='100%' height={100} radius='md' />
          <Image width='100%' height={100} radius='md' />
        </Box>
        <Title order={3}>{carName}</Title>
        {Object.entries(car).map(([key, value]) => (
          <Flex key={key} justify='space-between'>
            <Text transform='capitalize' color='dimmed'>
              {key.replace('_', ' ')}
            </Text>
            <Text transform='capitalize'>{value}</Text>
          </Flex>
        ))}
      </Modal>
    </Card>
  )
}
