/*
spotify URI : spotify:track:8f31nf3i1fni
spotify ID: 624j3f3fion
spotify category ID = genre
spotify USER: user of current
spotify URL: link
*/
const my_client_id = 'Client_ID';
const scopes = 'user-read-private user-read-email';
const redirect_uri = "http://localhost:8888/callback/";
const client_secret = 'Client_Secret'
const opts = {
    "access_token": "NgCXRK...MzYjw",
    "token_type": "Bearer",
    "scope": "user-read-private user-read-email",
    "expires_in": 3600,
    "refresh_token": "NgAagA...Um_SHo"
 };
exports.connect = () => {
    var express = require('express'); // Express web server framework
    var app = express();
    app.use(express.static(__dirname + '/public'));
    console.log('Listening on 8888');
    app.listen(8888);
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
8/
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