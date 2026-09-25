# PACE na sua Empresa — Landing Page

Landing page B2B da Clínica PACE: site estático, responsivo e sem dependências de build.

## Estrutura

```
pace-site/
├── index.html          # página completa
├── css/
│   └── styles.css      # base, animações, estados e regras responsivas
├── js/
│   └── main.js         # menu mobile e envio do formulário
└── assets/
    └── img/            # logos e fotos
```

## Rodando localmente

Basta abrir o `index.html` no navegador. Para testar como servidor:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Publicando no GitHub Pages

1. Suba esta pasta para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em *Source*, escolha a branch `main` e a pasta `/ (root)`.
4. Salve. O site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Formulário (pendente de integração)

O formulário valida os campos e mostra a mensagem de confirmação, mas **ainda não envia os dados**.
Para conectar, edite o trecho marcado com `TODO` em `js/main.js`. Algumas opções:

- Endpoint próprio / CRM (RD Station, HubSpot, Pipedrive) via `fetch`.
- Serviços sem back-end, como Formspree ou Getform.
- Google Apps Script salvando numa planilha.

## Breakpoints

| Largura       | Comportamento                                             |
|---------------|-----------------------------------------------------------|
| > 1100 px     | Layout desktop completo (conteúdo centralizado em 1200 px) |
| ≤ 1100 px     | Hero e seção do colaborador empilhados                    |
| ≤ 900 px      | Grids em uma coluna                                       |
| ≤ 768 px      | Layout mobile + menu hambúrguer                           |
| ≤ 380 px      | Ajustes para telas muito estreitas                        |

## Observações

- Fonte: Poppins (Google Fonts).
- As animações de rolagem usam CSS scroll-driven animations; em navegadores sem suporte, o conteúdo aparece normalmente.
- Quem ativa "reduzir movimento" no sistema vê a página sem animações.
- Boa parte dos estilos está inline no HTML (herança do arquivo de design). Se o time quiser, dá para migrar para classes no `styles.css` numa etapa de refino.
