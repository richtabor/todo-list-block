=== Todo List Block ===
Contributors:      richtabor
Tags:              gutenberg, block, blocks, markdown, todo
Tested up to:      6.0
Stable tag:        0.1.4
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Add todo lists to posts that render only within the block editor.

== Description ==

#### Editor-friendly blocks
While diving into this project I’ve explored a few areas where I can improve my personal publishing flow. The first was bringing editor comments into Gutenberg with my [Markdown Comment block](https://richtabor.com/markdown-comment/?utm_source=wp-org&utm_medium=todo-list-block&utm_campaign=readme), and this Todo List block.

Todo List is a simple, editor-only block designed to quickly add tasks directly within the editor.

Todo List makes it easy to keep track of those tasks, all in the context of a particular post. You may also use it to add a publishing checklist to the post, such as using a headline analyzer, adding featured images, adding social images, etc.

#### Transforms
I’m a huge fan of blocks transforms and how they improve the WordPress publishing experience. Being able to morph a block into another, without loosing content/attributes, is a powerful way to level-up editing.

That saying, you may transform paragraph text, list items and even editorial comments added by Markdown Comment directly into actionable todos, just like you can in the iOS Notes app for example. You may even take multiple blocks of the sort and convert them all into a single todo list.

Todo List also supports block prefixes, which are keyboard shortcuts in a sense, to toss blocks in the editor with a few keystrokes. Adding `[]`, or `-[]` plus the `space` key will add a Todo List to the page.

== Installation ==
1. Upload the `todo-list-block` folder to your `/wp-content/plugins/` directory or alternatively upload the todo-list-block.zip file via the plugin page of WordPress by clicking 'Add New' and selecting the zip from your local computer.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Search for the block within the Gutenberg block editor.

== Frequently Asked Questions ==
= Can the Todo List block be used with my theme? =
Yes! If you're using Gutenberg (i.e. the block editor) on your site, you should have no issues with the block. It's relatively simple to modify the CSS variables to tweak the comment styling if you'd like — learn more [here](https://richtabor.com/todo-list-block/?utm_source=wp-org&utm_medium=todo-list-block&utm_campaign=readme-faq).

= Where can I send feedback or ideas? =
Please reach out via the official [plugin support forum](https://wordpress.org/support/plugin/todo-list-block).

= Who's Rich Tabor? =
As a WordPress entrepreneur, designer and developer all wrapped up in one, [@richard_tabor](http://twitter.com/richard_tabor) is recognized as one of the top leaders in this post-Gutenberg era of WordPress. His design chops have topped the 2018 Automattic Design Awards and led him to found CoBlocks – a top-notch set of page builder blocks and tools for Gutenberg, ThemeBeans – a premier WordPress theme shop and [Iceberg](https://useiceberg.com/?utm_source=wp-org&utm_medium=todo-list-block&utm_campaign=readme-faq) – a markdown editor for Gutenberg.

== Changelog ==

= 0.1.5 =
* Set default control for text color

= 0.1.4 =
* Add block.json to registerBlockType
* Add block title to register function

= 0.1.3 =
* WordPress 5.9 support

= 0.1.2 =
* Update readme

= 0.1.0 =
* Initial release
