.PHONY: clean theme pack
theme:
	bun supernal.ts
clean:
	rm *.vsix
pack: theme
	npx --package @vscode/vsce -- vsce pack --readme-path etc/MARKETPLACE.md
