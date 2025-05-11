---
id: using-zikuani-third-party
title: Using Zikuani as a provider
sidebar_label: Using Zikuani as a provider
description: Sakundi - Using Zikuani as a provider
keywords: [sakundi, zikuani, identity, wallet]
hide_table_of_contents: true
custom_edit_url: null
---
# 🧪 Tutorial: How to Integrate a Client with the Zikuani Wallet to Obtain Anonymous Identity Proofs

This tutorial explains how to build a Web client (JavaScript) using `Express.js` and `axios` to authenticate and receive a **verifiable credential** using zero-knowledge proofs. In the end, the client can get an irrefutable proof of the user's identity without needing to expose sensitive information.

---

## 📦 1. Project Setup

### Required Libraries
Install dependencies:

```bash
npm install express axios querystring
```

---

## 🔐 2. Environment Configuration

The app loads configuration from environment variables, with default values:

```js
// Secrets
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "hello@example.com";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || "password";
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000/callback";
const AUTH_SERVER_URL = process.env.REACT_APP_AUTH_SERVER_URL || "https://app.sakundi.io";
const ACCOUNT = process.env.ACCOUNT || "user@usermail.com";
```

---

## 🧾 3. JWT Decoder Function

This function decodes a JWT (Base64URL) containing a token:

```js
function parseJwt(token) {
    try {
        // Split the token into its parts (Header, Payload, Signature)
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
}
```

---

## 🚪 4. Root Route `/login`

Displays a page with a link to begin authentication:

```js
  app.get('/', (req, res) => {
      // Step 1: Redirect user to the OAuth server for authorization
      const authUrl = `${AUTH_SERVER_URL}/authorize?` + querystring.stringify({
          grant_type: "code",
          client_id: CLIENT_ID,
          user_id: ACCOUNT,
          redirect_uri: REDIRECT_URI,
          scope: "zk-firma-digital",
          state: String(Math.floor(Math.random() * 10000)),
          nullifier_seed: 1000
      });
      res.send(`
          <h1>Authenticate with your Digital Signature</h1>
          <p><a href="${authUrl}">Click the link to begin the authentication process</a></p>
      `);
  });
```

This redirects the user to the Sakundi service, which then activates the Zikuani Wallet.

---

## 🔄 5. Callback Route `/callback`

Handles the return from the Zikuani Wallet backend server:

```js
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
```

### Step 1: Validate the code

```js
  if (!code) return res.status(400).send('Authentication code is required');
```

### Step 2: Exchange the code for an access token

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

### Step 3: If authentication is successful, use the token and verifiable credential data

```js
    const { access_token, token_type, expires_in, verifiable_credential } = response.data;

    // Display the access token
    res.send(`
        <html>
        <head>
            <title>Access Token Received</title>
            <style>
            body { font-family: sans-serif; padding: 2em; line-height: 1.5; }
            h1 { color: #2c3e50; }
            pre { background: #f4f4f4; padding: 1em; border-radius: 4px; overflow-x: auto; }
            </style>
        </head>
        <body>
            <h1>Access token received!</h1>
            <p><strong>Token Type:</strong> ${token_type}</p>
            <p><strong>Expires in:</strong> ${expires_in} minutes</p>
            <p><strong>Token:</strong></p>
            <pre>${JSON.stringify(parseJwt(access_token), null, 2)}</pre>
            <p><strong>Verifiable Credential with ZK proof:</strong></p>
            <pre>${JSON.stringify(verifiable_credential, null, 2)}</pre>
        </body>
        </html>
    `);
```

---

## 🚀 6. Start the Client Server

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`OAuth client running at http://localhost:\${PORT}\`);
});
```

---

## ✅ Summary

This app:
- Redirects the user to authenticate with the Zikuani Wallet backend
- Handles the `callback` with an authorization code
- Exchanges the code for an access token and a verifiable credential
- Uses and displays the token and credential in the browser

In a real-world use case, the VC would be used to grant the user access to a specific service based on properties like nationality or age.

---

## See the full example at:

[https://github.com/sakundi/zikuani-boilerplate](https://github.com/sakundi/zikuani-boilerplate)
