import { minify } from 'html-minifier-terser';
import { building } from '$app/environment';

const minificationOptions = {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    sortAttributes: true,
    sortClassName: true,
};

export async function handle({ event, resolve }) {
    return await resolve(event, {
        transformPageChunk: ({ html }) => (building ? minify(html, minificationOptions) : html),
    });
}
