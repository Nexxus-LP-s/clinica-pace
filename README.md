# PACE na sua Empresa — Landing Page

Landing page B2B da Clínica PACE: site estático, responsivo e sem dependências de build.

## Estrutura

```
pace-site/
├── index.html          # página completa
├── favicon.ico         # favicon (navegadores)
├── site.webmanifest    # ícones para Android / atalho na tela inicial
├── css/
│   └── styles.css      # base, animações, estados e regras responsivas
├── js/
│   └── main.js         # menus hambúrguer e formulários (desktop e celular)
└── assets/
    └── img/            # logos, fotos e ícones (favicon, apple-touch-icon)
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
Os dois formulários (desktop e celular) usam a mesma função. Para conectar, edite o trecho marcado com `TODO` em `js/main.js`. Algumas opções:

- Endpoint próprio / CRM (RD Station, HubSpot, Pipedrive) via `fetch`.
- Serviços sem back-end, como Formspree ou Getform.
- Google Apps Script salvando numa planilha.

## Layouts e breakpoints

A página tem dois blocos de layout no `index.html`:

- `.view-desktop`: desktop e tablet (acima de 640 px), com ajustes progressivos.
- `.view-mobile`: layout dedicado para celular (até 640 px), seguindo a referência mobile do design.

| Largura     | Comportamento                                              |
|-------------|------------------------------------------------------------|
| > 1100 px   | Layout desktop completo (conteúdo centralizado em 1200 px) |
| ≤ 1100 px   | Topo e seção do colaborador empilhados                     |
| ≤ 900 px    | Grids em uma coluna, menu hambúrguer                       |
| ≤ 640 px    | Layout celular dedicado, com menu hambúrguer e tipografia fluida |
| ≤ 374 px    | Ajustes para telas muito estreitas                         |

Tipografia e espaçamentos são fluidos (`clamp()`), acompanhando a largura da tela.

Testado sem rolagem horizontal em 320, 360, 390, 480, 600, 700, 820, 1024 e 1440 px.

Se algum texto for alterado, lembre de alterar nos dois blocos (desktop e celular).

## Observações

- Fonte: Poppins (Google Fonts).
- As animações de rolagem usam CSS scroll-driven animations; em navegadores sem suporte, o conteúdo aparece normalmente.
- Quem ativa "reduzir movimento" no sistema vê a página sem animações.
- Boa parte dos estilos está inline no HTML (herança do arquivo de design). Se o time quiser, dá para migrar para classes no `styles.css` numa etapa de refino.
