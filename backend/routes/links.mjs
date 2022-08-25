import express from 'express';
import { nanoid } from 'nanoid';
import Link from '../models/Link.mjs';

const router = express.Router();


router.get('/:shortUrl', async (req, res) => {
    try {
        const links = await Link.findOne({shortUrl:req.params.shortUrl});
        res.status(301).redirect(links.originalUrl);
        if(!links){
            return res.sendStatus(404);
        }
    } catch (e) {
        res.sendStatus(500);
    }
})

router.post('/links', async (req, res) => {
    const body = { shortUrl: nanoid(6), ...req.body};
    if(req.body.originalUrl){
        const link = new Link(body);
        try {
            await link.save();
            res.send(link);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }else{
        const error = {error:"originalUrl is a required field"};
        res.status(404).send(error);
    }  
})

export default router;