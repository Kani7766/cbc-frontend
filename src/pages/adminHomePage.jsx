import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp, BsBox, BsCart, BsPeople } from "react-icons/bs";
import AdminProductPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-4">
       
          <Link
            className="flex flex-row items-center mb-4  text-white hover:text-blue-200 "
            to="/admin/dashboard"
          >
            <BsGraphUp className="mr-2" /> Dashboard
          </Link>
          <Link
            className="flex flex-row items-center mb-4 text-white hover:text-blue-200"
            to="/admin/products"
          >
            <BsBox className="mr-2" /> Products
          </Link>
          <Link
            className="flex flex-row items-center mb-4 text-white hover:text-blue-200"
            to="/admin/orders"
          >
            <BsCart className="mr-2" /> Orders
          </Link>
          <Link
            className="flex flex-row items-center mb-4 text-white hover:text-blue-200 "
            to="/admin/customers"
          >
            <BsPeople className="mr-2" /> Customers
          </Link>
      
      </div>
     
     <div className="w-[80%] h-screen bg-red-600">
        <Routes path="/admin/*">
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/products" element={<AdminProductPage/>}/> 
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/customers" element={<h1>Customers</h1>} />
        <Route path="/*" element={<h1>404 Not Found the admin page</h1>} />
     </Routes>
     </div>
    </div>
  );
}
