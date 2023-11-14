import {useRouter} from 'next/router'


const pasos = [
    {paso: 1, nombre:"Menú", url:"/"},
    {paso: 2, nombre:"Resumen", url:"/resumen"},
    {paso: 3, nombre:"Datos y total", url:"/total"},

]


    function Pasos() {
        
        
        
        const router = useRouter()

        const calcularProgreso = () => {
            let valor 

            if(router.pathname ==="/") {
                valor = 10
            } else if (router.pathname ==="/resumen") {
                valor = 50
            } else if (router.pathname ==="/total") {
                valor = 100
            }
            return valor
        }

        return (
            <>
                <div className="flex justify-between mb-10">
                    {pasos.map (paso => (
                        <button 
                            onClick={() =>{
                                router.push(paso.url)
                                
                            }}
                            className="text-2xl font-bold"
                            key={paso.paso}>
                                {paso.nombre}
                        </button>
                    ))}
                </div>
                <div className='bg-gray-100 mb-10'>
                    <div className='rounded-full bg-amber-500 text-s leading-none h-3 text-center text-white' 
                        style={{ width: `${calcularProgreso()}%`
                        }}>

                    </div>
                </div>
            </>
        )
    }

    export default Pasos