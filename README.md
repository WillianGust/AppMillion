module 5, video 02.

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