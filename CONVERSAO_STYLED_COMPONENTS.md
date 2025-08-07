# Conversão para Styled Components - EBAC Jobs

## Resumo das Alterações

Este projeto foi convertido de CSS Modules para **Styled Components** conforme solicitado no exercício.

### Componentes Convertidos:

1. **Cabeçalho** (`src/components/Cabecalho/`)

   - Removido: `Cabecalho.module.css`
   - Adicionado: `styles.ts` com `HeaderContainer`

2. **Formulário** (`src/components/FormVagas/`)

   - Removido: `FormVagas.module.css`
   - Adicionado: `styles.ts` com `FormContainer`, `SearchField`, `SearchButton`

3. **Herói** (`src/components/Hero/`)

   - Removido: `Hero.module.css`
   - Adicionado: `styles.ts` com `HeroContainer`, `HeroTitle`

4. **Componente Vaga** (`src/components/Vaga/`)

   - Removido: `Vaga.module.css`
   - Adicionado: `styles.ts` com `VagaContainer`, `VagaTitle`, `VagaLink`

5. **Lista de Vagas** (`src/containers/ListaVagas/`)
   - Removido: `ListaVagas.module.css`
   - Adicionado: `styles.ts` com `VagasList`

### Arquivos Adicionados:

- `src/styles/theme.ts` - Tema centralizado com cores, fontes e breakpoints
- `src/styles/GlobalStyles.ts` - Estilos globais e componente Container

### Principais Mudanças:

1. **Tema Centralizado**: Todas as variáveis CSS foram movidas para um objeto tema
2. **ThemeProvider**: Adicionado no App.tsx para fornecer o tema para todos os componentes
3. **Estilos Globais**: Convertidos para `createGlobalStyle` do styled-components
4. **Responsividade**: Mantida usando media queries nos styled components

### Dependências Adicionadas:

- `styled-components`
- `@types/styled-components` (dev dependency)

### Como Executar:

```bash
npm install
npm start
```

### Observações:

- A funcionalidade da aplicação permanece a mesma
- Todos os estilos foram preservados
- A estrutura de componentes foi mantida
- O projeto agora usa CSS-in-JS com Styled Components

### Estrutura de Arquivos Styled Components:

Cada componente agora tem um arquivo `styles.ts` que contém todos os styled components relacionados, seguindo a convenção:

```
ComponentName/
├── index.tsx
└── styles.ts
```

Isso facilita a manutenção e organização dos estilos.
