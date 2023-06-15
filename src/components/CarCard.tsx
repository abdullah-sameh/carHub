import { UilCog, UilPump, UilStreering } from '@iconscout/react-unicons'
import { Card, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { getImages } from '../utils'

type CarCardProps = {
  carName: string
  carYear: string
  cityMPG: number
  w: number
  drive?: string
}

export default function CarCard(props: CarCardProps) {
  const { carName, carYear, drive, w, cityMPG } = props
  const [imgs, setImages] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    setTimeout(() => {
      getImages(carName, carYear)
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
    >
      <Title order={2}>{carName}</Title>
      <Text className='price'>
        <sup>$</sup>
        {Math.floor(Math.random() * 11) + 50}
        <sub>/day</sub>
      </Text>

      <Image width={'100%'} height={160} src={imgs && imgs[0]} />
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
          <Text>{drive}</Text>
        </SimpleGrid>
        <SimpleGrid>
          <UilPump color='var(--mantine-color-lime-8)' />
          <Text>{cityMPG} MPG</Text>
        </SimpleGrid>
      </Flex>
    </Card>
  )
}
