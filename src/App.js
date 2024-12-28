import './index.css'
import Navbar from './component/Navbar'
import Homeherosection from './component/Homeherosection';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <div className="bg-gradient-dark">

      <Navbar/>
      <Homeherosection/>
      <ContactUs/>

    </div>
  );
}

export default App;
