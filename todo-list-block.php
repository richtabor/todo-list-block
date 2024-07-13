<?php
/**
 * Plugin Name:       Todo List Block
 * Description:       A WordPress block for adding todo lists to posts that render only within the block editor.
 * Plugin URI:        https://rich.blog/todo-list-block?utm_source=wp-plugins&utm_medium=todo-list-block&utm_campaign=plugin-uri
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.5
 * Author:            Rich Tabor
 * Author URI:        https://rich.blog/?utm_source=wp-plugins&utm_medium=todo-list-block&utm_campaign=author-uri
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list-block
 *
 * @package           tabor/todo-list-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function tabor_todo_list_block_init() {

	register_block_type_from_metadata( __DIR__ );
	register_block_type_from_metadata( __DIR__ . '/src/todo-item' );

}
add_action( 'init', 'tabor_todo_list_block_init' );
