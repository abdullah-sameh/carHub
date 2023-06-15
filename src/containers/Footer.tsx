import {
  Anchor,
  Card,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import logo from '../../public/logo.svg'

export default function Footer() {
  return (
    <Container className='footer'>
      <Card>
        <Image src={logo} width={150} height={100} fit='fill' />
        <Text>Carhub 2023</Text>
        <Text>All Rights Reserved ©</Text>
      </Card>
      <Card className='footer-cards'>
        <SimpleGrid spacing={15}>
          <Title order={5}>About</Title>
          <Anchor href='#'>How it works</Anchor>
          <Anchor href='#'>Featured</Anchor>
          <Anchor href='#'>Partnership</Anchor>
          <Anchor href='#'>Bussiness Relation</Anchor>
        </SimpleGrid>
        <SimpleGrid spacing={15}>
          <Title order={5}>Company</Title>
          <Anchor href='#'>Events</Anchor>
          <Anchor href='#'>Blog</Anchor>
          <Anchor href='#'>Podcast</Anchor>
          <Anchor href='#'>Invite a friend</Anchor>
        </SimpleGrid>
        <SimpleGrid spacing={15}>
          <Title order={5}>Socials</Title>
          <Anchor href='#'>Discord</Anchor>
          <Anchor href='#'>Instagram</Anchor>
          <Anchor href='#'>Twitter</Anchor>
          <Anchor href='#'>Facebook</Anchor>
        </SimpleGrid>
      </Card>
    </Container>
  )
}
