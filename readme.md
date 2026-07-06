# 🎱 Bingo Grupo 4 – Transforme-se 130 | SENAC

Projeto desenvolvido como atividade avaliativa da Unidade Curricular 2 (UC2) do curso de Programação do SENAC, utilizando JavaScript e Node.js para implementação de um sistema de Bingo executado via terminal.

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![SENAC](https://img.shields.io/badge/SENAC-UC2-red)
![License](https://img.shields.io/badge/License-Acad%C3%AAmica-blue)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node](https://img.shields.io/badge/Node.js-v24-green?logo=node.js)
![Git](https://img.shields.io/badge/Git-Version_Control-orange?logo=git)

![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/Sabrinabrr/bingo_grupo04_uc2_transforme-se_130_senac)
![GitHub stars](https://img.shields.io/github/stars/Sabrinabrr/bingo_grupo04_uc2_transforme-se_130_senac)

---

## 📋 Sobre o Projeto

O objetivo deste projeto é simular uma partida de bingo tradicional, permitindo:

* Realizar sorteios aleatórios de números;
* Registrar e exibir o histórico de números sorteados;
* Pesquisar se um número já foi chamado;
* Exibir informações e estatísticas da partida;
* Reiniciar o bingo para iniciar uma nova rodada.

O desenvolvimento foi realizado aplicando conceitos fundamentais de programação, tais como:

* Estruturas condicionais;
* Estruturas de repetição;
* Funções;
* Arrays;
* Modularização;
* Organização de projetos Node.js;
* Versionamento com Git e GitHub.

---

## 👥 Integrantes

| Integrante      | Responsabilidade Principal                             |
| --------------- | ------------------------------------------------------ |
| Caio Cesar      | Implementação de funcionalidades, revisão e testes     |
| Carlos Henrique | Menu do projeto e arquitetura                          |
| Eduarda Santana | Implementação de funcionalidades                       |
| Maria Helena    | Implementação de funcionalidades                       |
| Sabrina Barros  | Planejamento e documentação                            |

> Todos os integrantes participaram das etapas de planejamento, desenvolvimento e testes.

---

## 🎯 Funcionalidades

* ✅ Sortear números do bingo
* ✅ Armazenar histórico dos números sorteados
* ✅ Pesquisar se um número já foi chamado
* ✅ Exibir informações da partida
* ✅ Reiniciar uma partida
* ✅ Encerrar o sistema

---

## 📂 Estrutura do Projeto

```text
bingo_grupo04_uc2_transforme-se_130_senac/
│
├── main.js
│
├── db/
│   └── database.js
│
├── functions/
│   ├── mostrarHistorico.js
│   ├── mostrarRegistroSistema.js
│   ├── numerosSorteadosEmOrdem.js
│   ├── pesquisarNumero.js
│   ├── reiniciarBingo.js
│   └── sortearNumeros.js
│
├── docs/
│   ├── proposta.pdf
│   └── fluxograma.png
│
└── README.md
```

---

## ⚙️ Requisitos

Para executar o projeto é necessário possuir:

* Node.js instalado;
* Terminal integrado da IDE ou terminal do sistema operacional;
* Git (opcional, para clonagem do repositório).

---

## 🚀 Instalação do Node.js

### Windows

1. Acesse: https://nodejs.org
2. Baixe a versão **LTS**.
3. Execute o instalador.
4. Verifique a instalação:

```bash
node -v
npm -v
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install nodejs npm
```

Verifique:

```bash
node -v
npm -v
```

---

## ▶️ Executando o Projeto

Clone o repositório:

```bash
git clone https://github.com/Sabrinabrr/bingo_grupo04_uc2_transforme-se_130_senac.git
```

Entre na pasta:

```bash
cd bingo_grupo04_uc2_transforme-se_130_senac
```

Execute o sistema:

```bash
node main.js
```

---

## 🎮 Menu do Sistema

| Opção | Descrição                          |
| ----- | ---------------------------------- |
| 1     | Sortear números                    |
| 2     | Mostrar histórico                  |
| 3     | Pesquisar número                   |
| 4     | Mostrar registro do sistema        |
| 5     | Reiniciar bingo                    |
| 6     | Mostrar números sorteados em ordem |
| 0     | Encerrar programa                  |

---

## 🧠 Regras de Negócio

* O bingo utiliza números de **1 a 75**;
* Um número não pode ser sorteado mais de uma vez;
* Todos os números sorteados são armazenados em histórico;
* O sistema mantém registro do último número sorteado;
* É possível reiniciar completamente uma partida.

---

## 🛠️ Tecnologias Utilizadas

* JavaScript
* Node.js
* Git
* GitHub

---

## 📚 Documentação

A documentação complementar do projeto encontra-se na pasta:

```text
docs/
├── proposta.pdf
└── fluxograma.png

```

---

## 🔀 Estratégia de Versionamento

Fluxo adotado pela equipe:

1. Clone do repositório;
2. Desenvolvimento da funcionalidade;
3. Commit descritivo;
4. Push para a branch main;
5. Revisão da feature pelo responsável.

Exemplo:

```bash
git commit -m "implementar sorteio de números"
```

---

## 📈 Melhorias Futuras

* Persistência em arquivo JSON;
* Geração automática de cartelas;
* Estatísticas avançadas;
* Histórico de partidas;
* Sistema multiplayer;
* Exportação de resultados.

---

## 📄 Licença

Este projeto possui finalidade exclusivamente acadêmica e educacional.

---

## 🏫 Instituição

**Serviço Nacional de Aprendizagem Comercial (SENAC)**

Projeto desenvolvido para fins de avaliação da Unidade Curricular 2 do projeto Transforme-se.