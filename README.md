# Site da Psicóloga Raquel Rodrigues

Um site profissional moderno e responsivo para a psicóloga Raquel Rodrigues, desenvolvido com React, TypeScript, Tailwind CSS, shadcn/ui e TanStack Router.

## 🌟 Características

- **Design Moderno**: Interface clean e profissional com gradientes suaves e tipografia elegante
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Navegação Fluida**: TanStack Router para navegação client-side sem recarregamento
- **Foco em Atendimento Online**: Prioriza videochamadas e consultas virtuais
- **Integração WhatsApp**: Botão flutuante e links diretos para WhatsApp Business
- **Analytics Integrado**: Rastreamento de interações e conversões do WhatsApp
- **SEO Avançado**: Meta tags dinâmicas focadas em "psicologia online", structured data, sitemap, robots.txt e breadcrumbs
- **Open Graph**: Otimizado para compartilhamento em redes sociais
- **Acessibilidade**: Componentes acessíveis e semântica HTML adequada

## 🛠️ Tecnologias Utilizadas

- **Node.js 22** - Runtime JavaScript
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e servidor de desenvolvimento
- **TanStack Router** - Roteamento moderno para React
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Lucide React** - Ícones SVG modernos

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- **Node.js 22** ou superior
- **npm** (vem com Node.js)

### Configuração Local
```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/psiraquelrodrigues.git
cd psiraquelrodrigues

# Use Node.js 22 (se você usa nvm)
nvm use

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

> 📖 **Mais detalhes**: Veja [DEVELOPMENT.md](./DEVELOPMENT.md) para instruções completas de desenvolvimento.

## 📱 Páginas Incluídas

### 🏠 Página Inicial
- Hero section com call-to-action
- Prévia dos serviços oferecidos
- Seção sobre a psicóloga
- Informações de contato e horários

### 👩‍⚕️ Sobre
- Biografia profissional detalhada
- Formação acadêmica e especialização
- Experiência profissional
- Abordagem terapêutica

### 🩺 Serviços
- Terapia Individual (R$ 150/sessão)
- Terapia de Casal (R$ 200/sessão)
- Desenvolvimento Pessoal (R$ 130/sessão)
- Modalidades: Presencial e Online
- Processo terapêutico detalhado
- Horários de atendimento

### 📞 Contato
- Formulário de contato funcional
- Informações completas de contato
- Ações rápidas (telefone, WhatsApp, e-mail)
- FAQ com perguntas frequentes
- Localização do consultório

## 📱 Integração WhatsApp

### Funcionalidades do WhatsApp
- **Botão Flutuante**: Sempre visível no canto inferior direito
- **Mensagens Pré-definidas**: Opções rápidas para diferentes tipos de consulta
- **Analytics Avançado**: Rastreamento de interações e conversões
- **Múltiplas Fontes**: Botões específicos em cada página
- **Número Atualizado**: (21) 96955-3695

### Tipos de Mensagem Disponíveis
1. **Agendamento**: Mensagens específicas para cada tipo de terapia
2. **Informações**: Solicitações de detalhes sobre serviços
3. **Emergência**: Atendimento urgente
4. **Personalizada**: Mensagem livre do usuário

### Analytics do WhatsApp
- Rastreamento local no localStorage
- Integração com Google Analytics (quando disponível)
- Integração com Facebook Pixel (quando disponível)
- Estatísticas por serviço e fonte de origem

## 🔍 SEO e Performance

### Otimizações de SEO Implementadas
- **Meta Tags Dinâmicas**: Título, descrição e palavras-chave específicas para cada página
- **Structured Data (Schema.org)**: Markup completo para psicóloga, organização e serviços
- **Open Graph Tags**: Otimizado para Facebook, LinkedIn e outras redes sociais
- **Twitter Cards**: Cards otimizados para compartilhamento no Twitter
- **Sitemap.xml**: Mapa do site para indexação pelos motores de busca
- **Robots.txt**: Diretrizes para crawlers de busca
- **Breadcrumbs**: Navegação estruturada com Schema.org
- **Canonical URLs**: URLs canônicas para evitar conteúdo duplicado
- **Geo Tags**: Localização geográfica para busca local
- **Business Schema**: Informações estruturadas do negócio

### Páginas Otimizadas
- **Início**: "Raquel Rodrigues - Psicóloga Online | Terapia Existencial-Humanista RJ"
- **Sobre**: "Sobre Raquel Rodrigues - Psicóloga Online Especialista em Existencial-Humanista | Rio de Janeiro"
- **Serviços**: "Psicologia Online | Terapia Individual, Casal por Videochamada - RJ"
- **Contato**: "Agende sua Consulta Online | Psicóloga Raquel Rodrigues RJ"

### Performance
- **Preconnect**: Links de pré-conexão para recursos externos
- **Favicon Otimizado**: SVG responsivo e leve
- **Lazy Loading**: Carregamento otimizado de componentes
- **Cache Headers**: Configurações de cache para melhor performance

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd psiraquelrodrigues
```

2. Instale as dependências:
```bash
npm install
```

3. Gere as rotas do TanStack Router:
```bash
npx @tanstack/router-cli generate
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse o site em: `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter ESLint

## 🎨 Personalização

### Cores e Tema
As cores principais do tema estão definidas em `src/index.css` e podem ser facilmente customizadas:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Azul principal */
  --secondary: 210 40% 96%;      /* Cinza claro */
  /* ... outras variáveis CSS */
}
```

### Informações de Contato
Para personalizar as informações de contato, edite os seguintes arquivos:
- `src/routes/__root.tsx` - Header e footer
- `src/routes/contato.tsx` - Página de contato
- `src/routes/index.tsx` - Página inicial

### Conteúdo
Todo o conteúdo do site pode ser facilmente modificado editando os arquivos das páginas em `src/routes/`.

## 📱 Responsividade

O site foi desenvolvido com mobile-first design e é totalmente responsivo:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading de componentes
- Otimização de imagens
- CSS minificado
- JavaScript tree-shaking
- Caching otimizado

## 🔒 Segurança

- Validação de formulários
- Sanitização de inputs
- HTTPS ready
- Headers de segurança configurados

## 📈 SEO

- Meta tags otimizadas
- Schema.org markup
- Sitemap.xml
- URLs amigáveis
- Open Graph tags

## 🌐 Deploy

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o comando de build: `npm run build`
3. Defina a pasta de publicação: `dist`

### Vercel
1. Conecte seu repositório ao Vercel
2. O deploy será automático com as configurações padrão

### Hospedagem tradicional
1. Execute `npm run build`
2. Faça upload da pasta `dist` para seu servidor
3. Configure o servidor para servir o arquivo `index.html` para todas as rotas

## 📄 Licença

Este projeto foi desenvolvido para uso específico da Psicóloga Raquel Rodrigues.

## 👥 Contribuição

Para sugestões de melhorias ou correções, entre em contato através dos canais disponíveis no site.

---

**Desenvolvido com ❤️ para cuidar da saúde mental**
