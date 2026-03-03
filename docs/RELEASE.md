# Versioning & release

## Strategy

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): incompatible changes
- **MINOR** (0.x.0): new backwards-compatible features
- **PATCH** (0.0.x): bug fixes

## Release process

1. Update `CHANGELOG.md` (move `[Unreleased]` items to a new versioned section)
2. Commit: `chore(release): prepare x.y.z`
3. Tag: `git tag -a vx.y.z -m "Release x.y.z"`
4. Push tag: `git push origin vx.y.z`
5. Create a GitHub Release from the tag

## Branch policy

| Branch | Purpose |
|--------|----------|
| `main` | Production default |
| `feat/*` | Feature work, PR into `main` |
| `fix/*` | Bug fixes, PR into `main` |
| `chore/*` | Maintenance, PR into `main` |
