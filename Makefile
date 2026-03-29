.PHONY: clean theme pack dev
theme:
	bun src/supernal.ts
dev:
	bun --watch src/supernal.ts
clean:
	rm *.vsix
pack: theme
	npx --package @vscode/vsce -- vsce pack --readme-path etc/MARKETPLACE.md
