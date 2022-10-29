const router = require('express').Router();
const Cliente = require('../models/Cliente');

router.post('/', async (req, res) => {
    const {nome, sobreNome} = req.body;

    const cliente = {
        nome, 
        sobreNome
    };

    if(!nome){
        res.status(422).json({message: 'O nome é obrigatório!'})
        return;
    }

    try {
        await Cliente.create(cliente);
        res.status(200).json({});
    } catch(error) {
        res.status(500).json({error: error})
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);        
    } catch(error) {
        res.status(500).json({error: error});
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const cliente = await Cliente.findOne({_id: id});
        if(!cliente){
            res.status(422).json({});
            return;
        }
        res.status(200).json(cliente);               
    } catch(error) {
        res.status(500).json({error: error});
    }
})

router.put('/:id', async(req, res) => {
    const {nome, sobreNome} = req.body;
    const cliente = {
        nome, 
        sobreNome
    };

    try {
        await Cliente.updateOne(cliente);
        res.status(200).json(cliente);

    } catch(error) {
        res.status(500).json({error: error});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
   
    try {
        await Cliente.deleteOne({_id: id});
        res.status(200).json({});
    } catch(error) {
        res.status(500).json({error: error});
    }
});

module.exports = router;

