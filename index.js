const express = require('express');

const app = express();
const router = express.Router();

router.use('/create-blog', (req, res, next) => {
    res.json({name: "Dede Saepulloh", email: "dedesaepulloh77@gmail.com"});
    next();
})

router.get('/detail-blog', (req, res, next) => {
    res.json({title: "Title Blog"});
    next();
})

app.use('/', router);


app.listen(4000);