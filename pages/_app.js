import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}

export default MyApp
