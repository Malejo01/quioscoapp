import Image from "next/image";


const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria;

    return (
    <div>
        <Image
            width={100}
            height={100}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen Icono"
        />
    </div>
    )
}

export default Categoria
