#!/bin/bash


curl http://localhost:7777/ -H application/json -X POST -d  '{ "user" : "habdig7" } '
















curl --header "Content-Type: application/json" -X PATCH --data '{   "id": "e23025fd-b206-46e0-9a07-2fc7ad1f0029",  "data_nascimento": "2006-07-05",   "descricao": "hoje é  meu aniversario",   "email": "habdig7@gmail.com",   "senha": "6pTvi6JcdZLvjCE",   "idade": 17,   "nome": "Mateus Felipe",   "sexo": false,   "sobrenome": "Silveira Vieira" }' http://127.0.0.1:7777/usuarios



