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

## Getting Started

```javascript
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" }); // get from the Courier UI

// Example: send a message supporting email & SMS
const { messageId } = await courier.send({
  eventId: "<EVENT_ID>", // get from the Courier UI
  recipientId: "<RECIPIENT_ID>", // usually your system's User ID
  profile: {
    email: "example@example.com",
    phone_number: "555-228-3890",
  },
  data: {}, // optional variables for merging into templates
});

// Example: send a message to a list
const { messageId } = await courier.lists.send({
  event: "<EVENT_ID>", // get from the Courier UI
  list: "<LIST_ID>", // e.g. example.list.id
  data: {}, // optional variables for merging into templates
});

// Example: send a message to a pattern
const { messageId } = await courier.lists.send({
  event: "<EVENT_ID>", // get from the Courier UI
  pattern: "<PATTERN>", // e.g. example.list.*
  data: {}, // optional variables for merging into templates
});
```

## Environment Variables

`courier-node` supports credential storage in environment variables. If no `authorizationToken` is provided when instantiating the Courier client (e.g., `const courier = CourierClient();`), the value in the `COURIER_AUTH_TOKEN` env var will be used.

If you need to use a base url other than the default https://api.courier.com, you can set it using the `COURIER_BASE_URL` env var.

## Advanced Usage

```javascript
import { CourierClient } from "@trycourier/courier";
// const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" });

async function run() {
  // Example: send a message
  const { messageId } = await courier.send({
    eventId: "<EVENT_ID>",
    recipientId: "<RECIPIENT_ID>",
    profile: {}, // optional
    data: {}, // optional
    brand: "<BRAND_ID>", //optional
    preferences: {}, // optional
    override: {}, // optional
  });
  console.log(messageId);

  // Example: get a message status
  const messageStatus = await courier.getMessage(messageId);
  console.log(messageStatus);

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

  // Example: Notification Preferences
  await courier.preferences.put(recipientId, {
    notifications: {
      "<NOTIFICATION_ID>": { status: "<OPT_IN_STATUS>" },
    },
  });
  // Where OPT_IN_STATUS = "OPTED_IN" | "OPTED_OUT"

  // Example: Get a list of existing notifications and categories
  const prefs = await courier.preferences.list();
  console.log(prefs);

  // Example: Get the preferences stored under a specified recipient ID.
  const profilePrefs = await courier.preferences.get(recipientId);
  console.log(profilePrefs);

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
}

run();
```

### Idempotency

For `POST` methods, you can supply an `idempotencyKey` in the config parameter to ensure the idempotency of the API Call. We recommend that you use a `V4 UUID` for the key. Keys are eligible to be removed from the system after they're at least 24 hours old, and a new request is generated if a key is reused after the original has been removed. For more info, see [Idempotent Requests](https://docs.courier.com/reference/idempotent-requests) in the Courier documentation.

```javascript
import { CourierClient } from "@trycourier/courier";
import uuid4 from "uuid4";

const courier = CourierClient();
const idempotencyKey = uuid4();

async function run() {
  const { messageId } = await courier.send(
    {
      eventId: "<EVENT_ID>",
      recipientId: "<RECIPIENT_ID>",
      profile: {
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
  console.log(messageId);
}

run();
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Courier](https://github.com/trycourier) ([support@courier.com](mailto:support@courier.com))
