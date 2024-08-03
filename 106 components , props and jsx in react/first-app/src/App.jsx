import Navbar from "./Components/Navbar" 
import Footer from "./Components/Footer"
import Card from "./Components/Card"
function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Card title="card 1" description="description of card 1"/>
      <Card title="card 2" description="description of card 2"/>
      <Card title="card 3" description="description of card 3"/>
      <Card title="card 4" description="description of card 4"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
