var Adm = require('../models/adm');


const AdmControler = {
  index: (req, res, next) => {
    Adm.find().then(dado => res.send(dado));
    
    //     res.send(dado);
    // const adm = new Adm({nome: 'Willian', senha: '123456', email: 'willian@gmail.com'});
    // adm.save(error => {
    //   if(error){
    //   res.send(error);
    //     return
    //   }
    //   Adm.find().then(dado => {
    //     res.send(dado);
    //   });
    // });
  }
}

module.exports = AdmControler;