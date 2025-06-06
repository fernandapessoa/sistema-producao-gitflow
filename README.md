# 🎓 Sistema de Alunos

Este é um projeto simples de sistema acadêmico que exibe uma lista de alunos carregada a partir de um arquivo JSON. Utiliza HTML, CSS e JavaScript puro (sem frameworks) para apresentar os dados de forma dinâmica e visualmente agradável.

---

## 📁 Estrutura do Projeto

```
.
├── index.html         # Página inicial do sistema
├── alunos.html        # Página com a lista de alunos
├── alunos.json        # Dados dos alunos (formato JSON)
├── script.js          # Código JavaScript para buscar e exibir os dados
└── style.css          # Estilo da interface
```

---

## 🚀 Como Executar

### ✅ Usando o Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code, se ainda não tiver.
2. Abra a **pasta do projeto** no VS Code.
3. Clique com o botão direito no arquivo `index.html` e escolha **"Open with Live Server"**.
4. O navegador será aberto em algo como:

```
http://127.0.0.1:5501/index.html
```

> ✅ Observação: este projeto está configurado para rodar na porta `5501`. Certifique-se de que essa porta está livre.

---

## 👨‍🎓 Exemplo de Dados (`alunos.json`)

```json
[
  {
    "nome": "Ana Souza",
    "curso": "Engenharia de Software",
    "semestre": "5º Semestre"
  },
  {
    "nome": "Carlos Lima",
    "curso": "Sistemas de Informação",
    "semestre": "3º Semestre"
  }
  // ... demais alunos
]
```

---

## 🧠 Funcionalidades

- Leitura de dados via `fetch()` usando JavaScript.
- Renderização dinâmica da lista de alunos.
- Estilo visual limpo e responsivo.
- Código modular e fácil de manter.

---

## 🎨 Estilo da Interface

A interface utiliza `style.css` para estilizar:

- Container centralizado com sombra e bordas arredondadas.
- Lista de alunos com fundo levemente colorido.
- Botão de navegação estilizado com hover.

## 📄 Licença

Este projeto tem fins educacionais e está disponível livremente para estudo, prática e aprendizado.

---
