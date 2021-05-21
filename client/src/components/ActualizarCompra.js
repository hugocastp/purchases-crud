import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';
import FormCompra from './FormCompra';

let ActualizarCompra = () => {
    let [compras, setCompras] = useState([]);
    let [showForm, setShowForm] = useState(false);
    let [formData, setFormData] = useState({});
    let [idAEditar, setIdAEditar] = useState("-1");
    useEffect(() => {
        let fetchCompras = async () => {
            try {
                let response = await fetch(process.env.REACT_APP_API);
                return response.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchCompras().then(res => setCompras(res.data));
    }, []);

    let openEditForm = (idx) => {
        setIdAEditar(compras[idx].id);
        setFormData({
            id: compras[idx].id, empresa: compras[idx].empresa,
            concepto: compras[idx].concepto, departamento: compras[idx].departamento,
            logoUrl: compras[idx].logoUrl
        });
        setShowForm(true);
    }

    let updateCompras = (data) => {
        fetch(`${process.env.REACT_APP_API}/${idAEditar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(dataResponse => {
            setCompras(compras.map(compra => compra.id === dataResponse.data.id ? dataResponse.data : compra));
            setShowForm(false);
        });
    }
    return (
        <>
            {showForm && <div onBlur={() => console.log("h")}>
                <button className="new-btn" onClick={() => setShowForm(false)}>Cerrar</button>
                <FormCompra initData={formData} onClickFn={updateCompras} btnTxt={"Editar"}></FormCompra>
            </div>}
            <div className="grid-container">
                {compras.map((compra, idx) => {
                    return (
                        <Compra key={idx} compra={compra} onClickFn={openEditForm} idx={idx} btnTxt={"Editar"} />
                    );
                })}
            </div>
        </>
    )
}

export default ActualizarCompra
