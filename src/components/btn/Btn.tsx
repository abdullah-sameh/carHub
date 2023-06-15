import { UnstyledButton } from '@mantine/core'
import './btn.css'

type BtnProps = { txt: string }

const Btn = (props: BtnProps) => {
  const { txt } = props

  return (
    <UnstyledButton component='a' className='buttonR' href='#catalogue'>
      <span className='buttonR_lg'>
        <span className='buttonR_sl'></span>
        <span className='buttonR_text'>{txt}</span>
      </span>
    </UnstyledButton>
  )
}

export default Btn
