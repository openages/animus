import type { LexicalEditor } from 'lexical'

import { COMMAND_PRIORITY_LOW, INSERT_PARAGRAPH_COMMAND } from 'lexical'
import { useEffect } from 'react'

import {
	$handleListInsertParagraph,
	insertList,
	removeList,
	INSERT_ORDERED_LIST_COMMAND,
	INSERT_UNORDERED_LIST_COMMAND,
	REMOVE_LIST_COMMAND
} from '@lexical/list'
import { mergeRegister } from '@lexical/utils'

export function useList(editor: LexicalEditor): void {
	useEffect(() => {
		return mergeRegister(
			editor.registerCommand(
				INSERT_ORDERED_LIST_COMMAND,
				() => {
					insertList(editor, 'number')
					return true
				},
				COMMAND_PRIORITY_LOW
			),
			editor.registerCommand(
				INSERT_UNORDERED_LIST_COMMAND,
				() => {
					insertList(editor, 'bullet')
					return true
				},
				COMMAND_PRIORITY_LOW
			),
			editor.registerCommand(
				REMOVE_LIST_COMMAND,
				() => {
					removeList(editor)
					return true
				},
				COMMAND_PRIORITY_LOW
			),
			editor.registerCommand(
				INSERT_PARAGRAPH_COMMAND,
				() => {
					const hasHandledInsertParagraph = $handleListInsertParagraph()

					if (hasHandledInsertParagraph) {
						return true
					}

					return false
				},
				COMMAND_PRIORITY_LOW
			)
		)
	}, [editor])
}
