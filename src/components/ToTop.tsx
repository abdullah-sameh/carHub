import { useWindowScroll } from '@mantine/hooks'
import { Affix, Button, MediaQuery, Text, Transition, rem } from '@mantine/core'
import { FaAngleDoubleUp } from 'react-icons/fa'

export default function ToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {transitionStyles => (
          <Button
            leftIcon={<FaAngleDoubleUp />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            color='brand.8'
          >
            <MediaQuery smallerThan={500} styles={{ display: 'none' }}>
              <Text>Scroll to top</Text>
            </MediaQuery>
          </Button>
        )}
      </Transition>
    </Affix>
  )
}
