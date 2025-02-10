const axios = require("axios");
const { EXCHANGE_URL } = process.env

const ChatService = require('../services/ChatService')

async function getExchangeRate(req, res) {
    try {
        const response = await axios.get(EXCHANGE_URL)
        if (response.error) {
            return res.json({ success: false, rates: 'No data' })
        }
        else {
            console.log("getExchangeRate ~ response:", response.data.rates.COP)
            return res.json({ success: true, rates: response.data.rates });
        }
    } catch (error) {
        console.log("🚀 ~ getExchangeRate ~ error:", error)
    }
}


async function getRateToSend(req, res) {
    try {
        const response = await axios.get(EXCHANGE_URL)
        if (!response.data || !response.data.rates) {
            return res.json({ success: false, message: "No se pudo obtener la tasa de cambio" });
        }

        let RateCOP = response.data.rate.COP
        if (RateCOP) {
            const notification = await ChatService.SendMsgChat(RateCOP); //Enviar la notificación a GoogleChat
            return res.json({ success: true, message: "Notificación enviada correctamente" });
        } else {
            return res.json({ success: false, message: "No se encontró la tasa de COP en la respuesta" });
        }

    } catch (error) {
        console.error("Error en getRateToSend:", error.message);
        return res.status(500).json({
            success: false,
            message: "Error interno al obtener la tasa de cambio",
            error: error.message,
        });
    }

}



module.exports = {
    getExchangeRate,
    getRateToSend
}