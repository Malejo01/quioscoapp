import Image from "next/image";

 
const Producto = ({ producto }) => {
 
    const { nombre, imagen, precio } = producto;
 
    return (
        <div className="border p-3">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imgen platillo ${nombre}`}
                width={300} height={300}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    ${precio}
                </p>

            </div>
        </div>
    )
}
 
export default Producto  