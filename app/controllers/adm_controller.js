const AdmControler = {
  index: function(req, res, next) {
    res.send([{id: 1, nome: "Willian"}]);
  }
}

module.exports = AdmControler;