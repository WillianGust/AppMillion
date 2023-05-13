const request = require("request-promise");
const host = "http://localhost:3000";

describe("AdmController", () => {
  describe("GET /adm.json - deve retornar uam lista de administradores", () => {
    it("deve retornar o status de 200", (done)=> {

      request(`${host}/adm.json`).then(dado);
      console.log('===================================================');
      console.log(dado);
      console.log('===================================================');

      request.get(host + "/adm.json", (error, response, body) => {
        if(response === undefined){
          console.log("Nao foi possivel localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
        }
        done();
      });
    });

    it("deve retornar os dados na API", (done)=> {
      request.get(host + "/adm.json", (error, response, body) => {
        if(response === undefined){
          console.log("Nao foi possivel localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.body).toBe([
            {
            id: 1, 
            nome: "Willian",
            senha: "123456",
          },
          {
            id: 2, 
            nome: "Silva",
            senha: "123456789",
          },
          {
            id: 3, 
            nome: "Gugu",
            senha: "12345678910",
          }
        ]);
        }
        done();
      });
    });
  });
});



describe('Adm controller', () => {
  it('Deve retornar uma lista de Adms, controller', function() {
    
    expect(dados != undefined).toBe(true);
  });
});