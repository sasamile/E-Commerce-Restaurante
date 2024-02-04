import { useState } from "react";
import { ProductCalientes, ProductFrios } from "../constant";
import { MdAdd } from "react-icons/md";

// Define la interfaz para un producto
interface Product {
  id: number;
  img: string;
  productos: string;
  valor: number;
  quantity: number;
  // Otras propiedades del producto
}

// Actualiza la interfaz ProductsProps para usar la interfaz Product
interface ProductsProps {
  allProduct: Product[];
  setAllProduct: (products: Product[]) => void;
  total: number;
  setTotal: (value: number) => void;
}

function Products({
  allProduct,
  setAllProduct,

  total,
  setTotal,
}: ProductsProps) {
  const [cualquierCosa, setCualquierCosa] = useState<"calientes" | "frios">(
    "calientes"
  );

  let products;

  if (cualquierCosa === "calientes") {
    products = ProductCalientes;
  } else if (cualquierCosa === "frios") {
    products = ProductFrios;
  } else {
    products = ProductCalientes;
  }

  const onAddProduct = (product: Product) => {
    // incrementa quantity
    if (allProduct.find((item) => item.id === product.id)) {
      const products = allProduct.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setTotal(total + product.valor * product.quantity);
      return setAllProduct([...products]);
    }

    setTotal(total + product.valor * product.quantity);
    //Almacena el objeto
    setAllProduct([...allProduct, product]);
  };
  console.log(allProduct);

  return (
    <>
      <div className="flex text-2xl text-white gap-12 p-8">
        <button
          onClick={() => setCualquierCosa("calientes")}
          className={
            cualquierCosa === "calientes"
              ? "border-b-[3px] border-[#ec7c6a] rounded-sm transition-all"
              : ""
          }
        >
          Productos Calientes
        </button>
        <button
          onClick={() => setCualquierCosa("frios")}
          className={
            cualquierCosa === "frios"
              ? "border-b-[3px] border-[#ec7c6a] rounded-sm transition-all"
              : ""
          }
        >
          Productos Frios
        </button>
      </div>
      <section className="px-8 py-2 text-gray-300">
        <h1 className="text-3xl ">Elige Tu PLato Favorito </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-x-20  p-8 place-items-center py-40 gap-y-52">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-[#1F1D2B] text-center py-20 px-12 rounded-xl w-full grid place-items-center"
              >
                <img
                  src={product.img}
                  alt="producto"
                  width={200}
                  className="rounded-full pb-8 mx-auto -mt-40 "
                />
                <h1 className="text-3xl pb-8">{product.productos}</h1>
                <p className="text-5xl pb-4">${product.valor}</p>
                <button
                  className="bg-green-500 flex items-center  justify-center p-3 text-2xl mt-4 font-bold"
                  onClick={() => onAddProduct(product)}
                >
                  <MdAdd />
                  Agregar
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
