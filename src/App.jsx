import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import Nav from './component/Nav'
import Specials from './component/Specials';
function App() {

  return (
    <div className='App font-sans'>
      <Nav />
      <Header />
      <Specials />
      <Footer />
    </div>
  )
}

export default App
