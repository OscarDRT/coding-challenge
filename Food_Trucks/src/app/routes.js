module.exports = (app, passport) => {

    //home view
    app.get('/', (req, res) => {
		res.render('index');
    });
    
    //login view
    app.get('/login', (req, res) => {
		res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    // send the user's data and validate if they exist
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/map',
		failureRedirect: '/login',
		failureFlash: true // allow flash messages
    }));

    //signup view
    app.get('/signup', (req, res) => {
		res.render('signup', {
            message: req.flash('signupMessage')
        });
    });

    // sends the data registered by the user
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/map',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
    }));

    //map view
	app.get('/map', isLoggedIn, (req, res) => {
		res.render('map', {
			user: req.user
		});
    });
    
    // close of session 
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    
};

// checks if a user is authenticated 
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
	    return next();
    }
    res.redirect('/');
}