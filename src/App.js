
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './pages/AllRoutes/AllRoutes';
import Header from './pages/common/Header/Header';
import Footer from './pages/common/Footer/Footer';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
         <AuthProvider>
         <BrowserRouter>
             <Header/>
             <AllRoutes/>
             <Footer/>
         </BrowserRouter>
         </AuthProvider>
    </div>
  );
}

export default App;
