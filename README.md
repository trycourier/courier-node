<!-- AUTO-GENERATED-OVERVIEW:START — Do not edit this section. It is synced from mintlify-docs. -->
# Courier Node.js SDK

The Courier Node.js SDK provides typed access to the Courier REST API from server-side TypeScript or JavaScript. Use it to send notifications, manage user profiles, check message status, issue JWT tokens for client-side SDKs, and more.

## Installation

```bash
npm install @trycourier/courier
```

Also available via `yarn add @trycourier/courier` and `pnpm add @trycourier/courier`.

Requires Node.js 20+ (LTS). Also works in Deno 1.28+, Bun 1.0+, Cloudflare Workers, and Vercel Edge Runtime.

## Quick Start

```ts
import Courier from '@trycourier/courier';

const client = new Courier();

const response = await client.send.message({
  message: {
    to: { email: 'you@example.com' },
    content: {
      title: 'Hello from Courier!',
      body: 'Your first notification, sent with the Node.js SDK.',
    },
  },
});

console.log(response.requestId);
```

The client reads `COURIER_API_KEY` from your environment automatically. You can also pass it explicitly: `new Courier({ apiKey: 'your-key' })`.

## Common Operations

```ts
// Check message delivery status
const message = await client.messages.retrieve('message-id');
console.log(message.status);

// Create or update a user profile
await client.profiles.create('user_123', {
  profile: { email: 'jane@example.com', name: 'Jane Doe' },
});

// Issue a JWT for client-side SDK auth
const { token } = await client.auth.issueToken({
  scope: 'user_id:user_123 inbox:read:messages inbox:write:events',
  expires_in: '2 days',
});
```

## Documentation

Full documentation: **[courier.com/docs/sdk-libraries/node](https://www.courier.com/docs/sdk-libraries/node/)**

- [Quickstart](https://www.courier.com/docs/getting-started/quickstart/)
- [Send API](https://www.courier.com/docs/platform/sending/send-message/)
- [API Reference](https://www.courier.com/docs/reference/get-started/)
<!-- AUTO-GENERATED-OVERVIEW:END -->
