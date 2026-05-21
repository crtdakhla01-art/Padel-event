# Frontend Security Checklist

Use this checklist before shipping frontend changes.

## Secrets and configuration
- Do not commit secrets, API keys, tokens, or passwords.
- Keep runtime secrets on hosting/CDN or backend only.
- Keep `.env` files out of git. Use `.env.example` for documented variables.

## XSS and rendering safety
- Avoid `dangerouslySetInnerHTML` unless strictly required.
- Never render untrusted HTML without sanitization.
- Do not use `eval` or `new Function`.

## Browser storage
- Do not store auth tokens or sensitive user data in `localStorage`/`sessionStorage`.
- If temporary storage is required, store only non-sensitive data.

## Links and external resources
- For external tabs, use `target="_blank"` with `rel="noopener noreferrer"`.
- Avoid loading untrusted third-party scripts.
- Review iframe usage and restrict origins.

## Forms and input handling
- Add `required`, `minLength`, `maxLength`, and pattern constraints where relevant.
- Validate user input before sending.
- Show safe error messages without exposing internal details.

## Build and deployment
- Enforce dependency audit in CI (`npm audit --audit-level=moderate`).
- Use a Content Security Policy (CSP) in production hosting/CDN headers.
- Disable or remove test/debug routes in production.

## Review process
- Run `npm run build` before merge.
- Re-check any new dependency before adding it.
- Re-run this checklist for every release.
