# Escola de Música Santa Cecília — Sistema administrativo

Código completo com paleta preta, grafite, amarelo-ouro e vermelho e logomarca da escola.

## Enviar ao GitHub

1. Extraia o ZIP.
2. Crie um repositório, preferencialmente privado.
3. Envie o conteúdo extraído para a raiz do repositório. Preserve as pastas, incluindo .openai.
4. Confirme a presença de package.json, package-lock.json, app/, lib/, db/, drizzle/, public/, worker/, scripts/ e vendor/.

Pelo Git, dentro da pasta extraída:

    git init
    git add .
    git commit -m "Sistema administrativo Santa Cecilia"
    git branch -M main
    git remote add origin URL_DO_SEU_REPOSITORIO
    git push -u origin main

Substitua URL_DO_SEU_REPOSITORIO pelo endereço do repositório criado.
Envie os arquivos extraídos, não apenas o ZIP.

## Hospedagem

**GitHub armazena o código. GitHub Pages sozinho não executa este sistema.**
Há servidor, autenticação, banco de dados e armazenamento de arquivos.
A entrada da interface está em app/page.tsx e o painel em app/dashboard.tsx.
Não existe index.html independente: a aplicação é compilada a partir do código.

Versão hospedada: https://santa-cecilia-gestao.zanypier4.chatgpt.site

A instalação usa autenticação gerenciada pelo ChatGPT Sites, banco Cloudflare D1 (binding DB) e armazenamento R2 (binding BUCKET).
Os endpoints de entrada/saída e os cabeçalhos de identidade são fornecidos pela plataforma.
O identificador em .openai/hosting.json referencia a instalação existente; não é senha.

Enviar esta cópia para um novo repositório GitHub não conecta automaticamente esse repositório à hospedagem existente.
Para hospedar fora do ChatGPT Sites, é necessário adaptar a autenticação e configurar o banco e o armazenamento.
Não exponha diretamente um servidor que confie em cabeçalhos de identidade enviados pelo visitante: esses cabeçalhos precisam vir de um gateway confiável que autentique a conta.
A primeira conta autorizada a acessar a instalação privada torna-se administradora.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior e npm. Projeto verificado com Node.js 24.

    npm ci
    npm run build
    node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_chubby_magdalene.sql
    npm run dev

Aplique a migração uma única vez em banco local vazio.
O modo de desenvolvimento utiliza uma identidade de prévia e deve ser usado apenas localmente.
O build de produção exige autenticação real.

Verificações:

    npx tsc --noEmit
    node --experimental-strip-types scripts/domain.test.mjs
    npm run build

## Funcionalidades

- Administradores com permissões iguais para Aldemar e Samuel.
- Perfil de professor/colaborador com autorização no servidor.
- Abertura, fechamento, divulgação diária e planejamento semanal.
- Dois reels por mês, com aprovação ou solicitação de ajustes.
- Relatórios de alunos, caixa e instituição a cada 14 dias.
- PDFs até 10 MB e MP4 até 50 MB; reels também aceitam links HTTPS.
- Cadastro de alunos e conferência de movimentações financeiras.
- Fixo de R$ 600, repasse inicial de 50% e gratificações separados.
- Metas por novos alunos com primeiro recebimento aprovado no mês.
- Comunicação interna, solicitações, projetos e indicadores mensais.
- Histórico das alterações e exportação de registros em JSON.

Confirme os horários, a data inicial e os combinados nas configurações.
Ainda é necessário cadastrar e autorizar os e-mails de Samuel e do colaborador.
Os pagamentos em atraso anteriores ao sistema não foram inventados nem cadastrados.

## Estrutura

- app/dashboard.tsx: painel e formulários.
- app/globals.css: tema e responsividade.
- app/api/: registros, equipe e arquivos.
- app/chatgpt-auth.ts: autenticação da plataforma.
- lib/server.ts: autorização e validações.
- lib/domain.ts: agenda recorrente.
- db/schema.ts e drizzle/: banco e migrações.
- public/logo.png: logomarca.
- scripts/ e worker/: compilação e execução.

## Conteúdo desta entrega

Código correspondente ao commit b8aba425823ba0967a6adc369eb644f4e8ed55fe, com este README adaptado.
Não inclui senhas, tokens, node_modules, histórico Git, bancos locais, dados de alunos, movimentações reais ou arquivos enviados.
Dados e anexos permanecem na hospedagem e não são transferidos neste ZIP.
