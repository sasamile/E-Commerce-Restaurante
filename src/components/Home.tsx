import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import Carrito from "./Carrito";
import Products from "./Products";

interface HomeProps{
  modal:boolean
  toggleCarrito:()=>void
}


function Home({modal,toggleCarrito}:HomeProps) {
  

  const [allProduct, setAllProduct] = useState<any[]>([]); // Inicializado como un array vacío
  const [total, setTotal] = useState(0); // Inicializado con el valor 0
  

  
  return (
    <>
      <header className="p-8">
        <div className="flex justify-between max-md:flex-col max-md:justify-around">
          <div>
            <h1 className="text-gray-300 text-5xl py-3">
              E-Commerce Restaurante{" "}
            </h1>
            <p className="text-2xl text-gray-500">31 De Enero Del 2024</p>
          </div>
          <div className="py-5 relative text-white flex gap-20   items-center justify-center">
            <FaSearch className="absolute  text-3xl left-3 top-1/2 -translate-y-1/2 " />
            <input
              type="text"
              className="pl-16 w-full p-4 rounded-xl text-2xl bg-[#1F1D2B] outline-none"
              placeholder="Buscar"
            />
            {/* carrito */}
            <button className="relative" onClick={toggleCarrito}>
              <FaCartShopping className="text-4xl mr-12" />
              <span className="bg-black px-5 py-3 absolute right-4 top-6 rounded-full">
                {allProduct.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      <Products
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        total={total}
        setTotal={setTotal}
     
      />
      <Carrito
      setTotal={setTotal}
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        toggleCarrito={toggleCarrito}
        modal={modal}
        total={total}
      />
    </>
  );
}

export default Home;
