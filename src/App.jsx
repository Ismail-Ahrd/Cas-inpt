import './App.css'
import About from './Components/About/About'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Signup from './Components/Sign/Signup'
import Signin from './Components/Sign/Signin'
import Events from './Components/Events/Events'
import MyDonation from './Components/MyDonation/MyDonation'
import Navbar from './Components/Navbar/Navbar'
import Donation from './Components/Donation/Donation'
import Footer from './Components/Footer/Footer'
import RequireAuth from './Route/RequireAuth'
import Payment from './Components/Payment/Payment'
import Event from './Components/Events/Event'


function App() {
  return (
    <div className="bg-bgcolor min-h-[100vh] overflow-hidden">
      <Router>
        <Navbar />
        <Routes >
            {/* public route */}
            <Route exact path='/' element={<About/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/events' element={<Events/>} />
            <Route path='/event' element={<Event/>} />
            <Route path='/mydonation' element={<MyDonation/>} />
            <Route path='/donation' element={<Donation/>} />
            {/* protected route */}
            <Route element={<RequireAuth/>} >
              <Route path='/payment' element={<Payment/>} />
            </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
