const express = require('express');
const Aluno = require('./alunoModel');
const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll();
    res.send(alunos);
})

router.get('/:id', async (req, res) => {
    const alunos = await Aluno.findByPk(req.params.id);
    res.send(alunos);
})

router.get('/matricula/:matricula', async (req, res) => {
    const aluno = await Aluno.findOne({
        where: {
            matricula: req.params.matricula
        }
    })
    res.send(aluno);
})

router.post('/', async (req, res) => { //cria e salva
    let aluno = await Aluno.create(req.body);
    res.send(aluno);
})

router.put('/:id', async (req, res) => { //atualiza
    let aluno = await Aluno.findByPk(req.params.id);
    if(aluno){
        aluno.nome = req.body.nome;
        aluno.data_nascimento = req.body.data_nascimento;
        aluno.email_institucional = req.body.email_institucional;
        
        aluno = await aluno.save(aluno);
    }
    res.send(aluno);
})

router.delete('/:id', async (req, res) => { //deleta
    let aluno = await Aluno.findByPk(req.params.id);
    aluno.destroy();

    res.status(204).send();
})

module.exports = router;