import { MouseEventHandler } from 'react'
import './sign-btn.css'
import { MediaQuery } from '@mantine/core'

type SignBtnProps = {
  open: MouseEventHandler<HTMLButtonElement>
}

export default function SignBtn(props: SignBtnProps) {
  const { open } = props
  return (
    <button className='signBtn animate__bounceIn' onClick={open}>
      <div className='svg-wrapper-1'>
        <div className='svg-wrapper'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            id='sign-in-alt'
          >
            <path
              fill='#fff'
              d='M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z'
            ></path>
          </svg>
        </div>
      </div>
      <MediaQuery smallerThan={800} styles={{ display: 'none !important' }}>
        <span>Sign in</span>
      </MediaQuery>
    </button>
  )
}
