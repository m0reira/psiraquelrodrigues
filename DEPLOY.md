# 🚀 Deploy no GitHub Pages

## 📋 Pré-requisitos

1. **Node.js 22+** instalado localmente
2. **Repositório no GitHub** com o código do projeto
3. **GitHub Actions** habilitado no repositório
4. **GitHub Pages** configurado nas configurações do repositório

## 🔧 Configurações Necessárias

### 1. **Node.js 22** ✅ (Já configurado)
O projeto está configurado para usar Node.js 22:
- **`.nvmrc`**: Especifica Node.js 22 para o projeto
- **`package.json`**: Engines especificam Node.js >=22.0.0
- **GitHub Actions**: Configurado para usar Node.js 22

Para usar localmente:
```bash
# Se você usa nvm
nvm use

# Ou instale Node.js 22 diretamente
# https://nodejs.org/
```

### 2. **Configuração do Vite** ✅ (Já configurado)
O arquivo `vite.config.ts` já está configurado com:
```typescript
base: '/psiraquelrodrigues/',
```
> **⚠️ Importante**: Substitua `psiraquelrodrigues` pelo nome exato do seu repositório no GitHub.

### 3. **GitHub Actions Workflow** ✅ (Já criado)
O arquivo `.github/workflows/deploy.yml` foi criado e irá:
- **Verificar tipos** com TypeScript (`npm run typecheck`)
- **Verificar código** com ESLint (`npm run lint`)
- Fazer build automático quando você fizer push na branch `main`
- Fazer deploy automático para o GitHub Pages
- Usar o diretório `dist/` como fonte dos arquivos

> ⚠️ **Importante**: O deploy só acontecerá se **todas as verificações passarem** (types + lint + build).

## 🎯 Passos para Deploy

### 1. **Ajustar o nome do repositório**
No arquivo `vite.config.ts`, linha 14, altere para o nome correto do seu repositório:
```typescript
base: '/SEU-NOME-DO-REPOSITORIO/',
```

### 2. **Push para o GitHub**
```bash
git add .
git commit -m "feat: add GitHub Pages deployment"
git push origin main
```

### 3. **Configurar GitHub Pages**
1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. Salve as configurações

### 4. **Aguardar o Deploy**
- O GitHub Actions irá executar automaticamente
- Você pode acompanhar o progresso na aba **Actions** do repositório
- Quando concluído, seu site estará disponível em:
  ```
  https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
  ```

## 📁 Arquivos Importantes para o Deploy

### ✅ **Arquivos já configurados:**
- `vite.config.ts` - Configuração do build
- `.github/workflows/deploy.yml` - Workflow do GitHub Actions
- `package.json` - Scripts de build
- `.gitignore` - Ignora arquivos desnecessários

### 📦 **Diretório de Build:**
- **Fonte**: `dist/` (criado pelo comando `npm run build`)
- **Deploy**: GitHub Pages usa este diretório automaticamente

## 🔄 Atualizações Futuras

Para atualizar o site:
1. Faça suas alterações no código
2. Commit e push para a branch `main`
3. O GitHub Actions fará o deploy automaticamente

## 🐛 Troubleshooting

### **Problema**: Site não carrega corretamente
**Solução**: Verifique se o `base` no `vite.config.ts` está correto com o nome do repositório.

### **Problema**: GitHub Actions falha
**Solução**: Verifique se o GitHub Pages está configurado para usar "GitHub Actions" como source.

### **Problema**: 404 ao navegar nas páginas
**Solução**: O Tanstack Router já está configurado para SPA. Se necessário, adicione um arquivo `404.html` que redireciona para `index.html`.

### **Problema**: GitHub Actions falha na verificação de tipos ou lint
**Solução**: Execute localmente antes de fazer push:
```bash
# Verificar tipos
npm run typecheck

# Verificar lint
npm run lint

# Verificar ambos em sequência
npm run typecheck && npm run lint

# Corrigir problemas e tentar novamente
git add .
git commit -m "fix: corrigir erros de lint/types"
git push
```

## 🌐 URL Final

Seu site ficará disponível em:
```
https://SEU-USUARIO.github.io/psiraquelrodrigues/
```

> **💡 Dica**: Substitua `SEU-USUARIO` pelo seu username do GitHub e `psiraquelrodrigues` pelo nome real do repositório.
