# `@trycourier/courier`

[![npm version](https://badge.fury.io/js/%40trycourier%2Fcourier.svg)](https://badge.fury.io/js/%40trycourier%2Fcourier)

A node.js module for communicating with the Courier REST API.

## Installation (via [npm](https://www.npmjs.com/package/@trycourier/courier))

```bash
npm install @trycourier/courier
```

## Usage

```javascript
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" }); // get from the Courier UI

// Example: send a message supporting email & SMS
const { messageId } = await courier.send({
  eventId: "<EVENT_ID>", // get from the Courier UI
  recipientId: "<RECIPIENT_ID>", // usually your system's User ID
  profile: {
    email: "example@example.com",
    phone_number: "555-228-3890"
  },
  data: {} // optional variables for merging into templates
});

// Example: send a message to a topic
const { messageId } = await courier.sendTopicOrPattern({
  eventId: "<EVENT_ID>", // get from the Courier UI
  topicId: "<TOPIC_ID>", // e.g. example.topic.id
  data: {} // optional variables for merging into templates
});

// Example: send a message to a pattern
const { messageId } = await courier.sendTopicOrPattern({
  eventId: "<EVENT_ID>", // get from the Courier UI
  topicId: "<PATTERN>", // e.g. example.topic.*
  data: {} // optional variables for merging into templates
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
    override: {} // optional
  });
  console.log(messageId);

  // Example: get a message status
  const messageStatus = await courier.messages.getMessage(messageId);
  console.log(messageStatus);

  // Example: replace a recipient's profile
  const { status: replaceStatus } = await courier.replaceProfile({
    recipientId: "<RECIPIENT_ID>",
    profile: {
      email: "example@example.com"
    }
  });
  console.log(replaceStatus);

  // Example: merge into a recipient's profile
  const { status: mergeStatus } = await courier.profiles.mergeProfile({
    recipientId: "<RECIPIENT_ID>",
    profile: {
      sms: "555-555-5555"
    }
  });
  console.log(mergeStatus);

  // Example: get a recipient's profile
  const { profile } = await courier.profiles.getProfile({
    recipientId: "<RECIPIENT_ID>"
  });
  console.log(profile);

  // Example: get a recipient's subscribed topics
  const { paging, results } = await courier.profiles.getRecipientTopics(
    "<RECIPIENT_ID>"
  );
  console.log(results);

  // Example: get all brands
  const { paging, results } = await courier.brands.getBrands({
    cursor: "<CURSOR>" // optional
  });
  console.log(results);

  // Example: get a specific brand
  const brand = await courier.brands.getBrand("<BRAND_ID>");
  console.log(brand);

  // Example: create a brand
  const newBrand = await courier.brands.createBrand({
    name: "My Brand",
    settings: {
      colors: {
        primary: "#0000FF",
        secondary: "#FF0000",
        tertiary: "#00FF00"
      }
    }
  });
  console.log(newBrand);

  // Example: replace a brand
  const replacedBrand = await courier.brands.replaceBrand({
    id: "<BRAND_ID>",
    name: "My New Brand",
    settings: {
      color: {
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#0000FF"
      }
    }
  });
  console.log(replacedBrand);

  // Example: delete a brand
  await courier.brands.deleteBrand("<BRAND_ID>");

  // Example: get all topics
  const { paging, results } = await courier.topics.getTopics({
    cursor: "<CURSOR>" // optional
  });
  console.log(results);

  // Example: get a specific topic
  const topic = await courier.topics.getTopic("<TOPIC_ID>");
  console.log(topic);

  // Example: create or replace a topic
  const replacedTopic = await courier.topics.replaceTopic("<TOPIC_ID>", {
    name: "My New Topic"
  });
  console.log(replacedTopic);

  // Example: delete a topic
  await courier.topics.deleteTopic("<TOPIC_ID>");

  // Example: get a topic's subscribers
  const { paging, results } = await courier.topics.getTopicSubscribers(
    "<TOPIC_ID>"
  );
  console.log(results);

  // Example: subscribe many recipients to a topic
  await courier.topics.bulkSubscribeToTopic("<TOPIC_ID>", [
    "RECIPIENT_ID_1",
    "RECIPIENT_ID_2"
  ]);

  // Example: subscribe single recipient to topic
  const { recipient } = courier.topics.subscribeToTopic(
    "<TOPIC_ID>",
    "<RECIPIENT_ID>"
  );
  console.log(recipient);

  // Example: unsubscribe recipient from topic
  await courier.topics.unsubscribeFromTopic("<TOPIC_ID>", "<RECIPIENT_ID>");
}

run();
```

### Idempotency

For `POST` methods, you can supply an `idempotencyKey` in the config parameter to ensure the idempotency of the API Call. We recommend that you use a `V4 UUID` for the key. Keys are eligible to be removed from the system after they're at least 24 hours old, and a new request is generated if a key is reused after the original has been removed. For more info, see [Idempotent Requests](https://docs.trycourier.com/reference/idempotent-requests) in the Courier Documentation.

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
        phone_number: "555-867-5309"
      },
      data: {
        world: "JavaScript!"
      }
    },
    {
      idempotencyKey
    }
  );
  console.log(messageId);
}

run();
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Courier](https://github.com/trycourier) ([support@trycourier.com](mailto:support@trycourier.com))
