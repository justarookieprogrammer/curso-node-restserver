const { response, request} = require('express');


const userGet = (req = request, res= response ) => {

const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

res.json({
    msg: 'get API - Controller',
    q,
    nombre,
    apikey,
    page,
    limit
    });
}

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.status(400).json({
        msg: 'put API - Controller'
    });
}

const userPost =   (req, res = response) => {

    const { nombre, edad }= req.body;

    res.status(201).json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}    

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

  module.exports = {
      userGet,
      userPut,
      userPost,
      userDelete,
      userPatch
  }