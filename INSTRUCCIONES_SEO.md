# Instrucciones SEO para BOCAP

Este proyecto ya incluye:

- `public/sitemap.xml`
- `public/robots.txt`
- meta tags base en `index.html`
- `public/CNAME` para el dominio `bocap.vc`

## 1. Verificar el dominio en Google Search Console

Se recomienda usar una **Propiedad de dominio** para cubrir:

- `https://bocap.vc`
- `http://bocap.vc`
- subdominios futuros

Pasos:

1. Entra a Google Search Console.
2. Haz clic en **Añadir propiedad**.
3. Elige **Dominio**.
4. Escribe: `bocap.vc`
5. Google te mostrará un registro **TXT** de DNS.
6. Ve al proveedor donde gestionas el DNS del dominio.
7. Agrega el registro TXT exactamente como lo entrega Google.
8. Espera la propagación del DNS.
9. Vuelve a Search Console y haz clic en **Verificar**.

## 2. Verificar la versión URL-prefix

Opcionalmente, también puedes agregar la propiedad:

- `https://bocap.vc/`

Esto ayuda a revisar datos de una URL exacta, aunque la propiedad de dominio suele ser suficiente.

## 3. Enviar el sitemap

Pasos:

1. Entra a la propiedad correcta en Search Console.
2. Ve a **Sitemaps**.
3. En el campo de nuevo sitemap, escribe:

   `sitemap.xml`

4. Haz clic en **Enviar**.
5. Verifica que el estado figure como procesado.

La URL final del sitemap debe ser:

`https://bocap.vc/sitemap.xml`

## 4. Revisar robots.txt

Abre esta URL en el navegador:

`https://bocap.vc/robots.txt`

Debes ver la referencia al sitemap:

`Sitemap: https://bocap.vc/sitemap.xml`

## 5. Comprobar indexación básica

Después del deploy:

1. Abre `https://bocap.vc/`
2. Abre `https://bocap.vc/sitemap.xml`
3. Abre `https://bocap.vc/robots.txt`
4. Usa la inspección de URL de Search Console para revisar:
   - `/`
   - `/#/sobre-bocap`
   - `/#/equipo`
   - `/#/contacto`

## 6. Nota sobre SPA con hash routes

El sitio está configurado como SPA con rutas hash (`#/ruta`).
Eso evita problemas de 404 en GitHub Pages.

Para una estrategia SEO más fuerte en el futuro, convendría migrar a rutas sin hash con hosting que soporte rewrites o prerender/SSR.
