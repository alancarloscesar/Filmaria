import './styles.css';
import RoutesUrl from './routes';
import { ToastContainer , toast } from 'react-toastify' ;   
import 'react-toastify/dist/ReactToastify.css';//importando css padrão do toast

function App() {
  return (

    <div className="app">
      <RoutesUrl/>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
     

  );
}

export default App;
