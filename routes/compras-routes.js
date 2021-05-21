let express = require("express")
let router = express.Router();
let comprasController = require("../controllers/compras-controller");


router.get("/", comprasController.getAllCompras);
router.post("/", comprasController.createCompra);
router.put("/:id", comprasController.updateCompra);
router.delete("/:id", comprasController.deleteCompra);

module.exports = router;