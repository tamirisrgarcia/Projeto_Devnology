const router = require('express').Router()
const Article = require('../models/Article');

//Create - criando artigos
router.post('/', async (req, res) => {

    const { title, url } = req.body

    if (!title) {
        res.status(422).json({ message: "O título é obrigatório" })
        return
    }

    if (!url) {
        res.status(422).json({ message: "A URL é obrigatória" })
        return
    }

    const article = {
        title,
        url,
    }

    try {
        await Article.create(article)

        res.status(201).json({ message: "Artigo inserido no sistema com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Read - leitura dos artigos
router.get('/', async (req, res) => {
    try {
        const article = await Article.find();
        res.status(200).json(article)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Read - filtrar por id
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const article = await Article.findOne({ _id: id });

        if (!article) {
            res.status(422).json({ message: "Artigo não encontrado" })
            return
        }

        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Update - atualização de dados
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const article = await Article.findOne({ _id: id });

        if (!article) {
            res.status(422).json({ message: "Artigo não encontrado" })
            return
        }

        article.title = req.body.title
        article.url = req.body.url

        await Article.updateOne({ _id: id }, article);
        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Delete - deletar artigos
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const article = await Article.findOne({ _id: id });

        if (!article) {
            res.status(422).json({ message: "Artigo não encontrado" })
            return
        }

        await Article.deleteOne({ _id: id });
        res.status(200).json({ message: "Artigo deletado com sucesso" });

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router