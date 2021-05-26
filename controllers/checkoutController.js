const path = require("path");


const checkoutController = {

    groupSize:  (req,res) => {
        res.sendFile(path.resolve("./views/groupSize.html"))
    },
    experiencePackage:  (req,res) => {
        res.sendFile(path.resolve("./views/experiencePackage.html"))
    },
    foodPackage:  (req,res) => {
        res.sendFile(path.resolve("./views/foodPackage.html"))
    },
    selectDate:  (req,res) => {
        res.sendFile(path.resolve("./views/selectDate.html"))
    },
    confirmation:  (req,res) => {
        res.sendFile(path.resolve("./views/confirmation.html"))
    },
    summary:  (req,res) => {
        res.sendFile(path.resolve("./views/summary.html"))

    },
    createAccount: (req,res) => {
        res.sendFile(path.resolve("./views/createAccount.html"))

    },


}


module.exports= checkoutController