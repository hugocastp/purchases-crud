import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';
import FormCompra from './FormCompra';
import FileUpload from './FileUpload';

let CrearCompra = () => {
    let [compras, setCompras] = useState([]);
    let [showForm, setShowForm] = useState(false);

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

    let deleteCompra = async (idx) => {
        try {
            await fetch(`${process.env.REACT_APP_API}/${compras[idx].id}`, {
                method: 'DELETE'
            });
            setCompras(compras.filter((val, i) => i !== idx));
        } catch (err) {
            console.log(err);
        }

    }

    let createCompra = (data) => {
        try {
            let nuevoId = 1
            if (compras.length > 0) {
                nuevoId = compras.reduce((acc, curr) => parseInt(acc.id) > parseInt(curr.id) ? acc : curr);
                nuevoId = (parseInt(nuevoId.id) + 1).toString();
            }
            data = { ...data, id: nuevoId };
            fetch(process.env.REACT_APP_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json()).then(dataResponse => {
                setCompras([...compras, dataResponse.data]);
                setShowForm(false);
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
                    <div className='formQ'>
                    <h4 className='display-4 text-center mb-4'>
                    </h4>
                    <FileUpload />
                    </div>
            {<FormCompra onClickFn={createCompra} btnTxt={"Añadir compra"}></FormCompra>}
            
            <div className="grid-container">
                {compras.map((compra, idx) => {
                    return (
                        <Compra key={idx} compra={compra} onClickFn={deleteCompra} idx={idx} btnTxt={"Eliminar"} />
                    );
                })}
            </div>
        </>
    )
}

export default CrearCompra
