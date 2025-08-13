import { useState } from 'react'
import { WorkoutCard } from './components/workout-card'
import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Header
      title='Seja bem vindo(a)!'
      subtitle='Esse é um site experimental.'
    />
    </header>

    <main>
      <WorkoutCard
      id='1'
        title='FitDance'
        date='20/02/2026'
        durationMinutes={60}
        intensity={5}
      />
      <WorkoutCard
      id='2'
        title='Zumba'
        date='21/02/2026'
        durationMinutes={45}
        intensity={5}
      />
    </main>
  </>
  )
}

export default App
