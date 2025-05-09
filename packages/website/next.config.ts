import createNextIntlPlugin from 'next-intl/plugin'
import withRspack from 'next-rspack'

import type { NextConfig } from 'next'

const withIntl = createNextIntlPlugin('./i18n.ts')

const is_dev = process.env.NODE_ENV === 'development'

const config: NextConfig = {
	devIndicators: false,
	reactStrictMode: false,
	transpilePackages: ['stk', 'shiki'],
	pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
	typescript: { ignoreBuildErrors: true },
	webpack(config) {
		const svg_rule = config.module.rules.find((rule: any) => {
			return rule.test && new RegExp(rule.test).test('.svg')
		})

		svg_rule.exclude = /\.inline\.svg$|\.svg\?inline/

		config.module.rules.push(
			{
				test: /\.inline\.svg$/,
				use: [{ loader: '@svgr/webpack', options: { icon: true } }]
			},
			{
				test: /\.svg$/,
				resourceQuery: /inline/,
				use: [{ loader: '@svgr/webpack', options: { icon: true } }]
			}
		)

		return config
	}
	// turbopack: {
	// 	rules: {
	// 		'*.inline.svg': {
	// 			loaders: [{ loader: '@svgr/webpack', options: { icon: true } }],
	// 			as: '*.js'
	// 		},
	// 		'*.svg?inline': {
	// 			loaders: [{ loader: '@svgr/webpack', options: { icon: true } }],
	// 			as: '*.js'
	// 		}
	// 	}
	// },
}

// 生产版本不要使用rspack，会导致几倍产物
// export default is_dev ? withRspack(withIntl(config)) : withIntl(config)
export default withIntl(config)
