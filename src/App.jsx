import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <p>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </p>
        <p>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </p>
      </div>
      <h1>Server with React + Express + MySQL</h1>
    </div>
  )
}

export default App
