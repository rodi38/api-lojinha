# api-lojinha


Api feita utilizando express com typescript,  para rodar o projeto rode os seguintes comandos no terminal respectivamente:
<br>
<code>npm i</code><br><code>npm run dev</code>


# ROTAS

Antes de mais nada, verifique se a api está funcionando com o endereço <code>https://api-lojinha.onrender.com/health</code>

# ROTAS DE GET



getAllProducts: <code>https://api-lojinha.onrender.com/products</code>

Após sucesso retornará todos produtos cadastrados: 

```json
[
    {
      "id": 1,
      "name": "Arroz do Joao 1KG",
      "price": 5.99,
      "description": "arroz branco normal",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    },
    {
      "id": 3,
      "name": "Arroz do marlos 1KG",
      "price": 24.24,
      "description": "arroz branco normal",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    }
  ]
```

getProductsById: <code>https://api-lojinha.onrender.com/products/:id</code>

Retornará isto:

```json
https://api-lojinha.onrender.com/products/3
{
      "id": 3,
      "name": "Arroz do marlos 1KG",
      "price": 24.24,
      "description": "arroz branco normal",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    }

```
# ROTA DE POST

createProduct: <code>https://api-lojinha.onrender.com/products/create</code>

Espera receber um body do tipo: 

```json
{
      "name": "Arroz branco do bom",
      "price": 24.24,
      "description": "arroz branco do bom mesmo",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    }

```
se deu certo retornará um <code>201</code> e uma mensagem de Produto registrado com sucesso!
caso contrário retornará <code>404</code> e uma mensagem de dados inválidos

# ROTA DE PUT

updateProduct:  <code>https://api-lojinha.onrender.com/products/id</code>

```json
https://api-lojinha.onrender.com/products/3
{
      "id": 3,
      "name": "Arroz do marlos 1KG",
      "price": 24.24,
      "description": "arroz branco normal",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    }

```
se deu certo retornará um <code>202</code> e uma mensagem de atualizado com sucesso!
caso contrário retornará <code>404</code> e uma mensagem de Registro não encontrado.

# ROTA DE DELETE

deleteProduct:  <code>https://api-lojinha.onrender.com/products/id</code>

```json
https://api-lojinha.onrender.com/products/3
{
      "id": 3,
      "name": "Arroz do marlos 1KG",
      "price": 24.24,
      "description": "arroz branco normal",
      "imageUrl": "https://superprix.vteximg.com.br/arquivos/ids/177597-600-600/7896332007380_Arroz_Branco_Carreteiro_1kg--1-.png?v=636662139003500000"
    }

```
se deu certo retornará um <code>200</code> e uma mensagem de deletado com sucesso.
caso contrário retornará <code>404</code> e uma mensagem de Registro não encontrado.
