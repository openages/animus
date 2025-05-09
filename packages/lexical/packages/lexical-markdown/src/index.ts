import type {
	ElementTransformer,
	TextFormatTransformer,
	TextMatchTransformer,
	Transformer
} from './MarkdownTransformers'

import { registerMarkdownShortcuts } from './MarkdownShortcuts'
import {
	BOLD_ITALIC_STAR,
	BOLD_ITALIC_UNDERSCORE,
	BOLD_STAR,
	BOLD_UNDERSCORE,
	CHECK_LIST,
	HEADING,
	HIGHLIGHT,
	INLINE_CODE,
	ITALIC_STAR,
	ITALIC_UNDERSCORE,
	LINK,
	ORDERED_LIST,
	STRIKETHROUGH,
	UNORDERED_LIST
} from './MarkdownTransformers'

const ELEMENT_TRANSFORMERS: Array<ElementTransformer> = [HEADING, UNORDERED_LIST, ORDERED_LIST, CHECK_LIST]

// Order of text format transformers matters:
//
// - code should go first as it prevents any transformations inside
// - then longer tags match (e.g. ** or __ should go before * or _)
const TEXT_FORMAT_TRANSFORMERS: Array<TextFormatTransformer> = [
	INLINE_CODE,
	BOLD_ITALIC_STAR,
	BOLD_ITALIC_UNDERSCORE,
	BOLD_STAR,
	BOLD_UNDERSCORE,
	HIGHLIGHT,
	ITALIC_STAR,
	ITALIC_UNDERSCORE,
	STRIKETHROUGH
]

const TEXT_MATCH_TRANSFORMERS: Array<TextMatchTransformer> = [LINK]

const TRANSFORMERS: Array<Transformer> = [
	...ELEMENT_TRANSFORMERS,
	...TEXT_FORMAT_TRANSFORMERS,
	...TEXT_MATCH_TRANSFORMERS
]

export {
	BOLD_ITALIC_STAR,
	BOLD_ITALIC_UNDERSCORE,
	BOLD_STAR,
	BOLD_UNDERSCORE,
	CHECK_LIST,
	ELEMENT_TRANSFORMERS,
	ElementTransformer,
	HEADING,
	HIGHLIGHT,
	INLINE_CODE,
	ITALIC_STAR,
	ITALIC_UNDERSCORE,
	LINK,
	ORDERED_LIST,
	registerMarkdownShortcuts,
	STRIKETHROUGH,
	TEXT_FORMAT_TRANSFORMERS,
	TEXT_MATCH_TRANSFORMERS,
	TextFormatTransformer,
	TextMatchTransformer,
	Transformer,
	TRANSFORMERS,
	UNORDERED_LIST
}
