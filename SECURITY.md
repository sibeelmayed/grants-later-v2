# Security Policy

## Supported versions
This project tracks security fixes on the default branch.

## Reporting a vulnerability
Please **do not** open public issues for security vulnerabilities.

Instead, use one of the following:
- GitHub: create a private report via Security Advisories (preferred, if enabled).
- Email: contact the maintainer via the email listed on the GitHub profile of @sibeelmayed.

## Secrets policy
- Never commit real credentials, tokens, keys, or `.env` files.
- Store local secrets in `.env.local` and keep `.env.example` as placeholders only.
- If a secret is committed accidentally, rotate it immediately and remove it from git history.
