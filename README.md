[![Courier: Your Complete Communication Stack](https://marketing-assets-public.s3.us-west-1.amazonaws.com/github_nodejs.png)](https://courier.com)

[![npm version](https://badge.fury.io/js/%40trycourier%2Fcourier.svg)](https://badge.fury.io/js/%40trycourier%2Fcourier)

This is the official node.js module for sending notifications with node.js with the [Courier](https://courier.com) REST API.

[Courier docs](https://docs.courier.com/docs) • [3 Different Ways To Send Emails With Node.js](https://www.courier.com/blog/how-to-send-emails-with-node-js?utm_campaign=General-Content-Distribution&utm_source=github&utm_medium=node-sdk)

## Installation (via [npm](https://www.npmjs.com/package/@trycourier/courier))

```bash
npm install @trycourier/courier
```

## Requirements

You will need to get a Courier API key to get started. You can sign up and create one for free at [courier.com](https://courier.com).

## Upgrade Guides

### v3 to v4

v4 uses native fetch client to make requests or falls back to a polyfill if the client doesn't exist in the environment it's running in. Check [Error Handling](#Error-Handling) out.

## Getting Started

```javascript
const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" }); // get from the Courier UI

// Example: send a basic message to an email recipient
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Marty",
      },
      email: "marty_mcfly@email.com",
    },
    content: {
      title: "Back to the Future",
      body: "Oh my {{name}}, we need 1.21 Gigawatts!",
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});

// Example: send a basic message to an sms recipient
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Jenny",
      },
      phone_number: "8675309",
    },
    content: {
      title: "Back to the Future",
      body: "Oh my {{name}}, we need 1.21 Gigawatts!",
    },
    routing: {
      method: "single",
      channels: ["sms"],
    },
  },
});

// Example: send a message to various recipients
const { requestId } = await courier.send({
  message: {
    to: [
      {
        user_id: "<USER_ID>", // usually your system's User ID associated to a Courier profile
        email: "test@email.com",
        data: {
          name: "some user's name",
        },
      },
      {
        email: "marty@email.com",
        data: {
          name: "Marty",
        },
      },
      {
        email: "doc_brown@email.com",
        data: {
          name: "Doc",
        },
      },
      {
        phone_number: "8675309",
        data: {
          name: "Jenny",
        },
      },
    ],
    content: {
      title: "Back to the Future",
      body: "Oh my {{name}}, we need 1.21 Gigawatts!",
    },
    routing: {
      method: "all",
      channels: ["sms", "email"],
    },
  },
});

// Example: send a message supporting email & SMS
const { requestId } = await courier.send({
  message: {
    template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
    to: {
      user_Id: "<USER_ID>", // usually your system's User ID
      email: "example@example.com",
      phone_number: "555-228-3890",
    },
    data: {}, // optional variables for merging into templates
  },
});

// Example: send a message to a list
const { requestId } = await courier.send({
  message: {
    template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
    to: {
      list_id: "<LIST_ID>", // e.g. your Courier List Id
    },
    data: {}, // optional variables for merging into templates
  },
});

// Example: send a message to a pattern
const { requestId } = await courier.send({
  message: {
    template: "<TEMPLATE_OR_EVENT_ID>", // get from the Courier UI
    to: {
      list_pattern: "<PATTERN>", // e.g. example.list.*
    },
    data: {}, // optional variables for merging into templates
  },
});

// Example: send a message to a list, pattern and user
const { requestId } = await courier.send({
  message: {
    to: [
      {
        list_pattern: "<PATTERN>", // e.g. example.list.*
      },
      {
        list_id: "<LIST_ID>", // e.g. your Courier List Id
      },
      {
        email: "test@email.com"
      }
    ]
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});

// Example: send a basic message that expires after the specified timeout
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Marty",
      },
      email: "marty_mcfly@email.com",
    },
    content: {
      title: "Back to the Future",
      body: "Oh my {{name}}, we need 1.21 Gigawatts!",
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
    timeout: {
      message: 3600000 // 1 hour in milliseconds
    },
  },
});

// Example: send a basic message with a trace id
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Marty",
      },
      email: "marty_mcfly@email.com",
    },
    content: {
      title: "Back to the Future",
      body: "Oh my {{name}}, we need 1.21 Gigawatts!",
    },
    routing: {
      method: "single",
      channels: ["email"],
    },
    metadata: {
      trace_id: "ravenclaw-for-the-win"
    },
  },
});
```

## Environment Variables

`courier-node` supports credential storage in environment variables. If no `authorizationToken` is provided when instantiating the Courier client (e.g., `const courier = CourierClient();`), the value in the `COURIER_AUTH_TOKEN` env var will be used.

If you need to use a base url other than the default https://api.courier.com, you can set it using the `COURIER_BASE_URL` env var.

## Advanced Usage

```javascript
const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" });

async function run() {
  // Example: send a message
  const { requestId } = await courier.send({
    message: {
      template: "<TEMPLATE_OR_EVENT_ID>",
      to: {
        // optional
        user_id: "<RECIPIENT_ID>",
      },
      data: {}, // optional
      brand_id: "<BRAND_ID>", //optional
      routing: {},
      channels: {}, // optional
      providers: {}, // optional
    },
  });
  console.log(requestId);

  // Example: send message with utm metadata
  const { requestId } = await courier.send({
    message: {
      template: "<TEMPLATE_OR_EVENT_ID>",
      to: {...},
      routing: {
        method: "single",
        channels: ["email"],
      },
      channels: {
        email: {
          routing_method: "all",
          providers: ["sendgrid", "sns"],
          metadata: {
            utm: {
              medium: "f",
              campaign: "g",
            },
          },
        },
      },
      providers: {
        sns: {
          metadata: {
            utm: {
              medium: "h",
            },
          },
        },
      }, // optional
      metadata: {
        utm: {
          source: "a",
          medium: "b",
          campaign: "c",
        },
      },
      timeout: {
        message: 300000,
        channel: {
          email: 1000 // 1 second
        }
      }
    },
  });

/**
 * If the template or content contains any action blocks, the hyperlinks will be augmented with utm compliant query parameters.
 *
 * The resulting link of an action block sent through sendgrid would be:
 * www.example.com?utm_source=a&utm_medium=f&utm_campaign=g
 *
 * While the resulting link of an action block sent through sns would be:
 * www.example.com?utm_source=a&utm_medium=h&utm_campaign=g
 *
 * Notice that provider metadata supersedes channel metadata and channel metadata supersedes message metadata
 *
 **/

/**
 * If the message includes a timeout property we will start timing out messages after the first attempt.
 * We are able to timeout complete channels or specific providers.
 **/

  // Example: get a message status
  const messageStatus = await courier.getMessage(requestId);
  console.log(messageStatus);

  // Example: get a message history
  const { results } = await courier.getMessageHistory(requestId);
  console.log(results);

  // Example: get a message output
  const { results } = await courier.getMessageOutput(requestId);
  console.log(results);

  // Example: get all messages
  const { paging, results } = await courier.getMessages();
  console.log(results);

  // Example: replace a recipient's profile
  const { status: replaceStatus } = await courier.replaceProfile({
    recipientId: "<RECIPIENT_ID>",
    profile: {
      email: "example@example.com",
    },
  });
  console.log(replaceStatus);

  // Example: merge into a recipient's profile
  const { status: mergeStatus } = await courier.mergeProfile({
    recipientId: "<RECIPIENT_ID>",
    profile: {
      sms: "555-555-5555",
    },
  });
  console.log(mergeStatus);

  // Example: get a recipient's profile
  const { profile } = await courier.getProfile({
    recipientId: "<RECIPIENT_ID>",
  });
  console.log(profile);

  // Example: get all brands
  const { paging, results } = await courier.getBrands({
    cursor: "<CURSOR>", // optional
  });
  console.log(results);

  // Example: get a specific brand
  const brand = await courier.getBrand("<BRAND_ID>");
  console.log(brand);

  // Example: create a brand
  const newBrand = await courier.createBrand({
    name: "My Brand",
    settings: {
      colors: {
        primary: "#0000FF",
        secondary: "#FF0000",
        tertiary: "#00FF00",
      },
    },
  });
  console.log(newBrand);

  // Example: replace a brand
  const replacedBrand = await courier.replaceBrand({
    id: "<BRAND_ID>",
    name: "My New Brand",
    settings: {
      color: {
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#0000FF",
      },
    },
  });
  console.log(replacedBrand);

  // Example: delete a brand
  await courier.deleteBrand("<BRAND_ID>");

  // Example: get all lists
  const { paging, items } = await courier.lists.list({
    cursor: "<CURSOR>", // optional
  });
  console.log(items);

  // Example: get a specific list
  const list = await courier.lists.get("<LIST_ID>");
  console.log(list);

  // Example: create or replace a list
  const replacedList = await courier.lists.put("<LIST_ID>", {
    name: "My New List",
  });
  console.log(replacedList);

  // Example: delete a list
  await courier.lists.delete("<LIST_ID>");

  // Example: restore a list
  await courier.lists.restore("<LIST_ID>");

  // Example: get a list's subscriptions
  const { paging, items } = await courier.lists.getSubscriptions("<LIST_ID>");
  console.log(items);

  // Example: replace many recipients to a new or existing list
  await courier.lists.putSubscriptions("<LIST_ID>", [
    { recipientId: "RECIPIENT_ID_1" },
    { recipientId: "RECIPIENT_ID_2" },
  ]);

  // Example: subscribe single recipient to a new or existing list
  const { recipient } = courier.lists.subscribe("<LIST_ID>", "<RECIPIENT_ID>");
  console.log(recipient);

  // Example: unsubscribe recipient from list
  await courier.lists.unsubscribe("<LIST_ID>", "<RECIPIENT_ID>");

  // Example: get a recipient's subscribed lists
  const { paging, items } = await courier.lists.findByRecipientId(
    "<RECIPIENT_ID>"
  );
  console.log(items);

  // Example: Automation Ad-Hoc Invoke
  const { runId } = await courier.automations.invokeAdHocAutomation({
    automation: {
      cancelation_token: "I_AM_TOKEN",
      steps: [
        {
          action: "send",
        },
      ],
    },
    brand: "BRAND_ID",
    data: {
      example: "EXAMPLE_DATA",
    },
    profile: {
      email: "foo@bar.com",
    },
    recipient: "RECIPIENT_ID",
    template: "TEMPLATE_NAME_OR_ID",
  });
  console.log(runId);

  // Example: Automation Invoke Template
  const { runId } = await courier.automations.invokeAutomationTemplate({
    templateId: "AUTOMATION_TEMPLATE_ID",
    brand: "BRAND_ID",
    data: {
      example: "EXAMPLE_DATA",
    },
    profile: {
      email: "foo@bar.com",
    },
    recipient: "RECIPIENT_ID",
    template: "TEMPLATE_NAME_OR_ID",
  });
  console.log(runId);

  // Example: List notifications
  const { paging, results } = await courier.notifications.list({});
  console.log(results);

  // Example: Get notification content
  const { blocks, channels } = await courier.notifications.getContent(
    "notification1"
  );
  console.log(blocks);
  console.log(channels);

  // Example: Get notification draft content
  const { blocks, channels } = await courier.notifications.getDraftContent(
    "notification1"
  );
  console.log(blocks);
  console.log(channels);

  // Example: Post notification variations
  await courier.notifications.postVariations("notification1", {
    blocks: [
      {
        id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
        type: "text",
        locales: {
          fr_FR: "block fr 1",
        },
      },
      {
        id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
        type: "text",
        locales: {
          fr_FR: "block fr 2",
        },
      },
    ],
    channels: [
      {
        id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
        type: "email",
        locales: {
          fr_FR: {
            subject: "French Subject",
          },
        },
      },
      {
        id: "channel_2c2aad1c-30f0-4a55-8d8f-d213f32147bc",
        type: "push",
        locales: {
          fr_FR: {
            title: "French Title",
          },
        },
      },
    ],
  });

  // Example: Post notification draft variations
  await courier.notifications.postDraftVariations("notification1", {
    blocks: [
      {
        id: "block_1d4c32e0-bca8-43f6-b5d5-8c043199bce6",
        type: "text",
        locales: {
          fr_FR: "block fr 1",
        },
      },
      {
        id: "block_6d50a6e3-ecc3-4815-bf51-0202c6bf54e2",
        type: "text",
        locales: {
          fr_FR: "block fr 2",
        },
      },
    ],
    channels: [
      {
        id: "channel_1ba46024-f156-4ed7-893b-cb1cdcfbd36e",
        type: "email",
        locales: {
          fr_FR: {
            subject: "French Subject",
          },
        },
      },
      {
        id: "channel_2c2aad1c-30f0-4a55-8d8f-d213f32147bc",
        type: "push",
        locales: {
          fr_FR: {
            title: "French Title",
          },
        },
      },
    ],
  });

  // Example: Get notification submission checks
  const { checks } = await courier.notifications.getSubmissionChecks(
    "notification1",
    "submission1"
  );
  console.log(checks);

  // Example: Put notification submission checks
  const { checks } = await courier.notifications.putSubmissionChecks(
    "notification1",
    "submission1",
    {
      checks: [
        {
          id: "check1",
          status: "RESOLVED",
          type: "custom",
        },
      ],
    }
  );
  console.log(checks);

  // Example: Cancel notification submission
  await courier.notifications.cancelSubmission("notification1", "submission1");

  // Bulk Processing
  // Example: create a job (API v1 semantics)
  const response = await courier.bulk.createJob({
    message: {
      event: "RR4NDQ7NZ24A8TKPWVBEDGE15E9A",
    },
  });
  console.log(response);

  // Example: create a job (API v2 semantics)
  const response = await courier.bulk.createJob({
    message: {
      message: {
        template: "RR4NDQ7NZ24A8TKPWVBEDGE15E9A",
      },
    },
  });
  console.log(response);

  // Example: get a job
  const response = await courier.bulk.getJob({
    jobId: "1-61efe386-6ff57552409e311b7a1f371f",
  });
  console.log(response);

  // Example: Ingest users in a job (API v1 semantics)
  const response = await courier.bulk.ingestUsers({
    jobId: "1-61efe386-6ff57552409e311b7a1f371f",
    users: [
      {
        profile: {
          email: "tejas@courier.com",
        },
      },
    ],
  });
  console.log(response);

  // Example: Ingest users in a job (API v2 semantics)
  const response = await courier.bulk.ingestUsers({
    jobId: "1-61efe386-6ff57552409e311b7a1f371f",
    users: [
      {
        to: {
          email: "tejas@courier.com",
        },
      },
    ],
  });
  console.log(response);

  // Example: Run a job
  await courier.bulk.runJob({
    jobId: "1-61efe386-6ff57552409e311b7a1f371f",
  });

  // Example: Get user details in a job
  const response = await courier.bulk.getJobUsers({
    jobId: "1-61efe386-6ff57552409e311b7a1f371f",
  });
  console.log(response);
}

run();
```

### Error Handling

This package tries to use the native `fetch` client to make requests or falls back to a polyfill if the client doesn't exist in the environment it's running in.

All network related promise rejections are not handled in any way. All successfully made requests that produce errors on the server side are resulting in promise rejections with custom `CourierHttpClientError` error type.

`CourierHttpClientError` extends native `Error` interface with two extra properties:

- `response`: this is the `fetch` response as is
- `data`: this is the parsed body of the response

```javascript
// Error handling example
const {
  CourierClient,
  CourierHttpClientError,
} = require("@trycourier/courier");

const courier = CourierClient();

try {
  await courier.send(/* ... */);
} catch (error) {
  if (error instanceof CourierHttpClientError) {
    console.log("Failed to send with status code:", error.response.status);
    console.log("The Courier response is:", error.data);
    console.log("The error message is:", error.message);
  } else {
    console.log(
      "There was a problem making that request. Make sure you are online."
    );
  }
}
```

### Idempotency

For `POST` methods, you can supply an `idempotencyKey` in the config parameter to ensure the idempotency of the API Call. We recommend that you use a `V4 UUID` for the key. Keys are eligible to be removed from the system after they're at least 24 hours old, and a new request is generated if a key is reused after the original has been removed. For more info, see [Idempotent Requests](https://docs.courier.com/reference/idempotent-requests) in the Courier documentation.

```javascript
const { CourierClient } = require("@trycourier/courier");
import uuid4 from "uuid4";

const courier = CourierClient();
const idempotencyKey = uuid4();

async function run() {
  const { requestId } = await courier.send(
    {
      template: "<TEMPLATE_OR_EVENT_ID>",
      to: {
        user_id: "<USER_ID>",
        email: "example@example.com",
        phone_number: "555-867-5309",
      },
      data: {
        world: "JavaScript!",
      },
    },
    {
      idempotencyKey,
    }
  );
  console.log(requestId);
}

run();
```

### Audiences

Audiences APIs are used to create, get, update, and delete audiences. A Courier Audience is a dynamic group of users (created using Courier's Profile API) that matches a set of criteria. Audience is reactive to changes in the user's profile. As you change user profile using `profiles` API, the audience will be updated accordingly. You will not have to maintain a list of users in your audience. Courier takes care of that for you. If you have potentially large set of users, you first create an audience and then use the audience's id to retrieve the list of users. Once you satified with the calculated list of users, you can use the `audienceId` to send notification using `send` API.

```ts
// Example: create audience which would allow sending notification to all users that match the given filter criteria
const { audienceId } = await courier.audiences.put({
  id: "<AUDIENCE_ID>",
  filter: {
    operator: "EQ",
    path: "title",
    value: "Software Engineer",
  },
});

// To retrieve list of members in a given audience, you can use the following:
const { items: audienceMembers } = await courier.audiences.listMembers(
  audienceId
);

// To send a notification to all users that match the given filter criteria, you can use the following:
const { requestId } = await courier.send({
  message: {
    template: "<TEMPLATE_OR_EVENT_ID>", // This can be inline content as well
    to: {
      audience_id: audienceId,
    },
    data: {}, // optional
    brand_id: "<BRAND_ID>", //optional
    routing: {},
    channels: {}, // optional
    providers: {}, // optional
  },
});
```

### Tenants

The Tenants API is designed to enable multi-tenant notification workflows. This is useful for defining user to tenant level relationships, especially in the context of B2B applications.

Use Cases:

- Sending branded notifications on behalf of an organization
- Creating slack-bots on behalf of an organization

#### Creating a Tenant

```ts
const { tenantId } = await courier.tenants.put({
  id: "<TENANT_ID>",
  name: "Courier",
  user_profile: {
    slack: {
      access_token: "<SLACK_ACCESS_TOKEN_SCOPED_TO_THE_TENANT>",
    },
  },
});
```

#### Retrieving a Tenant

```ts
const account = await courier.tenants.get("<TENANT_ID>");
```

#### Deleting a Tenant

```ts
await courier.tenants.delete("<TENANT_ID>");
```

#### Listing Tenants

```ts
const { items: tenants, has_more, next_page } = await courier.tenants.list();
```

### Users

#### Updating user

```ts
await courier.users.put("<USER_ID>", {
  accounts: [{ account_id: "ACCOUNT_ID", profile: { foo: "bar" } }],
  profile: { name: "John Doe" },
});
```

#### Updating user accounts

```ts
await courier.users.putAccounts("<USER_ID>", {
  accounts: [{ account_id: "ACCOUNT_ID", profile: { foo: "bar" } }],
});
```

#### Updating user preferences

Courier currently does not allow creating new topics via the API. You must create topics via the Courier UI. Once a topic is created, you can update a user's preferences for that topic via the API.

```ts
await courier.users.putUserPreferenceByTopic(mockUserId, "<VALID_TOPIC_ID>", {
  default_status: "OPTED_IN",
  status: "OPTED_OUT",
});
```

#### Getting user preferences

- Get all topic level preferences for a user

```ts
const { items: userPreferences } = await courier.users.getUserPreferences(
  "<USER_ID>"
);
```

- Get a specific topic level preference for a user

```ts
const userPreference = await courier.users.getUserPreferenceByTopic(
  "<USER_ID>",
  "<VALID_TOPIC_ID>"
);
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Courier](https://github.com/trycourier) ([support@courier.com](mailto:support@courier.com))
