
import './App.css'
import Card from './components/Card'
import libraries from './utils/libraries'


function App() {

  return (
    <>
      <h1 style={{ color: '#545454' }}>Vite + React + Angular + Qwik</h1>
      <div style={{ display: 'inline-flex'}}>
        <Card 
          name={libraries.vite.name}
          url={libraries.vite.url}
          logo={libraries.vite.logo}
          alt={libraries.vite.description}  
        />
        <Card 
          name={libraries.react.name} 
          url={libraries.react.url}
          logo={libraries.react.logo}
          alt={libraries.react.description}
        />
        <Card 
          name={libraries.angular.name} 
          url={libraries.angular.url}
          logo={libraries.angular.logo}
          alt={libraries.angular.description}
        />
        <Card 
          name={libraries.qwik.name}
          url={libraries.qwik.url}
          logo={libraries.qwik.logo}
          alt={libraries.qwik.description}
        />
      </div>
    </>
  )
}

export default App;
