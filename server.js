import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from './dist/react-loadable.json';
import path from 'path';
import Routes from './router/Routes';

const app = express();
const port = 3001;

app.use('/dist', express.static('dist'));

app.use((req, res, next) => {
    if (/\.js|\.css/.test(req.path) && !/dist/.test(req.path)) {
        res.redirect('/dist' + req.path);
    } else {
        next();
    }
});

app.get('*', (req,res) => { 
    let modules = [];
    let html = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <StaticRouter location={req.path} >
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Loadable.Capture>
    )

    let bundles = getBundles(stats, modules);

    
    let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
    res.send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>SSR React</title>
                ${styles.map(style => {
                    return `<link href="${style.file}" rel="stylesheet"/>`;
                }).join('\n')}            
            </head>
            <body>
                <div id="app">${html}</div>
                <script src="/dist/manifest.js"></script>
                <script src="/dist/main.js"></script>
                ${scripts.map(script => {
                    return `<script src="/dist/${script.file}"></script>`
                }).join('\n')}
                <script>window.main();</script>
            </body>
        </html>
    `)
})

Loadable.preloadAll().then(() => {
    app.listen(port, () => {
         console.log('Running on http://localhost:' + port)
    })
}).catch(err => {
    console.log(err)
})
