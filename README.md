# Instruções para Personalização do Seu Portfólio Estático

Este é um modelo de portfólio estático, pronto para ser personalizado com suas informações e publicado no GitHub Pages.

## Estrutura de Arquivos

```
new_portfolio/
├── css/
│   └── style.css
├── images/
│   └── profile.jpg (adicione suas imagens aqui)
├── js/
│   └── main.js
├── index.html
└── README.md (este arquivo)
```

## Como Personalizar

### 1. Imagens

1.  **Foto de Perfil**: 
    -   Substitua o arquivo `images/profile.jpg` pela sua própria foto.
    -   Recomendação: Use uma imagem quadrada (ex: 500x500 pixels) para melhor adaptação ao círculo.
    -   Formatos suportados: JPG, PNG, WebP.

### 2. Informações Pessoais (no arquivo `index.html`)

Abra o arquivo `index.html` em um editor de texto e procure pelos comentários `<!-- ... -->` que indicam onde você deve fazer as alterações:

1.  **Título da Página**: Altere o texto dentro da tag `<title>`.
    ```html
    <title>Seu Nome | Sua Profissão</title>
    ```

2.  **Logo e Profissão no Cabeçalho**: 
    ```html
    <div class="logo">
        <!-- TEXTO DO LOGO: Altere o nome do portfólio aqui -->
        <span>Seu Nome</span>
        <!-- TEXTO DA PROFISSÃO: Altere a sua profissão aqui -->
        <span class="profession">Sua Profissão</span>
    </div>
    ```

3.  **Links de Navegação**: Altere os textos e os atributos `href` dos links no `<nav>`.
    ```html
    <nav>
        <ul>
            <!-- LINKS DE NAVEGAÇÃO: Altere os links e os textos conforme necessário -->
            <li><a href="#resume">Currículo</a></li>
            <li><a href="#research">Pesquisa</a></li>
            <!-- Adicione ou remova itens conforme necessário -->
        </ul>
    </nav>
    ```

4.  **Nome Principal e Seção "Sobre Mim"**: 
    ```html
    <div class="text-content">
        <!-- NOME PRINCIPAL: Altere o seu nome aqui -->
        <h1>Seu Nome Completo</h1>
        <div class="about-me">
            <h2>Um Pouco Sobre Mim</h2>
            <!-- TEXTO SOBRE MIM: Altere este parágrafo com informações sobre você. -->
            <p>Eu sou um [sua área de atuação] pesquisador(a) trabalhando em [sua instituição]. Antes disso, eu era [sua posição anterior] em [instituição anterior].</p>
            <p>Eu me interesso por [seus interesses de pesquisa], e sou particularmente interessado(a) em aplicações de [suas habilidades/ferramentas] para extrair informações de [seus dados/domínio].</p>
        </div>
        <!-- ... -->
    </div>
    ```

5.  **Botões de Links**: Altere os textos e os atributos `href` dos botões na seção `links-buttons`.
    ```html
    <div class="links-buttons">
        <!-- BOTÕES DE LINKS: Altere os links e os textos conforme necessário -->
        <a href="#" class="button">Currículo</a>
        <a href="#" class="button">Pesquisa</a>
        <!-- Adicione ou remova botões conforme necessário -->
    </div>
    ```

6.  **Rodapé**: Altere o ano e o nome no rodapé.
    ```html
    <footer>
        <div class="container">
            <!-- RODAPÉ: Altere o ano e o nome conforme necessário -->
            <p>&copy; 2023 Seu Nome. Todos os direitos reservados.</p>
        </div>
    </footer>
    ```

### 3. Personalização de Estilo (no arquivo `css/style.css`)

O arquivo `style.css` contém os estilos visuais do site. Você pode alterar cores, fontes, tamanhos e outros aspectos. As seções estão comentadas para facilitar a identificação:

-   **Cores**: Procure por `background-color`, `color`, `border-color` para ajustar as cores.
-   **Fontes**: Altere a propriedade `font-family` no `body` ou em elementos específicos.

### 4. Funcionalidades JavaScript (no arquivo `js/main.js`)

O arquivo `main.js` está vazio, mas você pode adicionar qualquer funcionalidade JavaScript que desejar, como rolagem suave, galerias de imagens, formulários de contato dinâmicos, etc.

## Hospedagem no GitHub Pages

Para hospedar seu portfólio gratuitamente no GitHub Pages:

1.  **Crie um novo repositório** no GitHub (ex: `meu-portfolio`).
2.  **Faça upload** de todos os arquivos e pastas (`css`, `images`, `js`, `index.html`, `README.md`) para este repositório.
3.  Vá para as **Configurações** do seu repositório no GitHub.
4.  Na barra lateral esquerda, clique em **Pages**.
5.  Em "Build and deployment", selecione **Deploy from a branch**.
6.  Em "Branch", selecione a branch principal (geralmente `main` ou `master`) e a pasta `/ (root)`.
7.  Clique em **Save**.

Seu portfólio estará disponível em `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/` (substitua `SEU_USUARIO` e `NOME_DO_REPOSITORIO` pelos seus dados).

## Dicas Adicionais

-   **Validação**: Use ferramentas online para validar seu HTML e CSS e garantir que não há erros.
-   **SEO**: Adicione meta tags relevantes no `<head>` do `index.html` para melhorar a visibilidade do seu site em mecanismos de busca.
-   **Favicon**: Adicione um arquivo `favicon.ico` na raiz do seu projeto e referencie-o no `<head>` do `index.html` para ter um ícone na aba do navegador.

Esperamos que este modelo seja um ótimo ponto de partida para o seu portfólio online!

