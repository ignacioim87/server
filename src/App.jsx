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
      <h1>Vite + React</h1>
      <div className="card">
        <p>
         SERVER
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
