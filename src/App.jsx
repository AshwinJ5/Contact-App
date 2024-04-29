import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Components/Footer';
import{ Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Auth from './Pages/Auth';


function App() {

  return (
    <>
     <Routes>
        <Route path={'/'} element={<Landing/>} />
        <Route path={'/register'} element={<Auth/>} />
        <Route path={'/home'} element={<Home/>} />
     </Routes>
    </>
  )
}

export default App
