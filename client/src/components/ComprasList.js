import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';


let ComprasList = () => {
    let [compras, setCompras] = useState([]);

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

    let nothing =()=>{
        console.log("nothing");
    }
    return (
        <>
        <h5 className="titulo">{"Inicio"}</h5>
        <br></br> 
                {compras.map((compra, idx) => {
                    return (
                        <Compra key={idx} compra={compra} onClickFn={nothing} idx={idx} btnTxt={""} />
               
                    );
                })
                }             
        </>
    )
}

export default ComprasList
