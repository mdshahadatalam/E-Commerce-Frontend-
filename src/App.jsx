import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navber } from './Components/Navber';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import { RootLayout } from './RootLayout';
import { Contact } from './Pages/Contact';
import { ShopGride } from './Pages/ShopGride';
import { ShopD } from './Pages/ShopD';
import { ShopCom } from './Pages/ShopCom';
import { ShopCard } from './Pages/ShopCard';
import { ShopCheck } from './Pages/ShopCheck';
import { ShopWish } from './Pages/ShopWish';
import { About } from './Pages/About';
import { Error } from './Pages/Error';
import { BlogClassic } from './Pages/BlogClassic';
import { BlogClWithSi } from './Pages/BlogClWithSi';
import { BlogD } from './Pages/BlogD';
import { ShopGride2 } from './Pages/ShopGride2';
import { Blogs } from './Pages/Blogs';
import { Features } from './Pages/Features';


function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route element={<RootLayout/>}>  
         {/* Home  */}
        <Route path="/" element={<Home />} />
  

          {/* SHop  */}
        <Route path="/shopGride" element={<ShopGride />} />
        <Route path="/shopGride2" element={<ShopGride2 />} />
        <Route path="/shopD" element={<ShopD />} />
        <Route path="/shopCom" element={<ShopCom />} />
        <Route path="/shopCard" element={<ShopCard />} />
        <Route path="/shopCheck" element={<ShopCheck />} />
        <Route path="/shopWish" element={<ShopWish />} />
         
         {/* Pages  */}
         <Route path="/about" element={<About />} />
         <Route path="/error" element={<Error />} />

         {/* fueature  */}

         <Route path="/feature" element={<Features />} />
             {/* Blogs  */}
         <Route path="/blog" element={<Blogs />} />
         <Route path="/blogClassic" element={<BlogClassic />} />
         <Route path="/blogClWith" element={<BlogClWithSi />} />
         <Route path="/blogD" element={<BlogD />} />

        <Route path="/contact" element={<Contact />} />
         </Route>

      </Route>
    )
  )

  return (
    <>
    <RouterProvider  router={router} />
    </>
  )
}

export default App
