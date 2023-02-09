import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'info'
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    console.log('hit')
    const url = req.originalUrl

    try {
      let template = await fs.readFile(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )
      template = await vite.transformIndexHtml(url, template)
      const { render } = await vite.ssrLoadModule('/src/main.server.tsx')

      const appHTML = await render(url)

      const html = template.replace(`<!--ssr-outlet-->`, appHTML)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite.ssrFixStacktrace(error)
      next(error)
    }
  })

  app.listen(6976, () => {
    console.log('listening on localhost:6967')
  })
}

createServer()
