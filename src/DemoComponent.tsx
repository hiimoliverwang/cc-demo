import { useState } from 'react'

function DemoComponent() {
  // Lint error 1: unused variable
  const unusedVariable = 'this will cause a lint error'

  // Lint error 2: any type
  const handleClick = (data: any) => {
    console.log(data)
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
