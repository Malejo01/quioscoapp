import {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider= ({children}) => {
    const [categorias,setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    
    const router= useRouter()

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }
    

    useEffect(()=> {
        obtenerCategorias()
    },[])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    },[categorias])

    const handleClickCategoria = id  => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(true)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)

    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if (pedido.some(productoState => productoState.id === producto.id)) {
            //Actualizar la cantidad de pedidos
            const pedidoActualizado = pedido.map (productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)

            toast.success('Cambios guardados', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            setPedido([...pedido, producto])
            toast.success('¡Se agrego tu pedido!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        setModal(false)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                pedido,
                handleAgregarPedido,
                handleEditarCantidades,
                handleEliminarProducto
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )


}

export {
    QuioscoProvider
}

export default QuioscoContext