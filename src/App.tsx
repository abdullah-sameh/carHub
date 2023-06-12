import ToTop from './components/ToTop'
import Landing from './containers/Landing'

// animate__animated animate__bounceIn
export default function App() {
  return (
    <>
      <Landing />

      <div style={{ height: '100vh' }}></div>
      <ToTop />
    </>
  )
}
