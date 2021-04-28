# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]

## [v2.3.0] - 2021-04-28

- adds support for update-profile step via `client.automations.invokeAdHocAutomation({...})`

## [v2.2.0] - 2021-04-07

- adds automations API

## [v2.1.0] - 2021-03-15

- adds support to add more recipients to a list subscription (#40)
- adds support to delete all the lists subscriptions for a recipient (#39)
- adds support to add recipient to multiple lists (#38)
- updates preference interface to accept new preference options (#37)

## [v2.0.0] - 2021-03-03

- supports adding subscription preferences (#35)

## [v1.7.3] - 2021-03-03

### Added

- ICourierClient exported as a type [#33](https://github.com/trycourier/courier-node/pull/33)

## [v1.7.2] - 2021-02-16

### Fixed

- Update PUT list subscription request params with appropriate type [#32](https://github.com/trycourier/courier-node/pull/32)

## [v1.7.1] - 2021-02-01

### Fixed

- Fix the notification(s) typo [#28](https://github.com/trycourier/courier-node/pull/28)

## [v1.7.0] - 2021-01-25

### Added

- Support for [Preferences API]() by @helenamerk and @aydrian
  - `GET /preferences` via `client.preferences.list()`
  - `GET /preferences/{recipient_id}` via `client.preferences.get(recipientId)`
  - `PUT /preferences/{recipient_id}` via `client.preferences.put(recipientId, {...})`

## [v1.6.2] - 2021-01-19

### Fixed

- Bumped [axios](https://www.npmjs.com/package/axios) to version 0.21.1
- Updated types for Send to List Parameters by @rileylnapier

## [v1.6.1] - 2020-09-23

### Fixed

- Fixed return types for `PUT` methods that return 204
- Fixed param types for `client.lists.send()`
- Fixed return type for `client.lists.findByRecipientId()`
- Fixed param types for `client.lists.put()`

## [v1.6.0] - 2020-09-22

### Added

- Support for `idempotencyKey` for `POST` methods by @aydrian & @rileylnapier
- Support for [Lists API](https://docs.courier.com/reference/lists-api) by @aydrian
  - `POST /send/list` via `client.lists.send(params, config)`
  - `GET /profiles/{recipient_id}/lists` via `client.lists.findByRecipientId(recipientId, params)`
  - `GET /lists` via `client.lists.list(params)`
  - `GET /lists/{list_id}` via `client.lists.get(listId)`
  - `PUT /lists/{list_id}` via `client.lists.put(listId, {...})`
  - `DELETE /lists/{list_id}` via `client.lists.delete(listId)`
  - `PUT /lists/{list_id}/restore` via `client.lists.restore(listId)`
  - `GET /lists/{list_id}/subscriptions` via `client.lists.getSubscriptions(listId)`
  - `PUT /lists/{list_id}/subscriptions` via `client.lists.putSubscriptions(listId, [recipientId], config)`
  - `PUT /lists/{list_id}/subscriptions/{recipient_id}` via `client.lists.subscribe(listId, recipientId)`
  - `DELETE /lists/{list_id}/subscriptions/{recipient_id}` via `client.lists.unsubscribe(listId, recipientId)`

### Changed

- Default `base_url` is now `api.courier.com`

## [v1.5.0] - 2020-07-08

### Added

- Support for [Brands API](https://docs.courier.com/reference/brands-api) by @aydrian
  - `GET /brands` via `client.getBrands(params)`
  - `GET /brands/:brand_id` via `client.getBrand(brandId)`
  - `POST /brands` via `client.createBrand({…})`
  - `PUT /brands/:brand_id` via `client.replaceBrand({…})`
  - `DELETE /brands/:brand_id` via `client.deleteBrand(brandId)`
- Support for specifying notification brand during [send](https://docs.courier.com/reference/send-api#sendmessage) by @aydrian

## [v1.4.0] - 2020-06-29

### Added

- Support `GET /messages/:messageId` via `client.getMessage(messageId)` @rileylnapier

## [v1.3.0] - 2020-03-10

### Added

- Support credential storage using `COURIER_AUTH_TOKEN` environment variable by @aydrian
- Support setting base url using `COURIER_BASE_URL` environment variable by @aydrian
- Support preferences and override in send method by @aydrian
- Create GitHub Issue and Pull Request templates by @rileylnapier

### Changed

- Updated user agent string to match new standard by @aydrian

## [v1.2.1] - 2019-12-30

### Fixed

- Convert package.json import to a require by @@scarney81

## [v1.2.0] - 2019-12-20

## Added

- Custom user agent string by @aydrian

## [v1.1.6] - 2019-07-12

## [v1.1.5] - 2019-07-12

## [v1.1.4] - 2019-07-12

## [v1.1.3] - 2019-07-12

## [v1.1.2] - 2019-07-12

## [v1.1.1] - 2019-07-12

## [v1.1.0] - 2019-07-12

## [v1.0.4] - 2019-07-12

## [v1.0.3] - 2019-07-12

## [v1.0.2] - 2019-07-12

## v1.0.1 - 2019-07-12

[unreleased]: https://github.com/trycourier/courier-node/compare/v2.3.0...HEAD
[v2.3.0]: https://github.com/trycourier/courier-node/compare/v2.2.0...v2.3.0
[v2.2.0]: https://github.com/trycourier/courier-node/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/trycourier/courier-node/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/trycourier/courier-node/compare/v1.7.3...v2.0.0
[v1.7.3]: https://github.com/trycourier/courier-node/compare/v1.7.2...v1.7.3
[v1.7.2]: https://github.com/trycourier/courier-node/compare/v1.7.1...v1.7.2
[v1.7.1]: https://github.com/trycourier/courier-node/compare/v1.7.0...v1.7.1
[v1.7.0]: https://github.com/trycourier/courier-node/compare/v1.6.2...v1.7.0
[v1.6.2]: https://github.com/trycourier/courier-node/compare/v1.6.1...v1.6.2
[v1.6.1]: https://github.com/trycourier/courier-node/compare/v1.6.0...v1.6.1
[v1.6.0]: https://github.com/trycourier/courier-node/compare/v1.5.0...v1.6.0
[v1.5.0]: https://github.com/trycourier/courier-node/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/trycourier/courier-node/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/trycourier/courier-node/compare/v1.2.1...v1.3.0
[v1.2.1]: https://github.com/trycourier/courier-node/compare/v1.2.0...v1.2.1
[v1.2.0]: https://github.com/trycourier/courier-node/compare/v1.1.6...v1.2.0
[v1.1.6]: https://github.com/trycourier/courier-node/compare/v1.1.5...v1.1.6
[v1.1.5]: https://github.com/trycourier/courier-node/compare/v1.1.4...v1.1.5
[v1.1.4]: https://github.com/trycourier/courier-node/compare/v1.1.3...v1.1.4
[v1.1.3]: https://github.com/trycourier/courier-node/compare/v1.1.2...v1.1.3
[v1.1.2]: https://github.com/trycourier/courier-node/compare/v1.1.1...v1.1.2
[v1.1.1]: https://github.com/trycourier/courier-node/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/trycourier/courier-node/compare/v1.0.4...v1.1.0
[v1.0.4]: https://github.com/trycourier/courier-node/compare/v1.0.3...v1.0.4
[v1.0.3]: https://github.com/trycourier/courier-node/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/trycourier/courier-node/compare/v1.0.1...v1.0.2
