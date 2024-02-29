# Projeto Mensagens de Bate-papo em Tempo Real

## Descrição do Projeto

O projeto mensagens de bate-papo em tempo real é uma aplicação desenvolvida para proporcionar uma experiência de conversação instantânea e interativa entre os usuários. Com recursos avançados de mensagens em tempo real e um sistema de amizade completo, este chat oferece uma plataforma de comunicação robusta e eficiente.

## Principais Funcionalidades

- **Mensagens em Tempo Real:** Utilizando o Upstash Redis como banco de dados, oferece mensagens instantâneas em tempo real entre os usuários, garantindo uma comunicação fluida e eficaz.

- **Sistema de Amizade:** Implementação de um sistema completo de amizade, permitindo aos usuários adicionar, aceitar ou recusar solicitações de amizade, promovendo interações sociais significativas.

- **Consultas de Banco de Dados Rápidas:** Aproveita as consultas de banco de dados ultra rápidas com Redis, garantindo uma resposta ágil mesmo em ambientes de alta demanda.

- **Interface Responsiva:** Construída com TailwindCSS, a interface do usuário é altamente responsiva, oferecendo uma experiência consistente em uma variedade de dispositivos e tamanhos de tela.

- **Proteção de Rotas Sensíveis:** Implementa medidas de segurança para proteger rotas sensíveis, garantindo a privacidade e a integridade dos dados dos usuários.

- **Autenticação do Google:** Integração da autenticação do Google para uma experiência de login segura e conveniente.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@headlessui/react`: ^1.7.18
- `@hookform/resolvers`: ^3.3.4
- `@next-auth/upstash-redis-adapter`: ^3.0.4
- `@tailwindcss/forms`: ^0.5.7
- `@upstash/redis`: ^1.28.4
- `axios`: ^1.6.7
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.0
- `date-fns`: ^3.3.1
- `encoding`: ^0.1.13
- `lucide-react`: ^0.331.0
- `nanoid`: ^5.0.6
- `next`: 14.1.0
- `next-auth`: ^4.24.6
- `pusher`: ^5.2.0
- `pusher-js`: ^8.4.0-rc2
- `react`: ^18
- `react-dom`: ^18
- `react-hook-form`: ^7.50.1
- `react-hot-toast`: ^2.4.1
- `react-icons`: ^5.0.1
- `react-textarea-autosize`: ^8.5.3
- `tailwind-merge`: ^2.2.1
- `zod`: ^3.22.4
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.1.0
- `postcss`: ^8
- `tailwindcss`: ^3.3.0
- `typescript`: ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
UPSTASH_REDIS_REST_URL=seu_valor_aqui
UPSTASH_REDIS_REST_TOKEN=seu_valor_aqui
GOOGLE_CLIENT_ID=seu_valor_aqui
GOOGLE_CLIENT_SECRET=seu_valor_aqui
NEXTAUTH_SECRET=seu_valor_aqui
NEXTAUTH_URL=seu_valor_aqui
PUSHER_APP_ID=seu_valor_aqui
NEXT_PUBLIC_PUSHER_APP_KEY=seu_valor_aqui
PUSHER_APP_SECRET=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse o chat em tempo real em `http://localhost:3000` e desfrute de uma experiência de conversa instantânea e interativa com seus amigos e contatos.
