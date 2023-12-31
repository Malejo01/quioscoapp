import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const {categoriaActual, handleClickCategoria} = useQuiosco()
    const {nombre, icono, id} = categoria;

    return (
    <div className={
        `${categoriaActual?.id === id ? 'bg-amber-400' : ''}
        flex items-center mx-5 w-full gap-4 border p-5 hover:bg-amber-400 hover:cursor-pointer`}
        onClick={() => handleClickCategoria(id)}>
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen Icono"
            className=""
        />
        <button
            type="button"
            className="text-2xl font-bold "
            
        >
            {nombre}
        </button>
    </div>
    )
}

export default Categoria
