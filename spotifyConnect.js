/*
spotify URI : spotify:track:8f31nf3i1fni
spotify ID: 624j3f3fion
spotify category ID = genre
spotify USER: user of current
spotify URL: link
*/
require('dotenv').config()
const my_client_id = process.env.SPOTIFY_ID;
const scopes = process.env.BOT_OPTION;
const redirect_uri = process.env.REDIRECT_URI;
const client_secret = process.env.SPOTIFY_SECRET;
const options = {
    "access_token": process.env.SPOTIFY_OAUTH,
    "token_type": process.env.TOKEN_TYPE,
    "scope": process.env.SPOTIFY_SCOPE,
    "expires_in": process.env.EXPIRATION,
    "refresh_token": process.env.REFRESH_OAUTH
 };
exports.connect = () => {
    var express = require('express'); // Express web server framework
    var app = express();
    app.use(express.static(__dirname + '/public'));
    console.log('Listening on 8888');
    app.listen(8888);
}


exports.connectFetch = () => {
    //example: GET https://api.spotify.com/v1/tracks/{id}
    fetch('https://api.spotify.com/v1/tracks/{id}', {
        method:'GET',

    })
    .then(res => res.json())
    .then(json)
}
return true;
 /*
 async function connect(){
    try{
        app.get('/login', function(req, res) {
        var scopes = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
        });
    } catch(err){
        return err;
    }
}
*/
 /*
 
 
async function connect() {

    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({data: "Test"}),
        mode: "cors"

    }).then(function(response){
        if (response.ok) {
            return response.json();
        } else{
            throw new Error("Could not reach the Spotify API: " + response.statusText);
        }

    }).then(function(data){
        document.getElementById("encoded").innerHTML = data.encoded;

    }).catch(function(error){
        document.getElementById("error").innerHTML = error.message;

    })
}
*/