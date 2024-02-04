import { useEffect, useState } from "react";

interface FormObject {
  id: string;
  nombre: string;
  apellido: string;
  edad: string;
  cc: string;
}

function About() {
  const [objetos, setObjetos] = useState<FormObject[]>([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [cc, setCc] = useState("");
  const [error, setError] = useState(false);

  const generalId = () => {
    const id = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return id + random;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if ([nombre, apellido, edad, cc].includes("")) {
      return setError(true);
    }

    // Almacena un nuevo objeto cada vez que se ingresa un nuevo registro en el formulario
    const objetoAgregado: FormObject = {
      id: generalId(),
      nombre,
      apellido,
      edad,
      cc,
    };

    setObjetos((prevObjetos) => [...prevObjetos, objetoAgregado]);

    setNombre("");
    setApellido("");
    setEdad("");
    setCc("");
  };

  return (
    <>
      <div className="grid justify-center pt-20 text-white overflow-auto">
        <h1 className="text-4xl font-bold font-mono text-center">Formulario</h1>

        <form onSubmit={handleSubmit}>
          <div className="my-20 grid gap-12 text-2xl lg:grid-cols-2 place-items-center text-center">
            <div className="grid w-[500px] max-md:w-full">
              <label htmlFor="">Nombres </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="ejemplo:Santiago"
                className="p-4 rounded-lg bg-[#1F1D2B]/50 my-5"
              />
            </div>
            <div className="grid w-[500px] max-md:w-full ">
              <label htmlFor="">Apellidos</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="ejemplo:Suescun"
                className="p-4 rounded-lg bg-[#1F1D2B]/50 my-5"
              />
            </div>
            <div className="grid  w-[500px] max-md:w-full">
              <label htmlFor="">Edad </label>
              <input
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                type="number"
                placeholder="ejemplo:18"
                className="p-4 rounded-lg bg-[#1F1D2B]/50 my-5"
              />
            </div>
            <div className="grid w-[500px] max-md:w-full">
              <label htmlFor="">CC </label>
              <input
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                type="number"
                placeholder="ejemplo:1127864343"
                className="p-4 rounded-lg bg-[#1F1D2B]/50 my-5"
              />
            </div>
          </div>
          <div className="mb-12">
            <input
              type="submit"
              value="Enviar Formulario"
              className="bg-sky-700 text-center w-full p-4 rounded-2xl font-bold text-3xl"
            />
          </div>
          {error && (
            <>
              <div className="bg-red-500 p-4 text-white text-2xl">
                <p className="font-bold text-3xl text-center">
                  Todos los campos son obligatorio
                </p>
              </div>
            </>
          )}
        </form>
      </div>

      <div className="mb-32 mt-12">
        {objetos.map((obj) => (
          
          <div key={obj.id}>
            <h1>{obj.nombre}</h1>
            <h1>{obj.edad}</h1>
            <h1>{obj.apellido}</h1>
          </div>
            
         
        ))}
      </div>
    </>
  );
}

export default About;
