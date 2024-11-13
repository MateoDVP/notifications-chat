const express = require('express');

async function serviceTemplate(texto, spaceName) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await chat.spaces.messages.create({
                parent: `spaces/${spaceName}`,
                requestBody: {
                    text: texto,
                },
            });
            resolve(response)
        } catch (error) {
            console.error('Error al enviar el mensaje:', error.message);
        }
    })
}

module.exports = {
    serviceTemplate
}