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
import { arrProps } from './utils'
import { useDisclosure, useHover } from '@mantine/hooks'
import { motion, useAnimate, useInView } from 'framer-motion'
import { FaGasPump, FaPeace, FaWrench } from 'react-icons/fa'

type CarCardProps = {
  car: arrProps
  // w: number
  price: number
}

export default function CarCard(props: CarCardProps) {
  const { car, price } = props
  const [imgs] = useState<string[] | undefined>(undefined)
  const { hovered, ref } = useHover()
  const [opened, { open, close }] = useDisclosure(false)
  const [scope, animate] = useAnimate()

  const carName = `${car?.make} ${car?.model}`
  const isInView = useInView(scope)

  useEffect(() => {
    console.log(isInView)
    setTimeout(() => {
      animate('li', { y: [-100, 0], opacity: [0, 1] })
    }, 10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

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
                <FaPeace />
                {/* <UilStreering color='var(--mantine-color-violet-9)' /> */}
                <Text>Automatic</Text>
              </SimpleGrid>
              <SimpleGrid>
                {/* <UilCog color='var(--mantine-color-orange-9)' /> */}
                <FaWrench />
                <Text>{car?.drive}</Text>
              </SimpleGrid>
              <SimpleGrid>
                {/* <UilPump color='var(--mantine-color-lime-8)' /> */}
                <FaGasPump />
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
        closeButtonProps={{ variant: 'filled', color: 'brand' }}
        zIndex={99999}
        lockScroll={false}
      >
        <Box className='imgs'>
          <Image width='100%' height={150} radius='md' />
          <Image width='100%' height={100} radius='md' />
          <Image width='100%' height={100} radius='md' />
          <Image width='100%' height={100} radius='md' />
        </Box>
        <Title order={3}>{carName}</Title>
        <ul ref={scope}>
          {Object.entries(car).map(([key, value]) => (
            <li key={key}>
              <Flex justify='space-between'>
                <Text transform='capitalize' color='dimmed'>
                  {key.replace('_', ' ')}
                </Text>
                <Text transform='capitalize'>{value}</Text>
              </Flex>
            </li>
          ))}
        </ul>
      </Modal>
    </Card>
  )
}
