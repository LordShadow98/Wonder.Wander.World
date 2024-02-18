const CountryModel = require("../models/Country.js")

async function saveCountry(req, res){
    try{
        const data = req.body;
            const newCountry = new CountryModel({
                code: data.code,
                name: data.name,
                continent: data.continent,
                capital: data.capital,
                language: data.language,
                currency: data.currency,
                flag: data.flag,
                photos: data.photos
            });

        await newCountry.save();

        res.json({message: 'País creado exitosamente'});
    }catch (error){
        console.log("Error al crear país: " + error);
    }
}

async function viewCountry(req, res) {
    try{
        const country = await CountryModel.find();

        res.json({country: country})
    }catch (error){
        console.log("Error al consultar los países: ", error);
    }
}

async function editCountry(req, res) {
    try{
        const {id} = req.params;

        await CountryModel.findByIdAndUpdate(id, req.body);

        res.json({message: "País editado correctamente"})
    }catch (error){
        console.log("Error al editar país: " + error);
    }
}

async function deleteCountry(req, res) {
    try{
        const {id} = req.params;

        await CountryModel.findByIdAndDelete(id);

        res.json({message: "País eliminado exitosamente"})
    }catch (error){
        console.log("Error al eliminar país: " + error);
    }
}

module.exports = {saveCountry, viewCountry, editCountry, deleteCountry};