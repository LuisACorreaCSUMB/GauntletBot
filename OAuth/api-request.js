/*
spotify URI : spotify:track:8f31nf3i1fni
spotify ID: 624j3f3fion
spotify category ID = genre
spotify USER: user of current
spotify URL: link
*/
const passport = require('passport'); 
const express = require('express'); // Express web server framework
const SpotifyStrategy = require('passport-spotify').Strategy;

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

passport.use(
    new SpotifyStrategy(
        {
        clientID: process.env.SPOTIFY_ID,
        clientSecret: process.env.SPOTIFY_SECRET,
        callbackURL: 'http://localhost:8888/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
        User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
            return done(err, user);
        });
        }
    )
);

exports.connect = () => {
    var app = express();
    //app.use(express.static(__dirname + '/public'));
    app.get('/auth/spotify', passport.authenticate('spotify'), function(req,res){

    });
    app.get('/auth/spotify/callback',passport.authenticate('spotify',{failureRedirect:'/login'}),
    function(req,res){
        res.redirect('/');
    });
    console.log('Listening on 8888');
    console.log(`${clientID}`);
    app.listen(8888);
}
