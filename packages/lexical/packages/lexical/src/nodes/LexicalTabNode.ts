import type { DOMConversionMap, NodeKey } from '../LexicalNode'

import invariant from 'shared/invariant'

import { IS_UNMERGEABLE } from '../LexicalConstants'
import { LexicalNode } from '../LexicalNode'
import { $applyNodeReplacement, $setImportNode } from '../LexicalUtils'
import { SerializedTextNode, TextDetailType, TextModeType, TextNode } from './LexicalTextNode'

/** @noInheritDoc */
export class TabNode extends TextNode {
	static getType(): string {
		return 'tab'
	}

	static clone(node: TabNode, new_key?: boolean): TabNode {
		const newNode = new TabNode(new_key ? undefined : node.__key)
		// TabNode __text can be either '\t' or ''. insertText will remove the empty Node
		newNode.__text = node.__text
		newNode.__format = node.__format
		newNode.__style = node.__style

		return newNode
	}

	constructor(key?: NodeKey) {
		super('\t', key)
		this.__detail = IS_UNMERGEABLE
	}

	static importDOM(): DOMConversionMap | null {
		return null
	}

	static importJSON(serializedNode: SerializedTextNode, update?: boolean): TabNode {
		const node = $createTabNode(serializedNode.key)

		if (!update) $setImportNode(serializedNode.key!, node)

		node.setFormat(serializedNode.format)
		node.setStyle(serializedNode.style)

		return node
	}

	exportJSON(): SerializedTextNode {
		return {
			...super.exportJSON(),
			type: 'tab',
			version: 1
		}
	}

	setTextContent(_text: string): this {
		invariant(false, 'TabNode does not support setTextContent')
	}

	setDetail(_detail: TextDetailType | number): this {
		invariant(false, 'TabNode does not support setDetail')
	}

	setMode(_type: TextModeType): this {
		invariant(false, 'TabNode does not support setMode')
	}

	canInsertTextBefore(): boolean {
		return false
	}

	canInsertTextAfter(): boolean {
		return false
	}
}

export function $createTabNode(key?: string): TabNode {
	return $applyNodeReplacement(new TabNode(key))
}

export function $isTabNode(node: LexicalNode | null | undefined): node is TabNode {
	return node instanceof TabNode
}
