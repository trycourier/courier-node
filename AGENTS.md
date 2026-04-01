# Courier Node.js SDK

Courier is a notifications API for sending messages across email, SMS, push, in-app inbox, Slack, and WhatsApp from a single API call.

## Setup

```ts
import Courier from '@trycourier/courier';

const client = new Courier(); // reads COURIER_API_KEY from env
```

## Core pattern

```ts
const response = await client.send.message({
  message: {
    to: { user_id: 'user_123' },
    template: 'TEMPLATE_ID',
    data: { order_id: '456' },
    routing: { method: 'single', channels: ['email', 'sms'] },
  },
});

console.log(response.requestId);
```

## Key rules

- Use `routing.method: "single"` (fallback chain) unless the user explicitly asks for parallel delivery (`"all"`).
- Use `client.profiles.create()` for partial profile updates (it merges). Use `client.profiles.replace()` only when fully replacing all profile data.
- Test and production use different API keys from the same workspace. Always confirm which environment before sending.
- For transactional sends (OTP, orders, billing), pass an `Idempotency-Key` header via request options to prevent duplicates.
- Bulk sends are a 3-step flow: `client.bulk.create()` → `client.bulk.addUsers()` → `client.bulk.run()`.
- `requestId` from a single-recipient send doubles as the `message_id`. For multi-recipient sends, each recipient gets a unique `message_id`.

## Concepts

- `template` — notification template ID from the Courier dashboard
- `routing.method` — `"single"` = try channels in order until one succeeds; `"all"` = send on every channel simultaneously
- `tenant_id` — multi-tenant context; affects brand and preference defaults for the message
- `list_id` — send to all subscribers of a named list
- `to.email` / `to.phone_number` — ad-hoc recipient (no stored profile needed)
- `to.user_id` — registered user whose profile has channel addresses

## More context

- Full docs index: https://www.courier.com/docs/llms.txt
- API reference: https://www.courier.com/docs/reference/get-started
- MCP server: https://mcp.courier.com
- Courier Skills (Cursor / Claude Code): https://github.com/trycourier/courier-skills
