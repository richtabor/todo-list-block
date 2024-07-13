/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
import { SVG, Path, G } from '@wordpress/components';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';

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
				<Path
					clipRule="evenodd"
					d="m12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9zm-.0001-1.6249c4.0732 0 7.3751-3.3019 7.3751-7.375 0-4.07316-3.3019-7.37508-7.3751-7.37508-4.07308 0-7.375 3.30192-7.375 7.37508 0 4.0731 3.30192 7.375 7.375 7.375z"
					fillRule="evenodd"
				/>
				<Path d="m16.5 12c0 2.4853-2.0147 4.5-4.5 4.5-2.48528 0-4.5-2.0147-4.5-4.5 0-2.48528 2.01472-4.5 4.5-4.5 2.4853 0 4.5 2.01472 4.5 4.5z" />
			</G>
		</SVG>
	),
	edit,
} );
