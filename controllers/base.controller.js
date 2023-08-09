module.exports = {
    home,
    about
}

async function home(req, res) {
    try {
        res.render('home');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Home route not working" });
    }
}

async function about(req, res) {
    try {
        res.render('about');
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "About route not working" });
    }
}