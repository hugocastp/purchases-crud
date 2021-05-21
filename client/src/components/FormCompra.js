import React, { useState } from 'react'


let FormCompra = ({ onClickFn, btnTxt, initData }) => {
    let [id, setId] = useState(initData ? initData.id : "");
    let [empresa, setEmpresa] = useState(initData ? initData.empresa : "");
    let [concepto, setConcepto] = useState(initData ? initData.concepto : "");
    let [departamento, setDepartamento] = useState(initData ? initData.departamento : "");
    let [monto, setMonto] = useState(initData ? initData.monto : "");
    let [logoUrl, setLogoUrl] = useState(initData ? initData.logoUrl : "");

    let onSubmit = (e) => {
        e.preventDefault();
        if (id === "" ||empresa === "" || concepto === "" || departamento === "" || monto === "" || logoUrl === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = { id: id, empresa: empresa, concepto: concepto, departamento: departamento, monto: monto, logoUrl: logoUrl }
            onClickFn(data);
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="formQ">
                    <label >ID: </label>
                    <input type="number" value={id} onChange={(txt) => setId(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Empresa: </label>
                    <input type="text" value={empresa} onChange={(txt) => setEmpresa(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Concepto: </label>
                    <input type="text" value={concepto} onChange={(txt) => setConcepto(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Departamento: </label>
                    <input type="text" value={departamento} onChange={(txt) => setDepartamento(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Monto: </label>
                    <input type="number" value={monto} onChange={(txt) => setMonto(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Logo: </label>
                    <input type="text" value={logoUrl} onChange={(txt) => setLogoUrl(txt.target.value)} />
                </div>

                <input className="input-btn" type="submit" value={btnTxt} />
            </form>
        </div>
    )
}

export default FormCompra
