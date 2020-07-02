const express = require('express');
const userRoute = express.Router();
const db = require('../server/index');

userRoute.get('/',async (req,res)=>{
    const request = "select * from tuser";
    await db.query(request,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
});

userRoute.get('/:id',async (req,res)=>{
    const request = "select * from tuser where id='"+req.params.id+"'";
    await db.query(request,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
});


userRoute.post('/post',async (req,res)=>{
    let values = {
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: req.body.password
    };

    const request = "INSERT INTO tuser SET ?";
    await db.query(request,values, (err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});


userRoute.put('/put/:id',async (req,res)=>{
    let values = {
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: req.body.password
    };
    const request = "UPDATE tuser SET ? WHERE id='"+req.params.id+"'";
    await db.query(request,values,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
})

module.exports = userRoute;