
//ErrorHandler for AdminProduct.
function adminProductErrorHandler(req, res) {
    if (error.message.includes("Products manegment failed")) {
        return res.status(400).json({
            message: error.message
        });
    }
    if (error.message.includes("Cast to objId")) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.status(500).json({
        message: error.message
    });
};


//ErrorHandler



//ErrorHandler



//ErrorHandler



//ErrorHandler


module.exports = {
    adminProductErrorHandler,

}