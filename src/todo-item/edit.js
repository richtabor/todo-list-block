/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { CheckboxControl } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function TodoItemBlock( {
	attributes,
	mergeBlocks,
	onReplace,
	insertBlocksAfter,
	setAttributes,
	clientId,
} ) {
	const { content, checked } = attributes;

	const blockProps = useBlockProps( {
		className: classnames( {
			'is-checked': checked,
		} ),
	} );

	function onChange( attribute ) {
		return ( newValue ) => {
			setAttributes( { [ attribute ]: newValue } );
		};
	}

	return (
		<>
			<div { ...blockProps }>
				<CheckboxControl
					checked={ !! checked }
					onChange={ onChange( 'checked' ) }
				/>
				<RichText
					identifier="content"
					tagName="p"
					value={ content }
					multiline={ false }
					onChange={ onChange( 'content' ) }
					onSplit={ ( value, isOriginal ) => {
						let block;

						if ( isOriginal || value ) {
							block = createBlock( 'tabor/todo-item', {
								...attributes,
								content: value,
							} );
						} else {
							block = createBlock( 'tabor/todo-item' );
						}

						if ( isOriginal ) {
							block.clientId = clientId;
						}

						return block;
					} }
					onMerge={ mergeBlocks }
					onReplace={ onReplace }
					onRemove={ () => onReplace( [] ) }
					aria-label={
						content
							? __( 'Todo list block', 'todo-list-block' )
							: __(
									'Empty block; start writing to add a todo list item',
									'todo-list-block'
							  )
					}
					data-empty={ content ? false : true }
					placeholder={ __( 'Add todo item', 'todo-list-block' ) }
					allowedFormats={ [] }
					__unstableAllowPrefixTransformations
					__unstableOnSplitAtEnd={ () =>
						insertBlocksAfter( createBlock( 'core/paragraph' ) )
					}
				/>
			</div>
		</>
	);
}

export default TodoItemBlock;
