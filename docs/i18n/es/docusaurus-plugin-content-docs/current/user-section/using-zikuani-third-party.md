---
id: using-zikuani-third-party
title: Usando Zikuani como proveedor
sidebar_label: Usando Zikuani como proveedor
description: Sakundi - Usando Zikuani como proveedor
keywords: [sakundi, zikuani, identity, wallet]
hide_table_of_contents: true
custom_edit_url: null
---
# 🧪 Tutorial: Cómo integrar código del cliente con el Wallet Zikuani para obtener pruebas anónimas de identidad

Este tutorial explica cómo crear un cliente Web (Javascript) usando `Express.js`, `axios` para autenticarse y recibir una **credencial verificable** usando pruebas de conocimiento cero. Al final el cliente puede obtner una prueba de identidad del usuario sin necesidad de obtener datos sensibles.

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
// Secrets
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "hello@example.com";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET || "password";
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000/callback";
const AUTH_SERVER_URL = process.env.REACT_APP_AUTH_SERVER_URL || "https://app.sakundi.io";
const ACCOUNT = process.env.ACCOUNT || "user@usermail.com";
```

---

## 🧾 3. Función para Decodificar JWT

Esta función decodifica un JWT (Base64URL) que contiene un token:

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

## 🚪 4. Ruta Principal `/`

Muestra una página con un enlace para iniciar la autenticación:

```js
  app.get('/', (req, res) => {
      // Step 1: Redirect user to the OAuth server for authorization
      const authUrl = `${AUTH_SERVER_URL}/authorize?` + querystring.stringify({
          grant_type: "code",
          client_id: CLIENT_ID,
          user_id: ACCOUNT,
          redirect_uri: REDIRECT_URI,
          scope: "zk-firma-digital",        state: String(Math.floor(Math.random() * 10000)),
          nullifier_seed: 1000
      });
      res.send(`
          <h1>Autentíquese con su Firma Digital</h1>
          <p><a href="${authUrl}">Haga click en el enlance para comenzar el proceso de autenticación</a></p>
      `);
  });
```

Esto redirige al usario al servicio de Sakundi que posteriormente activa el Wallet de Zikuani.

---

## 🔄 5. Ruta de Callback `/callback`

Maneja el retorno del servidor de Backend del Wallet de Zikuani:

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

### Paso 3: Si se autentica correctamente, usar los datos del token y la credencial verificable obtenido

```js
    const { access_token, token_type, expires_in, verifiable_credential } = response.data;

    // Display the access token
    res.send(`
        <html>
        <head>
            <title>Token Recibido</title>
            <style>
            body { font-family: sans-serif; padding: 2em; line-height: 1.5; }
            h1 { color: #2c3e50; }
            pre { background: #f4f4f4; padding: 1em; border-radius: 4px; overflow-x: auto; }
            </style>
        </head>
        <body>
            <h1>¡Token de acceso recibido!</h1>
            <p><strong>Tipo de Token:</strong> ${token_type}</p>
            <p><strong>Expira en:</strong> ${expires_in} minutos</p>
            <p><strong>Token:</strong></p>
            <pre>${JSON.stringify(parseJwt(access_token), null, 2)}</pre>
            <p><strong>Credencial verificable con prueba ZK:</strong></p>
            <pre>${JSON.stringify(verifiable_credential, null, 2)}</pre>
        </body>
        </html>
    `);
```

---

## 🚀 6. Iniciar el servicio del cliente

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Cliente OAuth ejecutándose en http://localhost:\${PORT}\`);
});
```

---

## ✅ Resumen

Esta app:
- Redirige al usuario para autenticarse con un servidor de Backend del Wallet de Zikuani
- Maneja el `callback` con un código de autorización
- Intercambia el código por un token de acceso y una credencial verificable
- Usa los detalles del token y credencial en el navegador, mostrandolos

En un caso de uso de la vida real, el VC se usaria para permitir el acceso del usuario a un servicio
específico, basado en la garantía de la nacionalidad del usuario y la edad por ejemplo.

---

## Mira el ejemplo completo en el siguiente enlace:

[https://github.com/sakundi/zikuani-boilerplate](https://github.com/sakundi/zikuani-boilerplate)
