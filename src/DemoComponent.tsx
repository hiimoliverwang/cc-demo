import { useState } from 'react'

function DemoComponent() {
  const handleClick = (data: number) => {
    console.log(data)
    setCount(data + 1)
  }

  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Demo Component</h2>
      <p>This component has intentional lint errors!</p>
      <button onClick={() => handleClick(count)}>
        Click me: {count}
      </button>
    </div>
  )
}

export default DemoComponent
