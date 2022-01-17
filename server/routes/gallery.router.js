const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require ('../modules/pool');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params.id);
    console.log('likes is', req.params.likes);
    
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     console.log('gallery item', galleryItems);
        
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    let queryText = `
        UPDATE "gallery"
        SET ("likes" = $1 + 1)
        WHERE "id" = $2;
    `;
    let queryParams = [
        req.body.likes,
        galleryId
    ]
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in PUT router side', err);
            res.sendStatus(500);
        })


    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    let queryText = `SELECT * FROM "gallery" ORDER by "id" DESC`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        console.log('ERROR in GET /tasks router', err);
        res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;