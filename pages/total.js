import Layout from "@/layout/Layout"


export default function Total() {
    return (
    <Layout pagina='Total y confirmar pedido'>

        <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

        <form>
            <div>
                <label htmlFor="nombre" className="block uppercase text-slate-800 text-xl">
                    Nombre
                </label>
                <input
                id="nombre"
                type="text"
                className="bg-gray-200 w-full lg:w-1/2 mt-3 p-2 rounded-md "
                >
                </input>

                <div className="mt-10">
                    <p>Total a pagar <span className="font-bold">$500</span></p> 
                </div>

                <div className="mt-5">
                    <input
                        className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 text-center"
                        value={'Confirmar pedido'}
                    />
                </div>
            </div>
        </form>
    </Layout>
    )
  }