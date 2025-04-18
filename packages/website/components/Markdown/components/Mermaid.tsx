'use client'

import { useLayoutEffect, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Warning } from '@phosphor-icons/react'
import { useSize, useTheme } from '@website/hooks'
import { $, mermaidRender } from '@website/utils'

import type { PropsWithChildren } from 'react'

const Index = (props: PropsWithChildren) => {
	const { children } = props
	const { theme } = useTheme()
	const ref = useRef(null)
	const width = useSize(() => ref.current!, 'width') as number

	useLayoutEffect(() => {
		mermaidRender({ content: children as string, container: ref.current!, theme, width })
	}, [children, theme, width])

	return (
		<ErrorBoundary
			fallback={
				<div>
					<Warning size={18}></Warning>
				</div>
			}
		>
			<div
				className='mermaid_wrap md_block w_100 text_center border_box justify_center'
				ref={ref}
				role='button'
				spellCheck={false}
				tabIndex={-1}
			/>
		</ErrorBoundary>
	)
}

export default $.memo(Index)
