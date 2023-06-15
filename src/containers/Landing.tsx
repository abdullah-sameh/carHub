import Typewriter from 'typewriter-effect'
import { Box, Container, Image, SimpleGrid, Text, Title } from '@mantine/core'
import bg from '../../public/hero-bg.png'
import hero from '../../public/hero.png'
import Btn from '../components/btn/Btn'

export default function Landing() {
  return (
    <Box h={'100dvh'} className='landing'>
      <Container size={'xl'}>
        <SimpleGrid className='landing-content' cols={2}>
          <Box className='animate__animated animate__fadeIn'>
            <Title>
              <Typewriter
                options={{
                  strings: ['Find', 'Book', 'Rent'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'inner-typper',
                }}
              />{' '}
              a car—quick and super easy!
            </Title>
            <Text>
              Stream line your car rental experience with our effortless booking
              process.
            </Text>
            <Btn txt='explore' />
          </Box>
          <Box>
            <Image src={hero} className='animate__animated animate__bounce' />
          </Box>
        </SimpleGrid>
      </Container>
      <div className='bg'>
        <img src={bg} alt='img' />
      </div>
    </Box>
  )
}
