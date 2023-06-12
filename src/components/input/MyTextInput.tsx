import './MyTextInput.css'

type inputProps = {
  label: string
  type: 'text' | 'password' | 'email'
}

export default function MyTextInput(props: inputProps) {
  const { label, type } = props
  return (
    <div
      className='wave-group'
      style={
        {
          '--font-color': 'var(--mantine-color-brand-7)',
        } as React.CSSProperties
      }
    >
      <input required type={type} className='input' placeholder=' ' />
      <span className='bar'></span>
      <label className='label'>
        {[...label].map((letter, i) => (
          <span
            key={i}
            className='label-char'
            style={{ '--index': i } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </label>
    </div>
  )
}
