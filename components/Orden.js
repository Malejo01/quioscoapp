
export default function Orden({orden}) {
    const {id, nombre, total, pedido, estado} = orden

    console.log(orden);

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {nombre}</p>
            <p className="text-lg font-bold">Total: $ {total}</p>
            <p className="text-lg font-bold">Estado {estado ? 'En proceso' : 'finalizado'}</p>
            <div>
                
            </div>
        </div>
    )
}