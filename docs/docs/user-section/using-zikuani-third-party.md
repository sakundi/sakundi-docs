---
id: using-zikuani-third-party
title: Using Zikuani as a provider
sidebar_label: Using Zikuani as a provider
description: Sakundi - Using Zikuani as a provider
keywords: [sakundi, zikuani, identity, wallet]
hide_table_of_contents: true
custom_edit_url: null
---
# 🧪 OAuth Client Tutorial with Express.js and Zero-Knowledge Credentials

This tutorial explains how an OAuth 2.0 client works using `Express.js`, `axios`, and a custom OAuth server that returns a **verifiable credential** (potentially using ZK proofs).

---

## 📦 1. Project Setup

### Required Libraries
Install dependencies:

```bash
npm install express axios querystring
```

---

## 🔐 2. Environment Configuration

The app reads configuration values from environment variables, with fallbacks:

```js
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "hello@example.com";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || "password";
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000/callback";
const AUTH_SERVER_URL = process.env.REACT_APP_AUTH_SERVER_URL || "https://app.sakundi.io";
const ACCOUNT = process.env.ACCOUNT || "0x86E67a05324A55AF6B2b3bF1A5cBA1778C56A8bE";
```

---

## 🧾 3. JWT Parser

This function decodes a JWT access token (Base64URL) **without verifying the signature**:

```js
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
  );
  return JSON.parse(jsonPayload);
}
```

---

## 🚪 4. Entry Route `/`

Displays a page with a link to begin authentication:

```js
app.get('/', (req, res) => {
  const authUrl = `${AUTH_SERVER_URL}/authorize?` + querystring.stringify({
    grant_type: "code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    user_id: ACCOUNT,
    redirect_uri: REDIRECT_URI,
    scope: "zk-firma-digital",
    state: String(Math.floor(Math.random() * 10000)),
    nullifier_seed: 1000
  });

  res.send(\`
    <h1>Autentíquese con su Firma Digital</h1>
    <p><a href="\${authUrl}">Haga click en el enlace para comenzar el proceso de autenticación</a></p>
  \`);
});
```

This redirects to the OAuth server.

---

## 🔄 5. Callback Route `/callback`

Handles the redirect back from the OAuth server:

```js
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
```

### Step 1: Validate code

```js
  if (!code) return res.status(400).send('Se requiere código de autenticación');
```

### Step 2: Exchange code for access token

```js
  const response = await axios.post(\`\${AUTH_SERVER_URL}/token\`,
    querystring.stringify({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    }),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  );
```

### Step 3: Render token response

```js
  const { access_token, token_type, expires_in, verifiable_credential } = response.data;

  res.send(\`
    <html>
      <head><title>Token Recibido</title></head>
      <style>
        body { font-family: sans-serif; padding: 2em; line-height: 1.5; }
        pre { background: #f4f4f4; padding: 1em; border-radius: 4px; overflow-x: auto; }
      </style>
      <body>
        <h1>¡Token de acceso recibido!</h1>
        <p><strong>Tipo de Token:</strong> \${token_type}</p>
        <p><strong>Expira en:</strong> \${expires_in} minutos</p>
        <p><strong>Token:</strong></p>
        <pre>\${JSON.stringify(parseJwt(access_token), null, 2)}</pre>
        <p><strong>Credencial verificable con prueba ZK:</strong></p>
        <pre>\${JSON.stringify(verifiable_credential, null, 2)}</pre>
      </body>
    </html>
  \`);
```

---

## 🚀 6. Start the Server

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`OAuth client running on http://localhost:\${PORT}\`);
});
```

---

## ✅ Summary

This app:
- Sends a user to authenticate with an OAuth server
- Handles the `callback` with an authorization code
- Exchanges the code for an access token and a ZK verifiable credential
- Displays token details and credential nicely in the browser

---

## 🔐 Use Cases

- Zero-Knowledge identity issuance
- OAuth + cryptographic wallet login flows
- Secure credential sharing for Web3 / digital ID systems