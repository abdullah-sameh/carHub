import {
  Anchor,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import logo from '../assets/logo.svg'
import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export default function Footer() {
  const [scope1, animate] = useAnimate()
  const [scope2, animate2] = useAnimate()
  const [scope3, animate3] = useAnimate()

  const isInView = useInView(scope1)

  useEffect(() => {
    animate2('a', { y: [100, 0] })
    animate3('a', { y: [100, 0] })
    animate('a', { y: [100, 0] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <Container className='footer'>
      <Card>
        <Image src={logo} width={150} height={100} fit='fill' />
        <Text>Carhub 2023</Text>
        <Text>All Rights Reserved ©</Text>
      </Card>
      <Card className='footer-cards'>
        <SimpleGrid ref={scope1} spacing={15}>
          <Title order={5}>About</Title>
          <Anchor href='#'>How it works</Anchor>
          <Anchor href='#'>Featured</Anchor>
          <Anchor href='#'>Partnership</Anchor>
          <Anchor href='#'>Bussiness Relation</Anchor>
        </SimpleGrid>
        <SimpleGrid ref={scope2} spacing={15}>
          <Title order={5}>Company</Title>
          <Anchor href='#'>Events</Anchor>
          <Anchor href='#'>Blog</Anchor>
          <Anchor href='#'>Podcast</Anchor>
          <Anchor href='#'>Invite a friend</Anchor>
        </SimpleGrid>
        <SimpleGrid ref={scope3} spacing={15}>
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
