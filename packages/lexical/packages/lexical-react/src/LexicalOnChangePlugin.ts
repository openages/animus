import type { EditorState, LexicalEditor } from 'lexical'

import useLayoutEffect from 'shared/useLayoutEffect'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

export function OnChangePlugin({
	ignoreHistoryMergeTagChange = true,
	ignoreSelectionChange = false,
	onChange
}: {
	ignoreHistoryMergeTagChange?: boolean
	ignoreSelectionChange?: boolean
	onChange: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void
}): null {
	const [editor] = useLexicalComposerContext()

	useLayoutEffect(() => {
		if (onChange) {
			return editor.registerUpdateListener(
				({ editorState, dirtyElements, dirtyLeaves, prevEditorState, tags }) => {
					if (
						(ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0) ||
						(ignoreHistoryMergeTagChange && tags.has('history-merge')) ||
						prevEditorState.isEmpty()
					) {
						return
					}

					onChange(editorState, editor, tags)
				}
			)
		}
	}, [editor, ignoreHistoryMergeTagChange, ignoreSelectionChange, onChange])

	return null
}
