const express = require('express');
const router = express.Router();

const House = require('../models/House');

router.get('/', async(req, res) =>{
    const houses = await House.find();//Hace consulta a la BD y la almacena en task
    res.json(houses);// Responde al navegador con la data
   });

router.get('/:id', async(req,res) =>{
   const house = await House.findById(req.params.id);
   res.json(house);
});

router.post('/', async (req,res) =>{//Para comunicarse con el cliente por POST
   const house = new House(req.body);//Se crea una tarea con los datos del request body
   await house.save();//Guarda el objeto creado
   res.json({
       status:'House Saved'//reporta que se guarda el objeto
   });
});

router.put('/:id',async (req,res) => {//método put que pide id del objeto a modificar
   await House.findByIdAndUpdate(req.params.id, req.body);//en el req van los params y el param.
   res.json({
       status: 'House Updated'
   });
});

router.delete('/:id',async (req,res) => {//método delete que pide id del objeto a eliminar
   await House.findByIdAndRemove(req.params.id);//en el req van los params y el param.
   res.json({
       status: 'House Deleted'
   });
});


module.exports = router;//Se exporta el objeto router