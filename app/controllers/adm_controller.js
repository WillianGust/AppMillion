const { request } = require('express');
var Adm = require('../models/adm');
const TOKEN = "1234567890" // In URL browser put adm.json?token=TOKEN, to get API,

const AdmControler = {
  index: (req, res, next) => {
    if(req.headers.token == TOKEN){
      Adm.find().then(dado => res.send(dado));
    }
    else{
      res.status(401).send({ error: "Acesso negado a API, token invalido" });
    }
    // Adm.find()
    //   .then(dado => res.send(dado))
    //   .catch(error => res.send(error));
  },
  create: (req, res, next) => {
    const adm = new Adm({ nome: req.body.nome, senha: req.body.senha, email: req.body.email });
    adm.save()
      .then(() => res.send({}, 201))
      .catch(error => res.send(error, 401));
  },
  
    change: (req, res, next) => {
      Adm.find({_id: req.params.adm_id})
        .then(dado => {
          if (dado.length > 0) {
            adm = dado[0];
            adm.nome = req.body.nome;
            adm.senha = req.body.senha;
            adm.email = req.body.email;
            return adm.save();
          } else {
            throw new Error('Administrador não encontrado');
          }
        })
        .then(() => res.status(200).send({}))
        .catch(error => res.status(401).send(error.message));
  },

  delete: (req, res, next) => {
    Adm.findByIdAndDelete(req.params.adm_id)
      .then(dado => {
        if (dado) {
          res.status(204).send({});
        } else {
          throw new Error('Administrador não encontrado');
        }
      })
      .catch(error => res.status(401).send(error.message));
  }
};

module.exports = AdmControler;