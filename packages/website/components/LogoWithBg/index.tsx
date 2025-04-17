'use client'

import { $ } from '@website/utils'

interface IProps {
	className?: HTMLDivElement['className']
	size?: number
	color?: string
	bg_color?: string
}

const Index = (props: IProps) => {
	const { className, size = 48, color = 'var(--color_main)', bg_color = 'var(--color_bg)' } = props

	return (
		<div className={$.cx('flex', className)} style={{ maxWidth: size, maxHeight: size }}>
			<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
				<rect x='16' y='16' width='480' height='480' rx='90' ry='90' fill={bg_color} />
				<path
					d='M193.287,165.279c27.713-48,96.994-48,124.707,0l70.151,121.5c27.713,48-6.928,108-62.354,108H185.49c-55.426,0-90.067-60-62.353-108Z'
					fill-rule='evenodd'
					fill={color}
				/>
			</svg>
		</div>
	)

	return
}

export default $.memo(Index)
