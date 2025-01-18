import {Route,Routes} from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../loginPage';
import ProductOverview from '../home/ProductOverview';
import ProductPage from '../home/ProductPage';
import Cart from '../home/cart';
export default function HomePage() {
    return (
        <div className="h-screen w-full">
            <Header />
            <div className='w-full h-[calc(100vh-100px)]'>
                <Routes path="/*">
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route path="/cart" element={<Cart/>}/>
                <Route path="/productInfo/:id" element={<ProductOverview/>} />
                </Routes>
            </div>
        </div>
    )
}





