import Typewriter from 'typewriter-effect'
import {
  Box,
  Container,
  Image,
  MediaQuery,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import bg from '../assets/hero-bg.webp'
import hero from '../assets/hero.webp'
import Btn from '../components/btn/Btn'

export default function Landing() {
  return (
    <Box h={'100dvh'} className='landing'>
      <Container size={'xl'}>
        <SimpleGrid className='landing-content' cols={2}>
          <Box className='animate__animated animate__fadeIn'>
            <Title>
              <span style={{ color: 'var(--blue)', display: 'inline-block' }}>
                <Typewriter
                  options={{
                    strings: ['Find', 'Book', 'Rent'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'inner-typper',
                  }}
                />
              </span>{' '}
              a car—quick and super easy!
            </Title>
            <Text>
              Stream line your car rental experience with our effortless booking
              process.
            </Text>
            <Btn txt='explore' />
          </Box>
          <MediaQuery smallerThan={800} styles={{ display: 'none' }}>
            <Box>
              <Image src={hero} className='animate__animated animate__bounce' />
            </Box>
          </MediaQuery>
        </SimpleGrid>
      </Container>
      <div className='bg'>
        <img src={bg} alt='img' />
      </div>
    </Box>
  )
}
