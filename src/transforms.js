/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import {
	__UNSTABLE_LINE_SEPARATOR,
	create,
	split,
	toHTMLString,
} from '@wordpress/rich-text';

const transforms = {
	to: [],
	from: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'tabor/markdown-comment' ],
			transform: ( comments ) =>
				createBlock(
					'tabor/todo-list',
					{},
					comments.map( ( attributes ) =>
						createBlock( 'tabor/todo-item', attributes )
					)
				),
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'core/paragraph' ],
			transform: ( comments ) =>
				createBlock(
					'tabor/todo-list',
					{},
					comments.map( ( attributes ) =>
						createBlock( 'tabor/todo-item', attributes )
					)
				),
		},
		{
			type: 'block',
			blocks: [ 'core/list' ],
			transform: ( { values } ) =>
				createBlock(
					'tabor/todo-list',
					{},
					split(
						create( {
							html: values,
							multilineTag: 'li',
							multilineWrapperTags: [ 'ul', 'ol' ],
						} ),
						__UNSTABLE_LINE_SEPARATOR
					).map( ( piece ) =>
						createBlock( 'tabor/todo-item', {
							content: toHTMLString( { value: piece } ),
						} )
					)
				),
		},
		{
			type: 'enter',
			regExp: /^[]$/,
			transform: () => createBlock( 'tabor/todo-list' ),
		},
		{
			type: 'prefix',
			prefix: '[]',
			transform: () => createBlock( 'tabor/todo-list' ),
		},
		{
			type: 'enter',
			regExp: /^-[]$/,
			transform: () => createBlock( 'tabor/todo-list' ),
		},
		{
			type: 'prefix',
			prefix: '-[]',
			transform: () => createBlock( 'tabor/todo-list' ),
		},
	],
};

export default transforms;
