# Changelog

## 7.21.0 (2026-07-23)

Full Changelog: [v7.20.0...v7.21.0](https://github.com/trycourier/courier-node/compare/v7.20.0...v7.21.0)

### Features

* Remove /bulk endpoints from api-spec (C-19507) ([#171](https://github.com/trycourier/courier-node/issues/171)) ([aa3b3b2](https://github.com/trycourier/courier-node/commit/aa3b3b20653b8a12bdf2c7dc9727c8157201a7f0))

## 7.20.0 (2026-07-20)

Full Changelog: [v7.19.2...v7.20.0](https://github.com/trycourier/courier-node/compare/v7.19.2...v7.20.0)

### Features

* Document POST /notifications/{id}/duplicate [C-18607] ([#165](https://github.com/trycourier/courier-node/issues/165)) ([95d4344](https://github.com/trycourier/courier-node/commit/95d43441e10fa2537b4be6667dd1e0534c811182))
* Merge pull request [#149](https://github.com/trycourier/courier-node/issues/149) from trycourier/geraldosilva/c-19201-notification-template-subscription-topic-id ([7eae439](https://github.com/trycourier/courier-node/commit/7eae439cbfe287a079795e3e1954434ebf2baf82))
* Merge pull request [#168](https://github.com/trycourier/courier-node/issues/168) from trycourier/geraldosilva/c-19419-topic-id-notification-template-summary ([e3fd860](https://github.com/trycourier/courier-node/commit/e3fd860eddf428eca13868c8066d61ed6906b7cd))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([5bd81d3](https://github.com/trycourier/courier-node/commit/5bd81d353baecc24df27bdcfb7951657427a1230))


### Bug Fixes

* **ci:** bump @arethetypeswrong/cli to ^0.18.0 and run CI workflows on Node 24 ([d86d583](https://github.com/trycourier/courier-node/commit/d86d58376e67607a789c4961dba9cd011b093dfa))

## 7.19.2 (2026-07-10)

Full Changelog: [v7.19.1...v7.19.2](https://github.com/trycourier/courier-node/compare/v7.19.1...v7.19.2)

### Documentation

* **openapi:** canonical type-id prefixes across all examples ([#162](https://github.com/trycourier/courier-node/issues/162)) ([8e493e2](https://github.com/trycourier/courier-node/commit/8e493e2b8dc6d2d0eeccc3ca658dd5503c0028e1))
* **openapi:** use canonical type-id prefixes in id examples ([#160](https://github.com/trycourier/courier-node/issues/160)) ([5f3c839](https://github.com/trycourier/courier-node/commit/5f3c839c9aea887232c6ddc68db58654a01d7f1a))

## 7.19.1 (2026-07-09)

Full Changelog: [v7.19.0...v7.19.1](https://github.com/trycourier/courier-node/compare/v7.19.0...v7.19.1)

## 7.19.0 (2026-07-09)

Full Changelog: [v7.18.2...v7.19.0](https://github.com/trycourier/courier-node/compare/v7.18.2...v7.19.0)

### Features

* Add bulk user preference upsert and replace endpoints ([248b6a5](https://github.com/trycourier/courier-node/commit/248b6a5c477c4ca956fda150bb75d1acd6bd394f))
* Preferences v3 REST fields: section/topic description + publish body ([1fbb959](https://github.com/trycourier/courier-node/commit/1fbb959e19b9001c661faebf39bcc2bfbb811d28))

## 7.18.2 (2026-07-09)

Full Changelog: [v7.18.1...v7.18.2](https://github.com/trycourier/courier-node/compare/v7.18.1...v7.18.2)

### Chores

* update api-spec with new message resend endpoint ([dfb30cb](https://github.com/trycourier/courier-node/commit/dfb30cbbaee3748c1c93fe2545124b1a79672332))

## 7.18.1 (2026-07-07)

Full Changelog: [v7.18.0...v7.18.1](https://github.com/trycourier/courier-node/compare/v7.18.0...v7.18.1)

### Documentation

* **openapi:** document audiences filter combinator (SUP-686) ([d91894e](https://github.com/trycourier/courier-node/commit/d91894eff7728f9392cae4e774fd89f5e369d637))

## 7.18.0 (2026-07-06)

Full Changelog: [v7.17.1...v7.18.0](https://github.com/trycourier/courier-node/compare/v7.17.1...v7.18.0)

### Features

* **openapi:** Journeys cancel-by-token endpoint + send-node experiments (C-18986) ([01a28d4](https://github.com/trycourier/courier-node/commit/01a28d480692b8a16f3df3ce06dee140d53ea41d))


### Documentation

* **openapi:** reword Cancel journey runs 400 description (re-trigger deploy) ([8b9e40f](https://github.com/trycourier/courier-node/commit/8b9e40fbcf1529f188ddeffb037cb15b43c97591))
* **openapi:** reword Cancel journey runs description (re-trigger deploy) ([42868b7](https://github.com/trycourier/courier-node/commit/42868b725ef44da384bd440cfc6b9b6d420dfc1c))
* **openapi:** tighten Journeys cancel/experiment copy (C-19177) ([fa7d03e](https://github.com/trycourier/courier-node/commit/fa7d03e44ada1054ef6e4bbbfb4483e746e2fd0f))

## 7.17.1 (2026-06-25)

Full Changelog: [v7.17.0...v7.17.1](https://github.com/trycourier/courier-node/compare/v7.17.0...v7.17.1)

### Documentation

* **openapi:** add full response examples to every endpoint ([d8e02f0](https://github.com/trycourier/courier-node/commit/d8e02f0a78f297ee47c86f5f2d9c547d03f434b9))
* **openapi:** reword Cancel Submission description ([c8bad2f](https://github.com/trycourier/courier-node/commit/c8bad2f7d14b6dd136e3a0b3a3afa66a4e06f61a))
* **openapi:** reword Get Submission Checks description ([d9447c3](https://github.com/trycourier/courier-node/commit/d9447c3e56a8e7a0d3dc1618e46b21857238bc6d))
* **openapi:** reword Replace Submission Checks description ([dbe5be2](https://github.com/trycourier/courier-node/commit/dbe5be25aae296b5c957f3c25a307e1dac549e72))

## 7.17.0 (2026-06-24)

Full Changelog: [v7.16.0...v7.17.0](https://github.com/trycourier/courier-node/compare/v7.16.0...v7.17.0)

### Features

* **preferences:** workspace preference sections & nested topics endpoints ([9aa73c0](https://github.com/trycourier/courier-node/commit/9aa73c05af758bd71183ea108c0928a5d5ccc171))

## 7.16.0 (2026-06-23)

Full Changelog: [v7.15.0...v7.16.0](https://github.com/trycourier/courier-node/compare/v7.15.0...v7.16.0)

### Features

* **journeys:** add content + locale endpoints to journey-scoped templates ([c62a165](https://github.com/trycourier/courier-node/commit/c62a1651bc0c0cd9d230fcb5ea42a7630fd6148b))


### Documentation

* **journeys:** clarify checksum usage + re-trigger docs sync for journey content endpoints ([15da97d](https://github.com/trycourier/courier-node/commit/15da97de3b5a936117716452c6d396dbf7421f98))

## 7.15.0 (2026-06-17)

Full Changelog: [v7.14.0...v7.15.0](https://github.com/trycourier/courier-node/compare/v7.14.0...v7.15.0)

### Features

* **openapi:** add add-to-digest JourneyNode variant ([2ac5e99](https://github.com/trycourier/courier-node/commit/2ac5e991eec25a3bc775b7b51a1132af3c1140b3))


### Bug Fixes

* **client:** send content-type header for requests with an omitted optional body ([1e9f14d](https://github.com/trycourier/courier-node/commit/1e9f14d398baeadc67ed54c1ea51fe3c0de7ff3b))

## 7.14.0 (2026-06-16)

Full Changelog: [v7.13.0...v7.14.0](https://github.com/trycourier/courier-node/compare/v7.13.0...v7.14.0)

### Features

* **openapi:** add DELETE /users/{id}/preferences/{topicId} ([e865950](https://github.com/trycourier/courier-node/commit/e865950d84085a7c46705d10b47d2d3c93f6edd6))

## 7.13.0 (2026-06-12)

Full Changelog: [v7.12.0...v7.13.0](https://github.com/trycourier/courier-node/compare/v7.12.0...v7.13.0)

### Features

* **digests:** document digest REST endpoints in OpenAPI spec ([97d733f](https://github.com/trycourier/courier-node/commit/97d733f3b6560055e08798f1a15aff74d7e1af94))

## 7.12.0 (2026-05-28)

Full Changelog: [v7.11.0...v7.12.0](https://github.com/trycourier/courier-node/compare/v7.11.0...v7.12.0)

### Features

* C-18612 Add Journeys `batch` node variant to OpenAPI spec ([65fb0be](https://github.com/trycourier/courier-node/commit/65fb0be53d35e01a4060f741b2b9db56f4adea72))
* Mark `settings` as required on POST /brands ([2aed30c](https://github.com/trycourier/courier-node/commit/2aed30c8f9c4f085ca777f6ee6dbc6dfbbd0dfd4))

## 7.11.0 (2026-05-19)

Full Changelog: [v7.10.2...v7.11.0](https://github.com/trycourier/courier-node/compare/v7.10.2...v7.11.0)

### Features

* [C-18380] Journeys API reference: copy + naming cleanup ([c9a62bf](https://github.com/trycourier/courier-node/commit/c9a62bfc0acd7ca403b5dac30872d8fbb1bd36e5))
* [SUP-607] Add DELETE endpoint for Courier Create tenant templates ([c5769b4](https://github.com/trycourier/courier-node/commit/c5769b4bfd047d0b3914f35403a2a6bac9a207c4))
* **api:** add journeys CRUD/publish/versioning, templates sub-resource, types ([297d6eb](https://github.com/trycourier/courier-node/commit/297d6eb106b494cb56f3722a124a096736f1f83a))
* support setting headers via env ([e7a078f](https://github.com/trycourier/courier-node/commit/e7a078f8e44790bf9332c5c06891d3fa9b148ee7))


### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([9bedc1a](https://github.com/trycourier/courier-node/commit/9bedc1a1c47359a0751e52f5f3c52592d7c896ed))


### Chores

* **format:** run eslint and prettier separately ([94cc158](https://github.com/trycourier/courier-node/commit/94cc1583b4dcfe832929c142efaf5bf8b371b42f))
* **formatter:** run prettier and eslint separately ([ee1ac34](https://github.com/trycourier/courier-node/commit/ee1ac34270e0607eb8f6f6ea884b37a7c9167e3d))
* **internal:** codegen related update ([6197029](https://github.com/trycourier/courier-node/commit/619702960b9076a75bc7138a5218d06f4b3c5dc3))
* **internal:** more robust bootstrap script ([1625ecf](https://github.com/trycourier/courier-node/commit/1625ecf85ab5a9550217acb1b6655c9ea5611fa3))
* redact api-key headers in debug logs ([ce91d48](https://github.com/trycourier/courier-node/commit/ce91d48d8a4be2500a03433a03bafd8142d78e08))
* **tests:** remove redundant File import ([2140f59](https://github.com/trycourier/courier-node/commit/2140f596a0a5436be9dceeac7d1ae40143ce12c7))

## 7.10.2 (2026-04-14)

Full Changelog: [v7.10.1...v7.10.2](https://github.com/trycourier/courier-node/compare/v7.10.1...v7.10.2)

### Bug Fixes

* **types:** flatten NotificationTemplateGetResponse, make note optional in notifications ([8d287be](https://github.com/trycourier/courier-node/commit/8d287bec01446125aaa799dad1e13f7f38785158))
* **types:** flatten NotificationTemplateResponse type structure ([238d48e](https://github.com/trycourier/courier-node/commit/238d48e57d6e3aef1d4c8fea868fd733b94fe259))

## 7.10.1 (2026-04-13)

Full Changelog: [v7.10.0...v7.10.1](https://github.com/trycourier/courier-node/compare/v7.10.0...v7.10.1)

### Bug Fixes

* **api:** correct providers update method, notifications/routing-strategies return types ([4f7a0ad](https://github.com/trycourier/courier-node/commit/4f7a0adc0e5e43847de7b26b97393f345301d03c))


### Chores

* **internal:** codegen related update ([87114df](https://github.com/trycourier/courier-node/commit/87114df9623e87b498bf9938b1d574b8ba723ea8))
* **internal:** codegen related update ([4844fd4](https://github.com/trycourier/courier-node/commit/4844fd47027894a23b3f4d3f4ab4db960c10f738))

## 7.10.0 (2026-04-08)

Full Changelog: [v7.9.0...v7.10.0](https://github.com/trycourier/courier-node/compare/v7.9.0...v7.10.0)

### Features

* **api:** add content endpoints, remove draft resource, update checks/types in notifications ([05fc09f](https://github.com/trycourier/courier-node/commit/05fc09f28ec2cd14e5dd3c5541e88274e82e416e))
* **api:** add listNotifications method to routing strategies ([0bc2d84](https://github.com/trycourier/courier-node/commit/0bc2d84d10b30e689ac7450b6b858c937e6862db))

## 7.9.0 (2026-04-01)

Full Changelog: [v7.8.0...v7.9.0](https://github.com/trycourier/courier-node/compare/v7.8.0...v7.9.0)

### Features

* **api:** add create/retrieve/archive/publish/replace methods to notifications ([7c8e91f](https://github.com/trycourier/courier-node/commit/7c8e91f69567f279fc2697b3b5e267cf4aa1c69f))
* **api:** add providers resource with CRUD and catalog endpoints ([a81a418](https://github.com/trycourier/courier-node/commit/a81a418a5f26c46dfb32f09d452f7c9d617226f8))
* **api:** add routing strategies resource ([2287006](https://github.com/trycourier/courier-node/commit/2287006e9f3a461db7063c908940a73879bc1418))
* **types:** add ElementalHTMLNodeWithType type ([e9bc05a](https://github.com/trycourier/courier-node/commit/e9bc05adea1f711c0a4d7460f91b27222119cbd2))
* **types:** add html node variant to ElementalNode ([d24c791](https://github.com/trycourier/courier-node/commit/d24c791ad66fca04c4af1c8533391c1fb1201d69))


### Chores

* **ci:** skip lint on metadata-only changes ([7ccbdd7](https://github.com/trycourier/courier-node/commit/7ccbdd751f8bf30339d38815f087c7eff977fc3e))
* **internal:** tweak CI branches ([9c79ef7](https://github.com/trycourier/courier-node/commit/9c79ef7bd1b804a9872c567e3f2aee93295805a9))
* **internal:** update gitignore ([843949b](https://github.com/trycourier/courier-node/commit/843949b7a9a0dfee2e6a5a8ab4cf8b734f40addf))


### Documentation

* add AGENTS.md for AI coding assistants ([#232](https://github.com/trycourier/courier-node/issues/232)) ([1f7de4d](https://github.com/trycourier/courier-node/commit/1f7de4d0b66be43ccfe8c7d4864fa73cb7a96e42))

## 7.8.0 (2026-03-12)

Full Changelog: [v7.7.1...v7.8.0](https://github.com/trycourier/courier-node/compare/v7.7.1...v7.8.0)

### Features

* **api:** add journeys resource with list and invoke methods ([fa91ce8](https://github.com/trycourier/courier-node/commit/fa91ce8ccf3dae80a6b6195ee2090d7c690352c3))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([4a5307f](https://github.com/trycourier/courier-node/commit/4a5307f2571ffebd68ee7fb92f776887cbb2f801))
* **types:** make timestamp fields optional in MessageDetails ([6cd35c3](https://github.com/trycourier/courier-node/commit/6cd35c3f9b8682077be6e7677e88e646d1a9b59a))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([982eea2](https://github.com/trycourier/courier-node/commit/982eea2623aed2b3f0657ddab135b5528361164e))
* **internal:** codegen related update ([4549f6e](https://github.com/trycourier/courier-node/commit/4549f6e148d525bf189113c50c840484e6718d62))
* **internal:** update dependencies to address dependabot vulnerabilities ([a69843f](https://github.com/trycourier/courier-node/commit/a69843f50b7d00a7ebde2061f923fc4be5f9e7c3))

## 7.7.1 (2026-03-03)

Full Changelog: [v7.7.0...v7.7.1](https://github.com/trycourier/courier-node/compare/v7.7.0...v7.7.1)

### Bug Fixes

* **api:** remove body_token parameter from tokens.addSingle method ([b8de6f7](https://github.com/trycourier/courier-node/commit/b8de6f7d6c936dce1b5e458b881635a4e0d920e4))
* **api:** remove brand field from ElementalContent ([2a3d25d](https://github.com/trycourier/courier-node/commit/2a3d25dac9b544179e928800dba0f53623cd3734))
* **docs/contributing:** correct pnpm link command ([d3b4a96](https://github.com/trycourier/courier-node/commit/d3b4a96b0d1112692832cff49bfd7897ec77df8c))


### Chores

* **internal/client:** fix form-urlencoded requests ([45deac0](https://github.com/trycourier/courier-node/commit/45deac06aa22be68b4ac57136d065dd85668901c))
* **internal:** avoid type checking errors with ts-reset ([88b8c18](https://github.com/trycourier/courier-node/commit/88b8c18a47ac0d71e5a58274eeb705b41dfb42c3))
* **internal:** codegen related update ([879dd2f](https://github.com/trycourier/courier-node/commit/879dd2f830081dd643bff1afafe1a4f3413f80c1))
* **internal:** remove mock server code ([cbd7d67](https://github.com/trycourier/courier-node/commit/cbd7d675567742542d481cf9275fa765524f2dae))
* update mock server docs ([f4a7c1f](https://github.com/trycourier/courier-node/commit/f4a7c1f3590b16463dd8edb1ef81a188ae276d06))


### Documentation

* add AUTO-GENERATED-OVERVIEW markers for README sync ([#228](https://github.com/trycourier/courier-node/issues/228)) ([63dc300](https://github.com/trycourier/courier-node/commit/63dc300ce3d67d339942446c86edeaa0f4aa69ee))
* sync README from mintlify-docs (2026-02-20 18:11 UTC) ([#229](https://github.com/trycourier/courier-node/issues/229)) ([f35a2aa](https://github.com/trycourier/courier-node/commit/f35a2aa144409b12c125a564a003421a9b8a7a5b))

## 7.7.0 (2026-02-06)

Full Changelog: [v7.6.3...v7.7.0](https://github.com/trycourier/courier-node/compare/v7.6.3...v7.7.0)

### Features

* **api:** add publish/replace methods to tenants.templates, versions sub-resource ([a479e13](https://github.com/trycourier/courier-node/commit/a479e1356e4c924dd93959faccc2f0bc5b220706))
* **api:** support array of recipients in send message to parameter ([e122396](https://github.com/trycourier/courier-node/commit/e1223964750961c6605fce9b5534b7f47c5912e4))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([456f32b](https://github.com/trycourier/courier-node/commit/456f32b5857119e3bce1b98d684452089f0dac25))
* **client:** avoid removing abort listener too early ([955a0ac](https://github.com/trycourier/courier-node/commit/955a0acd0c3562b8744f2d6ebcfc1a3afd3a81f0))


### Chores

* **client:** do not parse responses with empty content-length ([f6a0da2](https://github.com/trycourier/courier-node/commit/f6a0da2fc5de72f899350b471e635a26ae5fe22b))
* **client:** restructure abort controller binding ([ebbf307](https://github.com/trycourier/courier-node/commit/ebbf30710e44dfe85ffd89a021c102381210f61c))

## 7.6.3 (2026-01-27)

Full Changelog: [v7.6.2...v7.6.3](https://github.com/trycourier/courier-node/compare/v7.6.2...v7.6.3)

### Chores

* **ci:** upgrade `actions/github-script` ([9be20f2](https://github.com/trycourier/courier-node/commit/9be20f262f8e308e07f27d7f577c029a24a5729c))
* **internal:** update `actions/checkout` version ([ff49d84](https://github.com/trycourier/courier-node/commit/ff49d84985ceb2f0abd1a1672d060f171fb4773e))
* **internal:** upgrade babel, qs, js-yaml ([69281b2](https://github.com/trycourier/courier-node/commit/69281b23561b6dc18cf5da460a3cfc4dc3563936))


### Documentation

* **types:** clarify version field description in AutomationTemplate ([3b61dec](https://github.com/trycourier/courier-node/commit/3b61dec839fd7e97f8cb8877d045d2a53dcca809))

## 7.6.2 (2026-01-14)

Full Changelog: [v7.6.1...v7.6.2](https://github.com/trycourier/courier-node/compare/v7.6.1...v7.6.2)

### Chores

* fix typo in descriptions ([3e9304a](https://github.com/trycourier/courier-node/commit/3e9304abd0cb3ee2905a1c8ef2ca6add6de40d76))
* **internal:** regenerate SDK with no functional changes ([1eabb0d](https://github.com/trycourier/courier-node/commit/1eabb0d4747af6eb1077c56d0c701de3dfc4720d))
* **internal:** regenerate SDK with no functional changes ([fdf454c](https://github.com/trycourier/courier-node/commit/fdf454c4f56a9562eb4821d067a0dda22e8af4df))
* remove custom code ([68b45da](https://github.com/trycourier/courier-node/commit/68b45da055191f5b0a86995791dc5880dbed29e4))

## 7.6.1 (2026-01-12)

Full Changelog: [v7.6.0...v7.6.1](https://github.com/trycourier/courier-node/compare/v7.6.0...v7.6.1)

### Bug Fixes

* **types:** correct rules field type in NestedFilterConfig ([20636ec](https://github.com/trycourier/courier-node/commit/20636ecec7405c9c5370ac0842a8cf70a9cd16bc))


### Chores

* **internal:** regenerate SDK with no functional changes ([2230886](https://github.com/trycourier/courier-node/commit/22308868766859b3e40cf9854bec627a4a3680b1))

## 7.6.0 (2026-01-08)

Full Changelog: [v7.5.0...v7.6.0](https://github.com/trycourier/courier-node/compare/v7.5.0...v7.6.0)

### Features

* **api:** remove methods across audit-events/brands/bulk/automations/translations/tenants ([459d7de](https://github.com/trycourier/courier-node/commit/459d7deb6ec73b2f06de57c590b46f26b157f15b))


### Chores

* break long lines in snippets into multiline ([3c43d25](https://github.com/trycourier/courier-node/commit/3c43d2512f4bb4937fb40db54de74221d7d115ef))

## 7.5.0 (2025-12-29)

Full Changelog: [v7.4.0...v7.5.0](https://github.com/trycourier/courier-node/compare/v7.4.0...v7.5.0)

### Features

* **api:** add audience/slack/ms_teams/pagerduty/webhook recipient types to send.message ([236fa8b](https://github.com/trycourier/courier-node/commit/236fa8bfddfd5261c0058b78d7d44d0e060728e9))

## 7.4.0 (2025-12-16)

Full Changelog: [v7.3.0...v7.4.0](https://github.com/trycourier/courier-node/compare/v7.3.0...v7.4.0)

### Features

* Add timezone field to Delay schema ([30ff0dd](https://github.com/trycourier/courier-node/commit/30ff0dd269c78f2025c68c8ff161bb88027e381f))
* Update bulk API spec: make event required, document profile.email req… ([ec59104](https://github.com/trycourier/courier-node/commit/ec5910407ff2f6b5f7f11699ac4a275d0b6c9375))

## 7.3.0 (2025-12-08)

Full Changelog: [v7.2.0...v7.3.0](https://github.com/trycourier/courier-node/compare/v7.2.0...v7.3.0)

### Features

* Fix UsersGetAllTokensResponse to return object with tokens property i… ([18b27ab](https://github.com/trycourier/courier-node/commit/18b27abc52af02b8b50b8b87ea7edc51cd9f56c8))

## 7.2.0 (2025-12-08)

Full Changelog: [v7.1.1...v7.2.0](https://github.com/trycourier/courier-node/compare/v7.1.1...v7.2.0)

### Features

* Add event_ids field to Notification schema ([18c7b8b](https://github.com/trycourier/courier-node/commit/18c7b8bac4b0ced730b0e66dbaec51ceb2ce7664))


### Bug Fixes

* **client:** fix duplicate Go struct resulting from name derivations schema ([1160ef0](https://github.com/trycourier/courier-node/commit/1160ef07b47b8e8aae8d54cae4db64d3a12acd8b))
* **mcp:** correct code tool API endpoint ([72e7467](https://github.com/trycourier/courier-node/commit/72e74678aef30cfa05e1cc0693073c30288f98d7))
* **mcp:** return correct lines on typescript errors ([6529d6c](https://github.com/trycourier/courier-node/commit/6529d6ccacb21c8f578070c878a77325fc4450a5))


### Chores

* **internal:** codegen related update ([cc37d70](https://github.com/trycourier/courier-node/commit/cc37d7046f603f2cf299f305a6baa4c929dbc559))
* **internal:** codegen related update ([9a2a060](https://github.com/trycourier/courier-node/commit/9a2a06024865a3379eb9245e733f75a892606632))
* **internal:** upgrade eslint ([c6ecc47](https://github.com/trycourier/courier-node/commit/c6ecc47ba3f3dfcd12ecc9219b4d10b2aa380296))

## 7.1.1 (2025-12-02)

Full Changelog: [v7.1.0...v7.1.1](https://github.com/trycourier/courier-node/compare/v7.1.0...v7.1.1)

### Chores

* **client:** fix logger property type ([cca7ad7](https://github.com/trycourier/courier-node/commit/cca7ad7e5b118379ea12cdaac084cf8853e7aaec))

## 7.1.0 (2025-11-18)

Full Changelog: [v7.0.0...v7.1.0](https://github.com/trycourier/courier-node/compare/v7.0.0...v7.1.0)

### Features

* JWT scope updates ([d9fb88a](https://github.com/trycourier/courier-node/commit/d9fb88ad4c217438b599c7e9102fdaec3ae83602))
* Test ([3353a72](https://github.com/trycourier/courier-node/commit/3353a72311650979908b120068bbcd40328753c4))

## 7.0.0 (2025-11-12)

Full Changelog: [v6.7.0-alpha14...v7.0.0](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha14...v7.0.0)

### Features

* NPM enabled ([9ffc8b8](https://github.com/trycourier/courier-node/commit/9ffc8b87e88bbe42ddb638833f2d8729d0fb2fce))


### Chores

* update SDK settings ([c02aae7](https://github.com/trycourier/courier-node/commit/c02aae701bc83595cab3de554481d6adb478d815))
* update SDK settings ([b05f621](https://github.com/trycourier/courier-node/commit/b05f621c0fc674c0a251e245ba852cc4f297e26f))

## 6.7.0-alpha14 (2025-11-09)

Full Changelog: [v6.7.0-alpha13...v6.7.0-alpha14](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha13...v6.7.0-alpha14)

### Features

* **api:** api update ([d4f7b94](https://github.com/trycourier/courier-node/commit/d4f7b946b21ea9d2cc9eaabed2af2213fa096ee3))
* Spec Comment Change ([61b50d5](https://github.com/trycourier/courier-node/commit/61b50d5503ab1ea03d423b56b17f42cba389d538))
* Token Prop Description Change ([af719b7](https://github.com/trycourier/courier-node/commit/af719b77c1c96a6116d98bea350bdad94137d86c))

## 6.7.0-alpha13 (2025-11-07)

Full Changelog: [v6.7.0-alpha12...v6.7.0-alpha13](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha12...v6.7.0-alpha13)

### Features

* Attempt kick off again ([6d5c140](https://github.com/trycourier/courier-node/commit/6d5c140ba1d1e57556e4249399a3bbddaa967528))
* Organization update ([02a4c84](https://github.com/trycourier/courier-node/commit/02a4c84ab4741fdc2e32337d2adb0e1dc138e7e8))


### Bug Fixes

* Better Python Samples + Updates to naming ([1b35460](https://github.com/trycourier/courier-node/commit/1b35460ce29ddef34d784dfe19ec5650bf6bfda1))

## 6.7.0-alpha12 (2025-10-31)

Full Changelog: [v6.7.0-alpha11...v6.7.0-alpha12](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha11...v6.7.0-alpha12)

### Features

* Comment adjustment to kick of build ([81431dd](https://github.com/trycourier/courier-node/commit/81431dd1f1635329199f14ec897a78dffcab9147))


### Bug Fixes

* Comment to kick off build ([6ffb869](https://github.com/trycourier/courier-node/commit/6ffb869766427741d4afcf95f685ded65a87df6e))

## 6.7.0-alpha11 (2025-10-31)

Full Changelog: [v6.7.0-alpha10...v6.7.0-alpha11](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha10...v6.7.0-alpha11)

### Features

* Move UUID to top ([d40da56](https://github.com/trycourier/courier-node/commit/d40da56a362bbeef8c28d41e45d02611d812e0cd))

## 6.7.0-alpha10 (2025-10-18)

Full Changelog: [v6.7.0-alpha9...v6.7.0-alpha10](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha9...v6.7.0-alpha10)

### Chores

* update SDK settings ([ab6e7ec](https://github.com/trycourier/courier-node/commit/ab6e7ec94c6f910f15d712cb2b29bbcdf54401dc))
* update SDK settings ([43fbbdb](https://github.com/trycourier/courier-node/commit/43fbbdb2322c1e1287962a660187c8b6211510b4))

## 6.7.0-alpha9 (2025-10-17)

Full Changelog: [v6.7.0-alpha8...v6.7.0-alpha9](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha8...v6.7.0-alpha9)

## 6.7.0-alpha8 (2025-10-17)

Full Changelog: [v6.7.0-alpha7...v6.7.0-alpha8](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha7...v6.7.0-alpha8)

### Bug Fixes

* Dep Warning ([c38c270](https://github.com/trycourier/courier-node/commit/c38c27021d0ab20c5df419472bb3e62c4464c409))

## 6.7.0-alpha7 (2025-10-17)

Full Changelog: [v6.7.0-alpha6...v6.7.0-alpha7](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha6...v6.7.0-alpha7)

### Features

* More PHP and attempted node automerge ([ff08178](https://github.com/trycourier/courier-node/commit/ff0817814f05429a44e0035ffdf22ae1d8892a9f))


### Bug Fixes

* Updated paths for each model and go example updates ([cb651e0](https://github.com/trycourier/courier-node/commit/cb651e09153a1f366af64f6ef1c33865a80b2ad5))

## 6.7.0-alpha6 (2025-10-14)

Full Changelog: [v6.7.0-alpha5...v6.7.0-alpha6](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha5...v6.7.0-alpha6)

### Features

* Changes to spec, examples and scripts ([ab64e67](https://github.com/trycourier/courier-node/commit/ab64e6721b85ace43d4c0808b1b369488d86f5b3))

## 6.7.0-alpha5 (2025-10-10)

Full Changelog: [v6.7.0-alpha4...v6.7.0-alpha5](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha4...v6.7.0-alpha5)

### Features

* **api:** manual updates ([e471eac](https://github.com/trycourier/courier-node/commit/e471eaca1fa56158bb19c29d4ec605cc509874d2))
* Examples and ref polish ([1650602](https://github.com/trycourier/courier-node/commit/165060251b8db0303f94c0492a68cff5a087ae1a))
* Kick of merge attempt ([54184b4](https://github.com/trycourier/courier-node/commit/54184b4ba18a1ed6a02e3d98b12e6a5e36ca82e0))
* Model sync ([cb668d9](https://github.com/trycourier/courier-node/commit/cb668d9a149ba6b43dd7634c6e561dedc7bd4baf))
* Polish and Kick of Java Kit Gen ([4d53a63](https://github.com/trycourier/courier-node/commit/4d53a63b1da6c0b01b592bf37a14a48cfc0a7d7a))
* Template Id ([c6657b2](https://github.com/trycourier/courier-node/commit/c6657b2bf9516b860a68091094dbd84adc445cb5))
* Test Github Action ([c394568](https://github.com/trycourier/courier-node/commit/c394568b2ce593afd62c03905a781082b2ef222c))
* Test stainless open action ([d558f6a](https://github.com/trycourier/courier-node/commit/d558f6a5d01d1a870c13314bb5a682006bd51896))

## 6.7.0-alpha4 (2025-10-07)

Full Changelog: [v6.7.0-alpha3...v6.7.0-alpha4](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha3...v6.7.0-alpha4)

### Features

* **api:** manual updates ([af1faa3](https://github.com/trycourier/courier-node/commit/af1faa37d29198904c54f8bb67d8f216f8565b81))

## 6.7.0-alpha3 (2025-10-07)

Full Changelog: [v6.7.0-alpha2...v6.7.0-alpha3](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha2...v6.7.0-alpha3)

### Features

* **api:** manual updates ([3f504d0](https://github.com/trycourier/courier-node/commit/3f504d0ebc5973d4e6ccb9c093ff35e94e2c756a))
* **api:** manual updates ([4465a51](https://github.com/trycourier/courier-node/commit/4465a51c03ce22dc91bc97ade1d78d85c8a8cb45))

## 6.7.0-alpha2 (2025-10-07)

Full Changelog: [v6.7.0-alpha1...v6.7.0-alpha2](https://github.com/trycourier/courier-node/compare/v6.7.0-alpha1...v6.7.0-alpha2)

### Chores

* update SDK settings ([ed8785b](https://github.com/trycourier/courier-node/commit/ed8785b6c6e3478320d603c918cd8317a812c250))

## 6.7.0-alpha1 (2025-10-07)

Full Changelog: [v6.6.1-alpha0...v6.7.0-alpha1](https://github.com/trycourier/courier-node/compare/v6.6.1-alpha0...v6.7.0-alpha1)

### Features

* **api:** manual updates ([e02e62a](https://github.com/trycourier/courier-node/commit/e02e62a089b1a8e5274adb4bfdde8019bbd1f2c7))
* **api:** manual updates ([1aaa7ac](https://github.com/trycourier/courier-node/commit/1aaa7acdf5c31042ebada47380446f309a9c2b81))
* **api:** manual updates ([2fb74d6](https://github.com/trycourier/courier-node/commit/2fb74d6e51bf884d451990c8cf300e27fdec8023))
* **api:** manual updates ([ac55f5f](https://github.com/trycourier/courier-node/commit/ac55f5f3d6f155eb9e419e756a4d5781cfc62d0c))
* **api:** manual updates ([7e57c98](https://github.com/trycourier/courier-node/commit/7e57c98785f0bfb35879e670a286bae7571faf30))
* **api:** manual updates ([951f1c8](https://github.com/trycourier/courier-node/commit/951f1c8a7e1c04b90816ef76aa04be903fc37348))
* **api:** manual updates ([4f2884a](https://github.com/trycourier/courier-node/commit/4f2884a44ffff0919beaf864ee9780139216a851))
* **api:** manual updates ([69749b3](https://github.com/trycourier/courier-node/commit/69749b370052d0d94008b10d5d675b8a3efc26c0))
* **api:** manual updates ([1c6c779](https://github.com/trycourier/courier-node/commit/1c6c77995d137c0350152c90d379c6aa8f38c02e))
* **api:** manual updates ([d34383e](https://github.com/trycourier/courier-node/commit/d34383edcdc2f9d87c1cfc411865c39d5c061d59))
* **api:** manual updates ([0291b2c](https://github.com/trycourier/courier-node/commit/0291b2c4518c1ba14191e6b905e9c8fa5d34a6da))
* **api:** manual updates ([89ddc36](https://github.com/trycourier/courier-node/commit/89ddc36ae5f8531cc621beb27cbc475e1972f178))
* **api:** manual updates ([9f508fb](https://github.com/trycourier/courier-node/commit/9f508fb5cd0d7e5519110f4d70b9133b2780cb40))
* **api:** manual updates ([43c6aa3](https://github.com/trycourier/courier-node/commit/43c6aa3698462b549236718dd920ff733aa8ca90))
* **api:** manual updates ([73a3de4](https://github.com/trycourier/courier-node/commit/73a3de41aad159b4105931971ce0864d8cba91d2))
* **api:** manual updates ([6be37a8](https://github.com/trycourier/courier-node/commit/6be37a85b5105f6e3477b5333a15eda5a0b0c4b6))
* **api:** manual updates ([60035d6](https://github.com/trycourier/courier-node/commit/60035d6cac1b599e2d6d5d45cc77d120063cdb0d))
* **api:** manual updates ([252f56f](https://github.com/trycourier/courier-node/commit/252f56f49adb8a39b00fadddabc69159be6da627))
* **api:** manual updates ([cce8bd5](https://github.com/trycourier/courier-node/commit/cce8bd5741c59b4682113223e105534a86629dd7))
* **api:** manual updates ([60d1a06](https://github.com/trycourier/courier-node/commit/60d1a0669bbc66fc3d1e447aa5f1939cedb61a9f))
* **api:** manual updates ([df1dd2b](https://github.com/trycourier/courier-node/commit/df1dd2b21eb80517dadbba8cf1085da04e65f0a8))
* **api:** manual updates ([366dd66](https://github.com/trycourier/courier-node/commit/366dd66a42fd31469f11e43603a41a0887c9bc76))
* **api:** manual updates ([1b7c8d5](https://github.com/trycourier/courier-node/commit/1b7c8d502e1a11125dbd5bb087543a46c6770cc8))
* **api:** manual updates ([5830280](https://github.com/trycourier/courier-node/commit/5830280ec5dc225a9f047d4e93ebf626170edb1f))
* **api:** manual updates ([d028295](https://github.com/trycourier/courier-node/commit/d02829584be4e04a8fa691c0b09f27b15918a486))
* **api:** manual updates ([464de12](https://github.com/trycourier/courier-node/commit/464de12d2ecc8eac48e05d3feacd71b8b18fd8e1))
* **api:** manual updates ([683868e](https://github.com/trycourier/courier-node/commit/683868e931d3fd74f82e623cf53635dcd92a05c3))
* **api:** manual updates ([0308dd6](https://github.com/trycourier/courier-node/commit/0308dd6a0b2601a0094ea6e00918bd2588dd02cf))


### Chores

* **internal:** use npm pack for build uploads ([843bca4](https://github.com/trycourier/courier-node/commit/843bca44157f906c81d1a3f81d0b9f992b522620))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([c71601d](https://github.com/trycourier/courier-node/commit/c71601d31394b72672c573fa0c2e12146e3c5a13))
* update SDK settings ([1ee64cb](https://github.com/trycourier/courier-node/commit/1ee64cb8eb748ad440dbee2d359c30ed21c407c9))

## 6.6.1-alpha0 (2025-10-01)

Full Changelog: [v0.0.1...v6.6.1-alpha0](https://github.com/trycourier/courier-node/compare/v0.0.1...v6.6.1-alpha0)

### Features

* **api:** manual updates ([4c5fdd7](https://github.com/trycourier/courier-node/commit/4c5fdd78807bca7b83143688338fb4ade8ef1b90))
* **api:** manual updates ([241891d](https://github.com/trycourier/courier-node/commit/241891d442d8373a903cf352fc247a9778cd5dce))


### Performance Improvements

* faster formatting ([2b0c24f](https://github.com/trycourier/courier-node/commit/2b0c24f766a8d20e6696cb74c1b23e367c9f34f4))


### Chores

* do not install brew dependencies in ./scripts/bootstrap by default ([e650eb4](https://github.com/trycourier/courier-node/commit/e650eb427a5f01566c7237bdfc90ef5719951e63))
* **internal:** codegen related update ([5f99283](https://github.com/trycourier/courier-node/commit/5f9928367815efd4bb3e48d28f6548a67c623da1))
* **internal:** codegen related update ([46a0f07](https://github.com/trycourier/courier-node/commit/46a0f0729ab79994cfab403cf224c0782b17aa53))
* **internal:** fix incremental formatting in some cases ([051e283](https://github.com/trycourier/courier-node/commit/051e283756ac00d2dd223f0b5c65f1a96ed454b8))
* **internal:** ignore .eslintcache ([444019d](https://github.com/trycourier/courier-node/commit/444019dae3c4cbc301d780477dff473e0b592dd0))
* **internal:** remove .eslintcache ([5737d28](https://github.com/trycourier/courier-node/commit/5737d282f58611aa0985454eb84c4cdf31cc7f4a))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([77e2775](https://github.com/trycourier/courier-node/commit/77e27758f6ab272a9351e3ae4fd26d35046da588))
* update SDK settings ([9364adc](https://github.com/trycourier/courier-node/commit/9364adc8807a5485af7a21e1e52046daaf7f07e2))
* update SDK settings ([98acf77](https://github.com/trycourier/courier-node/commit/98acf7762fcd7c8a968dd8dfb9c1d3ab30fc6bb0))
