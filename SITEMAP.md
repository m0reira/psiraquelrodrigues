# Sitemap XML - PSI Raquel Rodrigues

## 📍 Arquivos Criados

- `public/sitemap.xml` - Sitemap principal do site
- `public/robots.txt` - Arquivo robots.txt com referência ao sitemap
- `scripts/update-sitemap.js` - Script para atualização automática

## 🚀 Como Usar

### 1. Acesso Público
Após o build, o sitemap estará disponível em:
- **Sitemap**: `https://psiraquelrodrigues.com.br/sitemap.xml`
- **Robots**: `https://psiraquelrodrigues.com.br/robots.txt`

### 2. Atualização Automática
Para atualizar o sitemap com a data atual:
```bash
npm run update-sitemap
```

### 3. Build e Deploy
O sitemap é automaticamente incluído no build:
```bash
npm run build
```

## 🔍 Google Search Console

### 1. Acesse o Google Search Console
- Vá para [Google Search Console](https://search.google.com/search-console)
- Adicione sua propriedade se ainda não tiver

### 2. Envie o Sitemap
- Na barra lateral, clique em "Sitemaps"
- Adicione: `https://psiraquelrodrigues.com.br/sitemap.xml`
- Clique em "Enviar"

### 3. Monitoramento
- O Google irá processar o sitemap
- Você receberá notificações sobre o status
- Monitore o relatório de cobertura para ver como as páginas estão sendo indexadas

## 📊 Estrutura do Sitemap

| Página | Prioridade | Frequência de Mudança | Descrição |
|--------|------------|----------------------|-----------|
| `/` | 1.0 | Semanal | Página inicial |
| `/sobre` | 0.8 | Mensal | Sobre a psicóloga |
| `/servicos` | 0.8 | Mensal | Serviços oferecidos |
| `/contato` | 0.7 | Mensal | Informações de contato |

## 🔄 Manutenção

### Atualização Manual
1. Edite o arquivo `scripts/update-sitemap.js`
2. Modifique as rotas, prioridades ou frequências
3. Execute `npm run update-sitemap`
4. Faça o build e deploy

### Adicionar Novas Rotas
1. Adicione a nova rota no array `ROUTES` do script
2. Execute o comando de atualização
3. Faça o build e deploy

## 📝 Notas Importantes

- O sitemap é atualizado automaticamente com a data atual
- Todas as rotas principais estão incluídas
- O robots.txt permite indexação completa
- Prioridades seguem padrões SEO recomendados
- Frequências de mudança são realistas para o tipo de conteúdo
