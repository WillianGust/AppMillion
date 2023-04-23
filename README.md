
criar folders app e dentro dele criar os folders controller e models. A view sera removida apara o folder do app

Quando mudar um folder view para outro folder:
1- em app.js verifica codifo app.set e no atributo mude o local para onde foi colocado o folder view.
2- no folder de routes, o index.js. Retire a funcao para adicionar no controler na pasta home_controller que foi criada para receber as acoes.
3- ainda no folder routes, indez.js, ajustar as variaveis e routes para o require para a HomeController. no router.get adicionar a variavel HomeControler.index para chamar a acao.


Criando um novo route
1-cria uma tag a con href route desejada e, nesse caso a tag com atributo target _blank, isso abrira uma outra janela ao clicar no link.
2-ir no routes, index.js e duplicar o route.get e adicionar os parametros da rota desejada
3- no adm_controler ajustar a condica da funcao de render para send, o qual deve passar um array com un hash chave e valor
4- volta para o route e adiciona a variavel AdmControler para um require do caminho o qual deve ser feito
IMPORTANTE, derruba o servidor e restartar de novo, para complicao. Se nao da erro.

Promise async await javascript

Ex. video 03, tiem 30 min ## Nessa caso o Promise e async await far que o codigo va buscar no file as infomacoes para colocar-los em sequencia. Pois a funcao a qual retorna o Promise faz com que isso ocorra na sequencia ordenada

let fs = require('fs');

const lerArquivo = arquivo => {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, 'utf8', (err, contents) => {
      if(err){
        reject(err);
      }
      else{
        resolve(contents);
      }
    })
  });
}

Exemplo Willian

Foi criado um file de nome willian.txt, criado um outro file de nome willian.js. 
Uma busca no de codigo sobre read file node.js feita no google
Adiciona o codigo no file willian.js como descito abaixo
No metodo readfile() adiciona o file que deseja buscar, e claro o console.log() do conteudo (contents) o qual deseja mostrar na tela


var fs = require('fs');
  
// Use fs.readFile() method to read the file
fs.readFile('willian.txt', 'utf8', function(err, contents){
      
    // Display the file content
    console.log(contents);
});

