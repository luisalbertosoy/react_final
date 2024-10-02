import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { ViewCartProvider } from './context/ViewCartContext.jsx';
import routes from './config/routes.jsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ViewCartProvider>
        <RouterProvider router={routes}>
          <ScrollToTop />
        </RouterProvider>
      </ViewCartProvider>
    </CartProvider>
  );
}

export default App;
