/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { ToolbarButton, SVG, Path, G } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Block constants.
 */
const DEFAULT_BLOCK = {
	name: 'tabor/todo-item',
	attributesToCopy: [
		'backgroundColor',
		'border',
		'className',
		'fontFamily',
		'fontSize',
		'gradient',
		'style',
		'textColor',
		'width',
	],
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function TodoBlock( { updateBlockAttributes, innerBlocks, className } ) {
	const [ isAllChecked, setAllChecked ] = useState( true );

	const blockProps = useBlockProps( {
		className: classnames( className ),
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		defaultBlock: DEFAULT_BLOCK,
		directInsert: true,
		template: [ [ 'tabor/todo-item' ] ],
		templateInsertUpdatesSelection: true,
		__experimentalCaptureToolbars: true,
		orientation: 'vertical',
	} );

	function updateInnerAttributes( blockName, newAttributes ) {
		innerBlocks.forEach( ( item ) => {
			if ( item.name === blockName ) {
				updateBlockAttributes( item.clientId, newAttributes );
			}
		} );
	}

	function onCheckAll() {
		if ( ! isAllChecked ) {
			setAllChecked( true );
		} else {
			setAllChecked( false );
		}
	}

	function onClickInnerBlocks() {
		onCheckAll();
		updateInnerAttributes( 'tabor/todo-item', {
			checked: isAllChecked,
		} );
	}

	return (
		<>
			<BlockControls group="other">
				<ToolbarButton
					icon={
						isAllChecked ? (
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
						) : (
							<SVG fill="none" viewBox="0 0 24 24">
								<Path
									clipRule="evenodd"
									d="m12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9zm-.0001-1.6249c4.0732 0 7.3751-3.3019 7.3751-7.375 0-4.07316-3.3019-7.37508-7.3751-7.37508-4.07308 0-7.375 3.30192-7.375 7.37508 0 4.0731 3.30192 7.375 7.375 7.375z"
									fill="currentColor"
									fillRule="evenodd"
								/>
							</SVG>
						)
					}
					label={
						isAllChecked
							? __( 'Mark all complete', 'todo-list-block' )
							: __( 'Mark all incomplete', 'todo-list-block' )
					}
					onClick={ onClickInnerBlocks }
				>
					{ isAllChecked
						? __( 'Mark all complete', 'todo-list-block' )
						: __( 'Mark all incomplete', 'todo-list-block' ) }
				</ToolbarButton>
			</BlockControls>
			<div { ...innerBlocksProps } />
		</>
	);
}

const applyWithSelect = withSelect( ( select, blockData ) => {
	return {
		innerBlocks: select( 'core/block-editor' ).getBlocks(
			blockData.clientId
		),
	};
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { updateBlockAttributes } = dispatch( 'core/block-editor' );

	return {
		updateBlockAttributes,
	};
} );

export default compose( [ applyWithSelect, applyWithDispatch ] )( TodoBlock );
