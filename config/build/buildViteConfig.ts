import autoprefixer from 'autoprefixer'
import { UserConfig } from 'vite'

import { buildOptions } from './buildOptions'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildServer } from './buildServer'
import { BuildOptions } from './types/config'

export function buildViteConfig(options: BuildOptions): UserConfig {
    const { mode, isDev } = options
    return {
        mode,
        plugins: buildPlugins(),
        resolve: buildResolvers(options),
        build: buildOptions(options),
        define: {
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(options.apiUrl),
        },
        css: {
            modules: {
                generateScopedName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
            },
            postcss: {
                plugins: [autoprefixer()],
            },
        },
        server: buildServer(options),
    }
}
