# 🛠️ Configuração de Desenvolvimento

## 📋 Pré-requisitos

### Node.js 22
Este projeto requer **Node.js 22** ou superior.

#### Opção 1: Usando NVM (Recomendado)
```bash
# Instalar nvm (se não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reiniciar terminal e instalar Node.js 22
nvm install 22
nvm use 22

# O projeto tem .nvmrc, então você pode simplesmente usar:
nvm use
```

#### Opção 2: Instalação Direta
Baixe e instale Node.js 22 diretamente do [site oficial](https://nodejs.org/)

## 🚀 Configuração do Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/SEU-USUARIO/psiraquelrodrigues.git
cd psiraquelrodrigues
```

### 2. Use a versão correta do Node.js
```bash
# Se você usa nvm
nvm use

# Verificar versão
node --version  # Deve mostrar v22.x.x
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Execute o projeto em desenvolvimento
```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção na pasta dist/
npm run preview      # Preview do build de produção

# Linting
npm run lint         # Verifica código com ESLint
```

## 🔧 Estrutura do Projeto

```
psiraquelrodrigues/
├── .nvmrc              # Versão do Node.js (22)
├── package.json        # Dependências e engines
├── vite.config.ts      # Configuração do Vite
├── src/
│   ├── routes/         # Páginas do site
│   ├── components/     # Componentes reutilizáveis
│   ├── hooks/          # Custom hooks
│   └── utils/          # Utilitários
├── public/             # Arquivos estáticos
└── .github/
    └── workflows/      # GitHub Actions
```

## 🌐 Tecnologias

- **Node.js 22** - Runtime JavaScript
- **React 18** - Biblioteca para UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Tanstack Router** - Roteamento
- **shadcn/ui** - Componentes UI

## ⚙️ Configurações de Engines

O `package.json` especifica as versões mínimas:
```json
{
  "engines": {
    "node": ">=22.0.0",
    "npm": ">=10.0.0"
  }
}
```

## 🐛 Troubleshooting

### Problema: "node: command not found"
**Solução**: Instale Node.js 22 usando uma das opções acima.

### Problema: Versão incorreta do Node.js
**Solução**:
```bash
nvm use 22
# ou
nvm use  # (usa a versão do .nvmrc)
```

### Problema: Dependências não instalam
**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install
```
