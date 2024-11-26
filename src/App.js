import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/Alert'
import Libro from './components/AllTheBooks'

function App() {
  return (
    <div className="App">
      <header>
        <MyNav subtitle="Bookstore" isFluid={true} />
      </header>
      <div>
        <MyAlert />
      </div>
      <div className="container">
        <div className="row">
          <Libro />
        </div>
      </div>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
