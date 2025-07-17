# 👥 Gerenciador de Usuários

Sistema de gerenciamento de usuários desenvolvido com Next.js, integrando tecnologias modernas, interface responsiva e funcionalidades pensadas para uma melhor experiência do usuário.

## ✨ Funcionalidades

- 👤 Listagem de usuários com dados da API JSONPlaceholder
- ➕ Criação de novos usuários
- ✏️ Edição de usuários existentes
- 🔍 Filtro de usuários por nome
- 🗑️ Exclusão de usuários
- 🌓 Tema claro/escuro
- 🔄 Persistência de modificações locais
- 📱 Interface totalmente responsiva

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.4.1** - Framework React com SSR
- **React 19.1.0** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **Shadcn/ui** - Componentes base
- **@tanstack/react-query** - Gerenciamento de estado e cache
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **nuqs** - Para persistência do filtro na url
- **Lucide React** - Ícones
- **Sonner** - Toasts de notificação
- **Biome** - Linting e formatação
- **lenis** - Scroll smooth

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/levigleik/front-end-technical-test-july-2025.git
cd front-end-technical-test-july-2025
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Rotas e páginas
├── components/            # Componentes reutilizáveis
├── config/               # Configurações do projeto
├── lib/                  # Funções utilitárias
├── providers/           # Providers da aplicação
├── services/           # Serviços de API
└── types/             # Tipos TypeScript
```

## 🎯 Funcionalidades Implementadas

### Listagem de Usuários
- Exibição de nome, email e cidade
- Loading state com skeletons
- Tratamento de erros
- Paginação dos resultados

### Gerenciamento de Usuários
- Formulário de criação/edição/exclusão com validação
- Persistência local com React Query com cache de 24h
- Feedback visual com toasts
- Confirmação para ações destrutivas

### UX/UI
- Design responsivo
- Temas claro/escuro
- Feedback visual para todas as ações
- Componentes acessíveis
- Tooltips informativos