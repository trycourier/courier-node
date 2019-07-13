# `@trycourier/courier`

A node.js module for communicating with the Courier REST API.

## Installation (via [npm](https://www.npmjs.com/package/@trycourier/courier))

```bash
npm install @trycourier/courier
```

## Usage

```javascript
import CourierClient from "@trycourier/courier";

const { send } = CourierClient({ authenticationCode: "<YOUR_AUTH_CODE>" })

function run () {

  const { messageId } = await send({
    eventId: "<YOUR_EVENT_ID>",
    recipientId: "<RECIPIENT_ID>",
    profile: {}, // optional
    data: {} // optional
  });

  console.log(messageId);

};

run();
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Courier](https://github.com/trycourier) ([support@trycourier.com](mailto:support@trycourier.com))
