# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]

### Added

- Support for `idempotencyKey` for `POST` methods by @aydrian & @rileylnapier
- Support for [Lists API](https://docs.courier.com/reference/lists-api) by @aydrian
  - `POST /send/list` via `client.sendListOrPattern(params, config)`
  - `GET /profiles/{recipient_id}/lists` via `client.profiles.getRecipientLists(recipientId)`
  - `GET /lists` via `client.lists.getLists(params)`
  - `GET /lists/{list_id}` via `client.lists.getList(listId)`
  - `PUT /lists/{list_id}` via `client.lists.replaceList(listId, {...})`
  - `DELETE /lists/{list_id}` via `client.lists.deleteList(listId)`
  - `PUT /lists/{list_id}/restore` via `client.lists.restoreList(listId)`
  - `GET /lists/{list_id}/subscriptions` via `client.lists.getListSubscriptions(listId)`
  - `POST /lists/{list_id}/subscriptions` via `client.lists.bulkSubscribeToList(listId, [recipientId], config)`
  - `PUT /lists/{list_id}/subscriptions/{recipient_id}` via `client.lists.subscribeToList(listId, recipientId)`
  - `DELETE /lists/{list_id}/subscriptions/{recipient_id}` via `client.lists.unsubscribeFromList(listId, recipientId)`
- Support for `GET /messages` via `client.messages.getMessages()` by @aydrian
- Support for `GET /messages/{message_id}/history` via `client.messages.getMessageHistory(messageId)` by @aydrian

### Changed

- Code Refactor
  - Moved endpoint functions and types to folders
  - Using endpoint objects to separate functions e.g. `client.brands.createBrand(…)`
  - Allowed existing functions to hang off client for backwards compatibility
  - Split Test files in separate files based on endpoint
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

[unreleased]: https://github.com/trycourier/courier-python/compare/v1.5.0...HEAD
[v1.5.0]: https://github.com/trycourier/courier-python/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/trycourier/courier-python/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/trycourier/courier-python/compare/v1.2.1...v1.3.0
[v1.2.1]: https://github.com/trycourier/courier-python/compare/v1.2.0...v1.2.1
[v1.2.0]: https://github.com/trycourier/courier-python/compare/v1.1.6...v1.2.0
[v1.1.6]: https://github.com/trycourier/courier-python/compare/v1.1.5...v1.1.6
[v1.1.5]: https://github.com/trycourier/courier-python/compare/v1.1.4...v1.1.5
[v1.1.4]: https://github.com/trycourier/courier-python/compare/v1.1.3...v1.1.4
[v1.1.3]: https://github.com/trycourier/courier-python/compare/v1.1.2...v1.1.3
[v1.1.2]: https://github.com/trycourier/courier-python/compare/v1.1.1...v1.1.2
[v1.1.1]: https://github.com/trycourier/courier-python/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/trycourier/courier-python/compare/v1.0.4...v1.1.0
[v1.0.4]: https://github.com/trycourier/courier-python/compare/v1.0.3...v1.0.4
[v1.0.3]: https://github.com/trycourier/courier-python/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/trycourier/courier-python/compare/v1.0.1...v1.0.2
