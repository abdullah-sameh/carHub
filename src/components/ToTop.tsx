import { useWindowScroll } from '@mantine/hooks'
import { Affix, Button, Transition, rem } from '@mantine/core'
import { UilAngleDoubleUp } from '@iconscout/react-unicons'

export default function ToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {transitionStyles => (
          <Button
            leftIcon={<UilAngleDoubleUp  />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            color='brand.8'
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  )
}
