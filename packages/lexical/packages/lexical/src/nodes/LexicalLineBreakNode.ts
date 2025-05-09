import type { KlassConstructor } from '../LexicalEditor'
import type { DOMConversionMap, DOMConversionOutput, NodeKey, SerializedLexicalNode } from '../LexicalNode'

import { DOM_TEXT_TYPE } from '../LexicalConstants'
import { LexicalNode } from '../LexicalNode'
import { $applyNodeReplacement, $setImportNode } from '../LexicalUtils'

/** @noInheritDoc */
export class LineBreakNode extends LexicalNode {
	['constructor']!: KlassConstructor<typeof LineBreakNode>
	static getType(): string {
		return 'linebreak'
	}

	static clone(node: LineBreakNode, new_key?: boolean): LineBreakNode {
		return new LineBreakNode(new_key ? undefined : node.__key)
	}

	constructor(key?: NodeKey) {
		super(key)
	}

	getTextContent(): '\n' {
		return '\n'
	}

	createDOM(): HTMLElement {
		return document.createElement('br')
	}

	updateDOM(): false {
		return false
	}

	static importDOM(): DOMConversionMap | null {
		return {
			br: (node: Node) => {
				if (isOnlyChild(node)) {
					return null
				}
				return {
					conversion: $convertLineBreakElement,
					priority: 0
				}
			}
		}
	}

	static importJSON(serializedNode: SerializedLexicalNode, update?: boolean): LineBreakNode {
		const node = $createLineBreakNode(serializedNode.key)

		if (!update) $setImportNode(serializedNode.key!, node)

		return node
	}

	exportJSON(): SerializedLexicalNode {
		return {
			type: 'linebreak',
			version: 1
		}
	}
}

function $convertLineBreakElement(node: Node): DOMConversionOutput {
	return { node: $createLineBreakNode() }
}

export function $createLineBreakNode(key?: string): LineBreakNode {
	return $applyNodeReplacement(new LineBreakNode(key))
}

export function $isLineBreakNode(node: LexicalNode | null | undefined): node is LineBreakNode {
	return node instanceof LineBreakNode
}

function isOnlyChild(node: Node): boolean {
	const parentElement = node.parentElement
	if (parentElement !== null) {
		const firstChild = parentElement.firstChild!
		if (firstChild === node || (firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild))) {
			const lastChild = parentElement.lastChild!
			if (
				lastChild === node ||
				(lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild))
			) {
				return true
			}
		}
	}
	return false
}

function isWhitespaceDomTextNode(node: Node): boolean {
	return node.nodeType === DOM_TEXT_TYPE && /^( |\t|\r?\n)+$/.test(node.textContent || '')
}
