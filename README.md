# API de Prestadores de Serviço

## Alunos
- Matheus Gabriel da Silva
- Larissa Hoffmann de Souza

## Descrição
Este projeto implementa uma API REST para gerenciamento de prestadores de serviço. A API permite realizar operações CRUD (Create, Read, Update, Delete) em relação a serviços, prestadores e categorias.

Antes de executar o programa, é necessário garantir que o Node.js esteja instalado na máquina. Caso não esteja, é possível fazer o download e a instalação a partir do site oficial do Node.js.

Além disso, para garantir o correto funcionamento da API, é necessário ter restaurado o arquivo contendo o backup do banco de dados que foi enviado para o professor.

## Pré-requisitos
Antes de executar o programa, é necessário garantir que o Node.js esteja instalado na máquina. Caso não esteja, é possível fazer o download e a instalação a partir do site oficial do Node.js.

## Instalação e Execução
1. Certifique-se de que o MySQL esteja instalado e rodando em sua máquina. O programa foi desenvolvido considerando a configuração padrão do MySQL, com o banco de dados sendo executado no localhost e o usuário root.

2. Baixe o código-fonte.

3. Abra um terminal ou prompt de comando e navegue até o diretório do projeto.

4. Execute o seguinte comando para instalar as dependências necessárias do projeto:
```
   npm install
```

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor:
```
   node server.js
```
6. O servidor será iniciado e estará pronto para receber requisições aos endpoints da API.

## Autenticação
Antes de consumir os endpoints da API, é necessário obter um token de autenticação. Para isso, envie uma requisição POST para o endpoint `/login` com o seguinte corpo da requisição: 
```json
{
    "user": "adm",
    "pwd": "adm"
}
```
A resposta da requisição conterá um token de acesso. Adicione esse token no header das requisições subsequentes como `x-access-token` para ter acesso aos recursos protegidos.

## Rotas da Aplicação

### Serviços

- [GET] /servico
  - Descrição: Retorna a lista de todos os serviços cadastrados.

- [POST] /servico
  - Descrição: Cria um novo serviço no banco de dados.

- [PUT] /servico/:id
  - Descrição: Atualiza as informações de um serviço específico com base no seu ID.

- [DELETE] /servico/:id
  - Descrição: Exclui um serviço específico com base no seu ID.

### Prestadores

- [GET] /prestador
  - Descrição: Retorna a lista de todos os prestadores de serviço cadastrados.

- [GET] /prestadorByCat/:idCategoria
  - Descrição: Retorna a lista de prestadores de serviço filtrados por uma categoria específica com base no ID da categoria.

- [GET] /prestadorBySer/:idServico
  - Descrição: Retorna a lista de prestadores de serviço filtrados por um serviço específico com base no ID do serviço.

- [POST] /prestador
  - Descrição: Cria um novo prestador de serviço no banco de dados.

- [PUT] /prestador/:id
  - Descrição: Atualiza as informações de um prestador de serviço específico com base no seu ID.

- [DELETE] /prestador/:id
  - Descrição: Exclui um prestador de serviço específico com base no seu ID.

### Categorias

- [GET] /categoria
  - Descrição: Retorna a lista de todas as categorias cadastradas.

- [POST] /categoria
  - Descrição: Cria uma nova categoria no banco de dados.

- [PUT] /categoria/:id
  - Descrição: Atualiza as informações de uma categoria específica com base no seu ID.

- [DELETE] /categoria/:id
  - Descrição: Exclui uma categoria específica com base no seu ID.

**Observação:** Lembre-se de incluir o token de autenticação (obtido no endpoint `/login`) no header das requisições como `x-access-token` para acessar corretamente os recursos protegidos pela API.
