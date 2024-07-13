/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path, G } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';

/**
 * Import child block
 */
import './todo-item';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	...metadata,
	icon: (
		<SVG fill="none" viewBox="0 0 24 24">
			<G fill="currentColor">
				<G clipRule="evenodd" fillRule="evenodd">
					<Path d="m13 6.75h7v1.5h-7z" />
					<Path d="m13 15.75h7v1.5h-7z" />
					<Path d="m7.5 10.9688c1.933 0 3.5-1.56705 3.5-3.50005s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.50005 3.5 3.50005zm0-1.5938c1.05279 0 1.90625-.85346 1.90625-1.90625s-.85346-1.90625-1.90625-1.90625-1.90625.85346-1.90625 1.90625.85346 1.90625 1.90625 1.90625z" />
					<Path d="m7.5 19.9688c1.933 0 3.5-1.5671 3.5-3.5 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.9329 1.567 3.5 3.5 3.5zm0-1.5938c1.05279 0 1.90625-.8535 1.90625-1.9062 0-1.0528-.85346-1.9063-1.90625-1.9063s-1.90625.8535-1.90625 1.9063c0 1.0527.85346 1.9062 1.90625 1.9062z" />
				</G>
				<Path d="m8.5 7.46875c0 .55228-.44772 1-1 1s-1-.44772-1-1 .44772-1 1-1 1 .44772 1 1z" />
			</G>
		</SVG>
	),
	example: {
		innerBlocks: [
			{
				name: 'tabor/todo-item',
				attributes: {
					content: __( 'Use an active voice' ),
					checked: true,
				},
			},
			{
				name: 'tabor/todo-item',
				attributes: {
					content: __( 'Add supporting media' ),
					checked: true,
				},
			},
			{
				name: 'tabor/todo-item',
				attributes: {
					content: __( 'Add social images' ),
					checked: false,
				},
			},
			{
				name: 'tabor/todo-item',
				attributes: {
					content: __( 'Subscribe to Shaping WordPress' ),
					checked: false,
				},
			},
		],
	},
	transforms,
	edit,
	save,
} );
