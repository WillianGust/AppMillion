var Adm = require('../../app/models/adm');

// Spec
describe('Modelo ADM', () => {
  it('Deve retornar o modelo de ADM', () => {
    let adm = Adm;
    expect( adm != undefined).toBe(true);
    expect( adm.id != undefined).toBe(true);
    expect( adm.todos() != undefined).toBe(true);
  });
});