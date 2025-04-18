import type { KlassConstructor, LexicalEditor } from '../LexicalEditor'
import type { NodeKey } from '../LexicalNode'
import type { ElementNode } from './LexicalElementNode'

import { EditorConfig } from 'lexical'
import invariant from 'shared/invariant'

import { LexicalNode } from '../LexicalNode'

export interface DecoratorNode<T> {
	getTopLevelElement(): ElementNode | this | null
	getTopLevelElementOrThrow(): ElementNode | this
}

/** @noInheritDoc */
export class DecoratorNode<T> extends LexicalNode {
	['constructor']!: KlassConstructor<typeof DecoratorNode<T>>
	constructor(key?: NodeKey) {
		super(key)
	}

	/**
	 * The returned value is added to the LexicalEditor._decorators
	 */
	decorate(editor: LexicalEditor, config: EditorConfig): T {
		invariant(false, 'decorate: base method not extended')
	}

	isIsolated(): boolean {
		return false
	}

	isInline(): boolean {
		return true
	}

	isKeyboardSelectable(): boolean {
		return true
	}
}

export function $isDecoratorNode<T>(node: LexicalNode | null | undefined): node is DecoratorNode<T> {
	return node instanceof DecoratorNode
}
