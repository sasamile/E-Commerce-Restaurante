import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


// Definir una interfaz para los objetos en allProduct
interface Producto {
  id: number;
  img: string;
  quantity: number;
  productos: string;
  valor: number;
}

interface CarritoProps {
  setTotal: (Value: number) => void;
  total: number;
  setAllProduct: React.Dispatch<React.SetStateAction<Producto[]>>;
  allProduct: Producto[];
  modal: boolean;
  toggleCarrito: () => void;
}

function Carrito({
  toggleCarrito,
  modal,
  allProduct,
  total,
  setAllProduct,
  setTotal,
}: CarritoProps) {
  const eliminarProducto = (product: any) => {
    // Filtrar la matriz para eliminar el objeto con el ID proporcionado
    const nuevaLista = allProduct.filter(
      (producto) => producto.id !== product.id
    );
    setTotal(total - product.valor * product.quantity);
    setAllProduct(nuevaLista);
  };

  const onclearCart = ()=>{
      setAllProduct([])
      setTotal(0)
  }

  return (
    <aside
      className={`fixed bg-[#1F1D2B]  top-0 max-md:w-full w-[300px] h-full overflow-y-auto ${
        modal ? "right-0" : "right-full"
      }`}
    >
      <button onClick={toggleCarrito}>
        <FaWindowClose className="text-white text-5xl absolute right-6 top-5" />
      </button>

      {allProduct.length ? (
        <div>
          {allProduct.map((product) => (
            <div
              key={product.id}
              className="text-white flex gap-12 items-center justify-between mt-12 px-12 bg-white/10 py-3 border-2 "
            >
              <img
                src={product.img}
                alt="Plato1"
                className="w-20 rounded-full"
              />

              <h1 className="text-lg">{product.quantity}</h1>
              <h1 className="text-lg text-center">{product.productos}</h1>
              <h1 className="text-lg">${product.valor}</h1>
              <button onClick={() => eliminarProducto(product)}>
                <IoClose className="text-4xl" />
              </button>
            </div>
          ))}

          <div className="text-center my-12 text-2xl text-white ">
            Total $ <span className="font-bold">{total}</span>
          </div>

          {/* Borrar Carrito */}
          <button
            className="bg-red-500 w-full p-4 text-white text-2xl font-bold "
            onClick={onclearCart}
          >
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <div className="text-white text-2xl text-center mt-20">
          El Carrito está Vacío
        </div>
      )}
    </aside>
  );
}

export default Carrito;
