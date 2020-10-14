const express = require('express');
const { use } = require('passport');
const passport = require('passport')

// Create a router container
const user = express.Router()

// importing User Schema
const User = require('./models/user');

// register page
user.get('/register', (req, res) => {
    res.render('register.html');    
});

// register function
user.post('/register', (req, res) => {
    User.register(new User ({
        email: req.body.email
    }), req.body.password, function (err, user) {
        if (err) {
            return res.render('register.html', {
                info: "Sorry, Email already exists. Try again."});
        }
        var authenticationURL = 'http://localhost:5000/verify?authToken=' + user.authToken;
        sendgrid.send({
            to:       account.email,
            from:     'emailauth@yourdomain.com',
            subject:  'Confirm your email',
            html:     '<a target=_blank href=\"' + authenticationURL + '\">Confirm your email</a>'
            }, function(err, json) {
            if (err) { return console.error(err); }
    
            res.redirect('/email-verification');
        });
    });
});

// verify page
user.get('/verify', (req, res) => {
    User.verifyEmail(req.query.authToken, function (err, existingAuthToken) {
        if (err) {
            console.log('err', err);
        } else {
            res.render('email-verification', {
                title: 'Email verified successfully!'
            });
        }
    });
});   

// login page
user.get('/login', (req, res) => {
    res.render('login.html');
});

// unauthorized function
user.get('/unauthorized', (req, res) => {
    res.render('index.html', {
        info: "Unauthorized"
    });
});

// TODO: login function
user.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/unauthorized'
}));

// logout function
user.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})


// export module
module.exports = user