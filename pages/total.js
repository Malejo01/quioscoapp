import { useEffect, useCallback} from "react";
import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco";

export default function Total() {

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco() 


    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "";
    },[pedido,nombre]);  
    
    useEffect(() =>{
          
        comprobarPedido()
    },[pedido, comprobarPedido])

    

    return (
    <Layout pagina='Total y confirmar pedido'>

        <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

        <form onSubmit={colocarOrden}>
            <div>
                <label htmlFor="nombre" className="block uppercase text-slate-800 text-xl">
                    Nombre
                </label>
                <input
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
                id="nombre"
                type="text"
                className="bg-gray-200 w-full lg:w-1/2 mt-3 p-2 rounded-md "
                >
                </input>

                <div className="mt-10">
                    <p className="text-2xl">Total a pagar <span className="font-bold">$ {total}</span></p> 
                </div>

                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-200':'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'}
                            w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value={'Confirmar pedido'}
                        disabled={comprobarPedido()}
                    />
                </div>
            </div>
        </form>
    </Layout>
    )
  }