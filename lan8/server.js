#!/bin/env node

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function authorize(credentials, user, callback) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    if (process.env.TOKEN) {
        console.log(process.env.TOKEN);
        try {
            oauth2Client.credentials = JSON.parse(process.env.TOKEN);
            callback(oauth2Client, user);
        } catch(e) {
            oauth2Client.getToken(process.env.TOKEN, function(err, token) {
                if (err) {
                    console.log('Error while trying to retrieve access token', err);
                    return;
                }
                oauth2Client.credentials = token;
                console.log('The TOKEN is:');
                console.log(JSON.stringify(token));
            });
        }
    } else {
        getNewToken(oauth2Client, callback, user);
    }
}

function getNewToken(oauth2Client) {
    var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
}

function register(auth, user) {
    console.log('Registering user :');
    console.log(user);
    var date = new Date();
    date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: '1Jg43veqa67UWNNNBnDZqLnGB7utu_hOAGuFbx_6-P0s',
        range: 'Inscriptions!A2:K',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[user.lastname, user.firstname, user.nickname, user.email, user.lol, user.tm, user.fifa, user.wires, user.station, user.sname, date]]
        }
    }, function (err, response) {
        console.log(err, response);
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
    authorize(JSON.parse(process.env.CLIENT_SECRET), req.body, register);
    res.sendFile(__dirname + '/then.html');
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1", function () {
    console.log('LAN 8.0 website is running !');
});