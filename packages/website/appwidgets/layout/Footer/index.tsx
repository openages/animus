'use client'

import { useMemoizedFn } from 'ahooks'
import { FloatButton } from 'antd'
import { useInView } from 'motion/react'
import { useRef, Fragment } from 'react'

import { Moon, Sun } from '@phosphor-icons/react'
import { LocaleSelect } from '@website/components'
import { useTheme, useUserMove } from '@website/hooks'
import { $ } from '@website/utils'

import styles from './index.module.css'

const BackTop = FloatButton.BackTop

const Index = () => {
	const { theme, setTheme } = useTheme()
	const ref = useRef(null)
	const visible = useInView(ref)
	const move = useUserMove()

	const setDark = useMemoizedFn(() => setTheme('dark'))
	const setLight = useMemoizedFn(() => setTheme('light'))

	return (
		<Fragment>
			<BackTop
				className={$.cx(styles.backtop, move && styles.move, visible && styles.visible_footer)}
				visibilityHeight={1200}
			></BackTop>
			<div
				className={$.cx(
					'w_100 border_box flex align_center justify_between relative z_index_1000',
					styles._local
				)}
				ref={ref}
			>
				<LocaleSelect></LocaleSelect>
				<div className='theme_toggle flex'>
					<div
						className={$.cx(
							'theme_item flex justify_center align_center clickable',
							theme === 'dark' && 'active'
						)}
						onClick={setDark}
					>
						<Moon weight={theme === 'dark' ? 'fill' : 'regular'}></Moon>
					</div>
					<div
						className={$.cx(
							'theme_item flex justify_center align_center clickable',
							theme === 'light' && 'active'
						)}
						onClick={setLight}
					>
						<Sun weight={theme === 'light' ? 'fill' : 'regular'}></Sun>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default $.memo(Index)
