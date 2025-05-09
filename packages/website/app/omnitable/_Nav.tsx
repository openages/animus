'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { $ } from '@website/utils'

const nav_items = [
	{
		type: 'Normal',
		key: 'table'
	},
	{
		type: 'Config Group',
		key: 'config_group'
	},
	{
		type: 'Custom Group',
		key: 'custom_group'
	},
	{
		type: 'Config Stat',
		key: 'config_stat'
	},
	{
		type: 'Custom Stat',
		key: 'custom_stat'
	},
	{
		type: 'Log Mode',
		key: 'log'
	},
	{
		type: 'Editor Support',
		key: 'editor'
	},
	{
		type: 'Compare',
		key: 'compare'
	}
]

const Index = () => {
	const pathname = usePathname()

	return (
		<div className='nav_items w_100 border_box flex'>
			{nav_items.map(item => (
				<Link
					className={$.cx(
						'nav_item flex justify_center align_center clickable',
						pathname === `/omnitable/${item.key}` && 'active'
					)}
					href={`/omnitable/${item.key}`}
					key={item.key}
				>
					{item.type}
				</Link>
			))}
		</div>
	)
}

export default Index
