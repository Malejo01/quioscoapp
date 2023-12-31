import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria";

const Sidebar = () => {
    const {categorias} = useQuiosco();

    return (
        <>
            <div className="flex justify-center">
            <Image 
                width={200} 
                height={100} 
                src="/assets/img/logo.svg" 
                alt="Logo de la empresa"
            />       
            </div>
            <nav className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav> 
        </>
    )
}

export default Sidebar