import { useEffect, useState } from "react";

interface FormObject {
  id: string;
  nombre: string;
  apellido: string;
  edad: string;
  cc: string;
}

function About() {
  const [persona, setPersona] = useState<FormObject>({
    id: "",
    nombre: "",
    apellido: "",
    edad: "",
    cc: "",
  });

  const [objetos, setObjetos] = useState<FormObject[]>([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [cc, setCc] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(persona).length > 0) {
      setNombre(persona.nombre);
      setApellido(persona.apellido)
      setEdad(persona.edad)
      setCc(persona.cc)
    }
    console.log(persona);
  }, [persona]);

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
    if (persona.id) {
      objetoAgregado.id = persona.id;

      const pacientesActualizados = objetos.map((pacienteState) =>
        pacienteState.id === persona.id ? objetoAgregado : pacienteState
      );

      setObjetos(pacientesActualizados);
      // En lugar de setPersona({})
      setPersona({ id: "", nombre: "", apellido: "", edad: "", cc: "" });
    } else {
      setObjetos((prevObjetos) => [...prevObjetos, objetoAgregado]);
    }

    setNombre("");
    setApellido("");
    setEdad("");
    setCc("");
  };

  const elimiarPacientes = (obj:any)=>{
    const pacientesAct = objetos.filter((persona)=>persona.id !== obj.id)

    setObjetos(pacientesAct)
  }

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
          {persona.id ? (
          <input
            type="submit"
            className="bg-yellow-500 w-full p-3 text-2xl text-white uppercase font-bold hover:bg-yellow-600 cursor-pointer transition-all"
            value="Editar Paciente"
          />
        ) : (
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-2xl text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        )}
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
          <div
            key={obj.id}
            className="bg-white rounded-2xl w-[80%] grid gap-12 mx-auto p-4 justify-center py-12"
          >
            <h1 className="text-3xl "><span className="font-bold uppercase">Nombre: </span>{obj.nombre}</h1>
            <h1 className="text-3xl "><span className="font-bold uppercase">Apelllido:</span> {obj.apellido}</h1>
            <h1 className="text-3xl "><span className="font-bold uppercase">Edad: </span>{obj.edad}</h1>
            <h1 className="text-3xl "><span className="font-bold uppercase">Cc: </span>{obj.cc}</h1>
            <div className="flex justify-between text-xl font-semibold">
              <button className="bg-yellow-500 p-4 rounded-xl" onClick={() => setPersona(obj)}>Editar</button>
              <button className="bg-red-500 p-4 rounded-xl" onClick={() => elimiarPacientes(obj)}>Eliminar</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
