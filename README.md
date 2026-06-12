# Carta romântica para Bianca Borges

Site romântico em HTML, CSS e JavaScript puro, pronto para publicar no GitHub Pages.

## Como trocar as fotos

1. Coloque as imagens dentro da pasta `assets/fotos/`.
2. Use os nomes que já estão no JavaScript: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, `foto4.jpg`, `foto5.jpg` e `foto6.jpg`.
3. Se quiser usar outros nomes ou adicionar mais fotos, edite o array `fotos` no arquivo `script.js`.

Exemplo:

```js
{
  imagem: "assets/fotos/foto7.jpg",
  textoAlternativo: "Descrição da foto",
  mensagem: "Mensagem romântica que aparece ao abrir a foto."
}
```

## Como editar as mensagens

As mensagens das fotos ficam no arquivo `script.js`, dentro do array `fotos`.

A mensagem principal da carta fica no arquivo `index.html`, dentro do bloco:

```html
<article class="letter-card">
```

## Música de fundo

A música é opcional e fica desativada por padrão. Para usar:

1. Adicione um arquivo chamado `musica.mp3` dentro da pasta `assets/`.
2. Abra o site e clique no botão `Tocar música`.

O navegador pode bloquear autoplay, por isso a música só começa quando a pessoa clica no botão.

## Como publicar no GitHub Pages

1. Suba os arquivos para um repositório no GitHub.
2. No GitHub, abra `Settings`.
3. Entre em `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch principal e a pasta `/root`.
6. Salve e aguarde o link do GitHub Pages ficar disponível.

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── fotos/
        └── .gitkeep
```
