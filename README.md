# Azapfy Hero Journey
Boas vindas à Azapfy Hero Journey, o site onde o usuário pode selecionar dois heróis e ver quem vence a batalha!

## Objetivos:

O objetivo é desenvolver uma aplicação web que abrace a temática de heróis e, ao mesmo tempo, permita que o usuário busque heróis, selecione-os e compare quem é mais forte.

## Como rodar a aplicação no computador:

#### Seu computador precisa de Git (para versionamento do código), Node.js & npm (para executar a aplicação). Clique nos links, caso ainda não tenha instalado algum desses:

 - [ ] [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 - [ ] [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Instalando a aplicação:

1. Primeiro, abra um novo terminal e clone o repositório utilizando o comando 
`git clone git@github.com:DanielDaher/azapfy-hero-journey.git`

2. Em seguida, digite `cd azapfy-hero-journey` para entrar no diretório (pasta) do projeto, que acabou de ser criada.

3. Instale as dependências com `npm install`

4. Crie um arquivo com o nome `.env` e coloque as seguintes variáveis (uma por linha):
  `NEXT_PUBLIC_API_URL=http://homologacao3.azapfy.com.br/api/ps/metahumans`
 Salve as modificações!

5. Ao término da etapa anterior, rode no terminal `npm run dev`. Isto pode demorar alguns segundos, aguarde até que o terminal te informe `Local: http://localhost:3000`. Então você pode clicar nesta url ou abrir seu navegador e digitar http://localhost:3000.

6. E agora é só desfrutar do site!

## Como usar o site?

O site exibe, incialmente, uma tela de loading, enquanto as informações são buscadas da API.

Em seguida, a tela apresentará um input de busca e diversos cards com personagens. O usuário pode selecionar dois, o que abrirá um modal comparando ambos e mostrando quem é mais forte.

Para selecionar outros personagens, basta fechar o modal clicando em qualquer espaço vago da tela.

Existe um alert na tela que passa informações ao usuário, ensinando-o a usar a aplicação.