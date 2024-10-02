import {BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout.jsx'
import Home from './pages/Home/index.jsx';
import Store from './pages/Store/index.jsx';
import SingleProduct from './pages/SingleProduct/index.jsx';
import Cart from './pages/Cart/index.jsx';
import Checkout from './pages/Checkout/index.jsx';
import ScrollToTop from './components/ScrollToTop/index.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ViewCartProvider } from './context/ViewCartContext.jsx';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <ViewCartProvider>
          <ScrollToTop />
          <BaseLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
                <Route path='/detail/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
          </BaseLayout>
        </ViewCartProvider>
      </CartProvider>   
    </BrowserRouter>
  )
}

export default App;