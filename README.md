# `@trycourier/courier`

A node.js module for communicating with the Courier REST API.

## Installation (via [npm](https://www.npmjs.com/package/@trycourier/courier))

```bash
npm install @trycourier/courier
```

## Usage

```javascript
import CourierClient from "@trycourier/courier";

const courier = CourierClient({ authenticationCode: "<AUTH_CODE>" });

async function run () {

  // Example: send a message
  const { messageId } = await courier.send({
    eventId: "<EVENT_ID>",
    recipientId: "<RECIPIENT_ID>",
    profile: {}, // optional
    data: {} // optional
  });
  console.log(messageId);

  // Example: replace a recipient's profile
  const replaceRes = await courier.replaceProfile({
    recipientId: "<PROFILE_ID>",
    profile: {
      email: "example@example.com"
    }
  });
  console.log(replaceRes.status);

  // Example: merge into a recipient's profile
  const mergeRes = await courier.mergeProfile({
    recipientId: "<PROFILE_ID>",
    profile: {
      "sms": "555-555-5555"
    }
  });
  console.log(mergeRes.status);

  // Example: get a recipient's profile
  const { profile } = await courier.getProfile({
    recipientId: "<PROFILE_ID>"
  });
  console.log(profile);

};

run();
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Courier](https://github.com/trycourier) ([support@trycourier.com](mailto:support@trycourier.com))
