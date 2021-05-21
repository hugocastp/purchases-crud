import React from 'react'


let Compra = ({ compra, onClickFn, idx, btnTxt }) => {
    let clickCompra = () => {
        onClickFn(idx);
    }
    return (
        <div className="grid-item">
            <h5 className="titulo">{compra.empresa}</h5>
            <h5 className="subtitulo">{`Id: ${compra.id}`}</h5>
            <h5 className="subtitulo">{`Concepto: ${compra.concepto}`}</h5>
            <h5 className="subtitulo">{`Departamento: ${compra.departamento}`}</h5>
            <h5 className="subtitulo">{`Monto: ${compra.monto}`}</h5>
            <h5 className="subtitulo">{`Fecha: ${compra.fecha}`}</h5>
            <img src={`${compra.logoUrl}`} alt="logo" width="100" height="150"></img>
            <button onClick={clickCompra} className="btn">{btnTxt}</button>     
        </div> 
                   
    )
}

export default Compra
