import logo from '../assets/logo.svg'
import {
  Container,
  Header,
  Image,
  Flex,
  Modal,
  Title,
  SimpleGrid,
  Button,
} from '@mantine/core'
import SignBtn from './sign-btn/SignBtn'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import MyTextInput from '../components/input/MyTextInput'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scroll] = useWindowScroll()
  const [opened, { open, close }] = useDisclosure(false)

  const [blur, setBlur] = useState({})

  useEffect(() => {
    if (scroll.y > 0) {
      setBlur({
        backdropFilter: 'blur(16px) saturate(180%)',
        '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(17, 25, 40, 0.25)',
      })
    } else {
      setBlur({})
    }
  }, [scroll])

  return (
    <Header
      height={70}
      fixed={true}
      withBorder={false}
      bg={'transparent'}
      style={{ display: 'grid', alignContent: 'center', ...blur }}
    >
      <Container size={'xl'} w={'100%'}>
        <Flex justify={'space-between'} align={'center'}>
          <Image
            src={logo}
            height={55}
            width={200}
            fit='contain'
            className='animate__animated animate__bounceInLeft'
          />
          <SignBtn open={open} />
        </Flex>
      </Container>

      {/* form to sign in  */}
      <Modal
        opened={opened}
        onClose={close}
        title='You are welcome...'
        centered
        zIndex={99999}
      >
        <Title>Need to save what you review?</Title>
        <Title order={4} mb={40}>
          Sign in our website...
        </Title>
        <SimpleGrid spacing={40}>
          <MyTextInput label='Name' type='text' />
          <MyTextInput label='Email' type='email' />
          <Button color='brand.8'>Send me password</Button>
        </SimpleGrid>
      </Modal>
    </Header>
  )
}
