import React from 'react'
import { Link } from 'react-router-dom'
import '../styless/Admin.css';

const Admin = () => {
    return (
        <>
            <h2 className='titulo'>Panel de administración</h2>
            <div className='acciones'>
                <div className='columna'>
                    <Link to={'/admin/agregarImagen'}>
                        <button className='boton'>Agregar imagen</button>
                    </Link>
                    <Link to={'/admin/eliminarImagen'}>
                        <button className='boton'>Eliminar imagen</button>
                    </Link>
                    <Link to={'/admin/agregarArticulo'}>
                        <button className='boton'>Agregar artículo</button>
                    </Link>
                    <Link to={'/admin/editarArticulo'}>
                        <button className='boton'>Editar artículo</button>
                    </Link>
                </div>
                <div className='columna'>
                    <Link to={'/admin/eliminarArticulo'}>
                        <button className='boton'>Eliminar artículo</button>
                    </Link>
                    <Link to={'/admin/agregarTurno'}>
                        <button className='boton'>Agregar turno</button>
                    </Link>
                    <Link to={'/admin/editarTurno'}>
                        <button className='boton'>Editar turno</button>
                    </Link>
                    <Link to={'/admin/eliminarTurno'}>
                        <button className='boton'>Eliminar turno</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Admin
