const Compra = require("../models/compra");
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

function createCompra(req, res) {
    console.log(req.body);
    let compra = new Compra({
        id: req.body.id,
        empresa: req.body.empresa,
        concepto: req.body.concepto,
        departamento: req.body.departamento,
        monto: req.body.monto,
        logoUrl: req.body.logoUrl,
        fecha: req.body.fecha
    });

    compra.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Compra creada.",
            data: result,
            code: 10
        });
    });

} 

function updateCompra(req, res) {
    let compra_id = req.params.id;
    let data = req.body;
    Compra.findOneAndUpdate({id: compra_id},data, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Compra actualizada.",
            data: result,
            code: 10
        });
    });
}

function getAllCompras(req, res) {
    Compra.find().exec((error, compras) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );

        }
        return res.status(200).json({
            error: false,
            message: "Correcto.",
            data: compras,
            code: 10
        });
    })

}

function deleteCompra(req, res) {
    let compra_id = req.params.id;
    Compra.findOneAndDelete({ id: compra_id }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            }
            );
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Compra eliminada.",
            data: result,
            code: 10
        });
    });
}

module.exports = {
    createCompra,
    updateCompra,
    getAllCompras,
    deleteCompra
};
