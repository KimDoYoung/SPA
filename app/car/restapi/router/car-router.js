import express  from 'express';
const router = express.Router();

// router.get('/', async function(req, res, next){
//     res.send('router OK');
// });
router.get('/',  (req, res, next) => {
    res.send('router OK');
});

export default router;