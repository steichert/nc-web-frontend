#!/usr/bin/env node
/**
 * Build-integrity guard: fail the build if component stylesheets were dropped.
 *
 * `@ngtools/webpack` loads every `styleUrls` entry through a webpack child compilation.
 * From webpack 5.96.0 onwards that child compilation stops emitting assets, so the
 * resource loader reads back `undefined` and each component's compiled `styles` array
 * comes back empty -- with no build error and no failing unit test. The app builds,
 * boots and behaves correctly; it just renders completely unstyled.
 *
 * That shipped to production once already, which is why the `webpack` override in
 * package.json is pinned to ~5.95.0. This check makes a regression impossible to miss.
 *
 * Detection: Angular's emulated view encapsulation rewrites component selectors to
 * `.foo[_ngcontent-<appId>-c12]`. The `[_ngcontent-` marker therefore appears once per
 * compiled component style rule, and not at all when the stylesheets were dropped.
 */

const fs = require('fs');
const path = require('path');

const MARKER = '[_ngcontent-';
const outputPath = process.argv[2] || path.join('dist', 'nc-web-frontend', 'browser');

if (!fs.existsSync(outputPath)) {
    console.error(`verify-component-styles: build output not found at ${outputPath}`);
    process.exit(1);
}

const jsFiles = fs.readdirSync(outputPath).filter((file) => file.endsWith('.js'));

if (jsFiles.length === 0) {
    console.error(`verify-component-styles: no JavaScript bundles found in ${outputPath}`);
    process.exit(1);
}

let total = 0;
for (const file of jsFiles) {
    const contents = fs.readFileSync(path.join(outputPath, file), 'utf8');
    total += contents.split(MARKER).length - 1;
}

if (total === 0) {
    console.error(
        [
            '',
            'verify-component-styles: FAILED - no compiled component styles in the bundle.',
            '',
            `Searched ${jsFiles.length} bundle(s) in ${outputPath} and found no "${MARKER}" markers,`,
            'which means every component stylesheet was silently dropped and the site will',
            'render unstyled.',
            '',
            'Most likely cause: the "webpack" override in package.json was raised to 5.96.0 or',
            'newer, which breaks the @ngtools/webpack resource loader on Angular 14. Pin it back',
            'to ~5.95.0 and reinstall.',
            '',
        ].join('\n'),
    );
    process.exit(1);
}

console.log(`verify-component-styles: OK - ${total} scoped component style rules in ${jsFiles.length} bundle(s).`);
