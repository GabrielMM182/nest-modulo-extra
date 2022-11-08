-> (baixar o CLI do nest) npm i @nestjs/cli

-> nest new <> criar um novo projeto em nest

-> main.ts = é o arquivo principal em que vai ter o modulo principal *AppModule* (tipo angular)

@module vai seguir o padrão do angular com a mesma estrutura (**controller, module e service**)

## CRIAR CONTROLLER MODULE SERVICE E CLASS 

nest generate module/controller/module <nome>

## INJECAO DE INDEPENDENCIA 

-> é feito no **service** em que o **controller** vai receber

## ENDPOINT

-> nos vamos fazer o endpoint (router.js) no proprio arquivo de controller e seu caminho e tambem alinhar as rotas

-> Definimos o statuCode com @HttpCode() podemos definir atraves  HttpStatus.<OQ VAI RECEBER> ou o numero direto 201, 204....

-> na hora que criamos o nome do nosso ocntroller podemos definir o **Res** e **Req**

## SERVICOS

-> isolar a logica do controller e deixando la para poder utilizar outras vezes

-> vamos definir no controller esse service 

-> no caso vamos usar por exemplo para trabalhar em memoria 

-> vamos definir seus atributos/ entidade por boas praticas no typescript 

-> montamos toda a logica dentro do service.ts e depois colocamos no controller 

## TRATAMENTO DE ERROS 

-> vmaos usar para tratar os erros

-> throw new HttpException() 
-> junto com HttpStatus.<NOT_FOUND BAD_REQUEST...>

https://docs.nestjs.com/exception-filters#throwing-standard-exceptions

## MODULOS 

-> definimos um modulo para ser chamado no appModule para ser chamado um por um e não baguncar todos no *imports*