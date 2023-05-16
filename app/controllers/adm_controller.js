// var Adm = require('../models/adm');


// const AdmControler = {
//   index: (req, res, next) => {
//     Adm.find().then(dado => res.send(dado));
    
//         res.send(dado);
//     const adm = new Adm({nome: 'Willian', senha: '123456', email: 'willian@gmail.com'});
//     adm.save(error => {
//       if(error){
//       res.send(error);
//         return
//       }
//       Adm.find().then(dado => {
//         res.send(dado);
//       });
//     });
//   }
// }

// module.exports = AdmControler;


// GPT second

// const Adm = require('../models/adm');

// const AdmController = {
//   index: async (req, res, next) => {
//     try {
//       const dados = await Adm.find();
//       res.send(dados);

//       const adm = new Adm({ nome: 'Willian', senha: '123456', email: 'williansilva@gmail.com' });
//       await adm.save();

//       const novosDados = await Adm.find();
//       res.send(novosDados); // Removido o res.send(dados) duplicado
//     } catch (error) {
//       res.send(error);
//     }
//   }
// };

// module.exports = AdmController;

// GPT Refatored
const Adm = require('../models/adm');

const AdmController = {
  index: async (req, res, next) => {
    try {
      const adm = new Adm({ nome: 'Willian', senha: '123456', email: 'silva.willian@gmail.com' });
      await adm.save();

      const dados = await Adm.find();
      res.send(dados);
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports = AdmController;