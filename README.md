# supernal

A cosmic and celestial theme.

## Building

```shell
# execute the script to write the theme into json format.
$ bun supernal.ts
```

## Packaging

```shell
# update the version id in package.json
# and commit

# then package up the .vsix
$ npx --package @vscode/vsce -- vsce pack --readme-path etc/MARKETPLACE.md
```
