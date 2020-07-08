# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [v1.5.0] - 2020-07-08

### Added
- Support for [Brands API](https://docs.trycourier.com/reference/brands-api) by @aydrian
  - `GET /brands` via `client.getBrands(params)`
  - `GET /brands/:brand_id` via `client.getBrand(brandId)`
  - `POST /brands` via `client.createBrand({…})`
  - `PUT /brands/:brand_id` via `client.replaceBrand({…})`
  - `DELETE /brands/:brand_id` via `client.deleteBrand(brandId)`
- Support for specifying notification brand during [send](https://docs.trycourier.com/reference/send-api#sendmessage) by @aydrian

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
