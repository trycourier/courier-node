# Contributing

PR's welcome:

https://github.com/trycourier/courier-node

# Testing

```bash
yarn lint && yarn test
```

## Code Style/Formatting

```bash
yarn format
```

## Releasing New Versions

https://www.npmjs.com/package/@trycourier/courier

Make sure you have incremented the version string in `package.json` to your new version string, hereafter referred to as `<VERSION>` and merged that commit. Then:

```bash
git tag -a v<VERSION> -m v<VERSION>
git push origin v<VERSION>
```

Note: We use NPM Automation token (https://docs.npmjs.com/creating-and-viewing-access-tokens) to publish the package. The token exists in Circle CI environment.
