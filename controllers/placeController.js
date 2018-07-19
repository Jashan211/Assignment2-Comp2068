exports.homePage = (req, res) => {
    res.render('index', 
    { 
        title: 'Home', 
        user: req.user, 
    });
};

