import { Anchor, Container, Flex, Text } from '@mantine/core'
import Nav from './components/Nav'
import ToTop from './components/ToTop'
import Catalogue from './containers/Catalogue'
import Footer from './containers/Footer'
import Landing from './containers/Landing'

// animate__animated animate__bounceIn
export default function App() {
  return (
    <>
      <Nav />

      <Landing />

      <Catalogue />

      <Footer />

      <Container className='copywrite'>
        <Flex justify='space-between' pt={20} pb={20}>
          <Text>@2023 CarHub. All rights reserved</Text>
          <Flex gap={20}>
            <Anchor href='#'>Privacy & Policy</Anchor>
            <Anchor href='#'>Terms & Condition</Anchor>
          </Flex>
        </Flex>
      </Container>

      <ToTop />
    </>
  )
}
