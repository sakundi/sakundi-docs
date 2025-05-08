---
id: using-zikuani-third-party
title: Usando Zikuani como proveedor
sidebar_label: Usando Zikuani como proveedor
description: Sakundi - Usando Zikuani como proveedor
keywords: [sakundi, zikuani, identity, wallet]
hide_table_of_contents: true
custom_edit_url: null
---
# 🧪 Tutorial: Cómo integrar código del cliente con el Wallet Zikuani para obtener pruebas de identidad

Este tutorial explica cómo crear un cliente OAuth 2.0 usando `Express.js`, `axios` para autenticarse y recibir una **credencial verificable** usando pruebas de conocimiento cero. Al final el cliente puede obtner una prueba de identidad
del usuario sin necesidad de obtener datos sensibles.

---

## 📦 1. Configuración del Proyecto

### Librerías necesarias
Instala las dependencias:

```bash
npm install express axios querystring
```

---

## 🔐 2. Configuración del Entorno

La app obtiene configuraciones desde variables de entorno, con valores por defecto:

```js
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "hello@example.com";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || "password";
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000/callback";
const AUTH_SERVER_URL = process.env.REACT_APP_AUTH_SERVER_URL || "https://app.sakundi.io";
const ACCOUNT = process.env.ACCOUNT || "0xAAAAAAAAAAAAAAAAAAAAAAAAAA";
```

---

## 🧾 3. Función para Decodificar JWT

Esta función decodifica un JWT (Base64URL) **sin verificar la firma**:

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

## 🚪 4. Ruta Principal `/`

Muestra una página con un enlace para iniciar la autenticación:

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
    <p><a href="\${authUrl}">Haga clic en el enlace para comenzar el proceso de autenticación</a></p>
  \`);
});
```

Esto redirige al usuario al servidor OAuth.

---

## 🔄 5. Ruta de Callback `/callback`

Maneja el retorno del servidor OAuth:

```js
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
```

### Paso 1: Validar el código

```js
  if (!code) return res.status(400).send('Se requiere código de autenticación');
```

### Paso 2: Intercambiar el código por un token de acceso

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

### Paso 3: Mostrar los datos del token

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

## 🚀 6. Iniciar el Servidor

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Cliente OAuth ejecutándose en http://localhost:\${PORT}\`);
});
```

---

## ✅ Resumen

Esta app:
- Redirige al usuario para autenticarse con un servidor OAuth
- Maneja el `callback` con un código de autorización
- Intercambia el código por un token de acceso y una credencial verificable
- Muestra los detalles del token y credencial en el navegador

---

## Mira el ejemplo completo en el siguiente enlace:

[https://github.com/sakundi/zikuani-boilerplate](https://github.com/sakundi/zikuani-boilerplate)
