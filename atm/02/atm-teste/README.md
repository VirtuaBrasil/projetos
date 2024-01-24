# Nome do Projeto: Caixa Eletrônico
    
![Exemplo de usuário](/public/readme/img.png)

## Descrição

Este projeto simula um caixa eletrônico, permitindo que os usuários realizem saques virtuais. Ele utiliza Vue 2 no frontend e Node.js com Express e MongoDB no backend. Os usuários podem inserir o valor do saque e receber uma representação visual das notas dispensadas.

## Características

- Saque de dinheiro virtual com representação visual das notas.
- Sistema de conta com saldo, identificado por e-mail.
- Frontend construído com Vue 2 e Bootstrap para uma interface responsiva.
- Backend em Node.js com Express, integrado ao MongoDB para gerenciamento de dados.

## Instruções de Instalação

Para rodar este projeto, você precisará ter Node.js, npm e MongoDB instalados em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DeElfos/atm-teste.git
   ```

2. **Instale as dependências:**
   ```bash
   cd atm-teste
   npm install
   ```

3. **Configure o MongoDB:**
    - Crie um arquivo `.env` na raiz do projeto. Podem ser usados os valores padrão do arquivo `.env.example`.
    - Certifique-se de que o MongoDB está rodando em sua máquina ou configurado devidamente na web.
    - Caso seja o primeiro uso do banco de dados, crie uma coleção chamada `users`.
    - É necessário ter pelo menos um usuário cadastrado para usar o caixa eletrônico, somente emails cadastrados irão funcionar, caso contrário irá mostrar uma mensagem de erro.
    - O campo `balance` representa o saldo do usuário, e deve ser um número inteiro maior ou igual a zero porém não é necessário preencher esse campo, pois ele será preenchido automaticamente após a primeira transação.
    - O campo `email` representa o email do usuário, e deve ser um email válido.
    - Um exemplo de usuário pode ser visto na imagem abaixo:
    ![Exemplo de usuário](/public/readme/user_table_mongo.png)

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

5. **Acesse a aplicação:**
    - Abra seu navegador e acesse `http://localhost:3000`.

## Uso

Para usar o caixa eletrônico:

1. Insira seu e-mail no campo apropriado.
2. Digite o valor que deseja sacar.
3. Clique em "Sacar" para ver as notas sendo dispensadas.

## Contribuições

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/MinhaFuncionalidadeIncrível`).
3. Faça commit de suas mudanças (`git commit -m 'Add some MinhaFuncionalidadeIncrível'`).
4. Faça push para a branch (`git push origin feature/MinhaFuncionalidadeIncrível`).
5. Abra um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Marcos Filho - santosefilhomarcos@gmail.com

---
