const axios = require("axios");

async  function isAgriculturalCompany(siret) {
    try {
        console.log(siret)
        // Interroger l'API gouvernementale pour obtenir des informations sur l'entreprise avec le SIRET spécifié
        const response = await axios.get(`https://api.government.fake/company-info?siret=${siret}`);
        const data = response.data;
        console.log(data)

        // Vérifier si l'entreprise est agricole
        if (data && data.isAgricultural) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Erreur lors de la vérification de l'entreprise agricole:", error);
        return false;
    }
}

module.exports = {
    isAgriculturalCompany
}