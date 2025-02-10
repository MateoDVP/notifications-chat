const express = require('express');
const { google } = require('googleapis');


const SCOPES = ['https://www.googleapis.com/auth/chat.bot'];
const credentials = require("../../turing-citizen-446721-a1-cd973c19833e.json");

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
});

const chat = google.chat({
    version: 'v1',
    auth,
});

async function SendMsgChat(texto, spaceID) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await chat.spaces.messages.create({
                parent: `spaces/${spaceID}`,
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
    SendMsgChat
}