import domReady from '@wordpress/dom-ready';
import { select } from '@wordpress/data';
import { unregisterBlockType } from '@wordpress/blocks';

const removeUnusedBlocks = () => {
    domReady(() => {
        const blocksToKeep = [
            "core/block",
            "core/button",
            "core/buttons",
            "core/column",
            "core/columns",
            "core/cover",
            "core/details",
            "core/embed",
            "core/file",
            "core/gallery",
            "core/group",
            "core/heading",
            "core/home-link",
            "core/html",
            "core/image",
            "core/legacy-widget",
            "core/list-item",
            "core/list",
            "core/loginout",
            "core/media-text",
            "core/page-list-item",
            "core/paragraph",
            "core/post-author-name",
            "core/post-content",
            "core/post-date",
            "core/post-featured-image",
            "core/post-title",
            "core/quote",
            "core/separator",
            "core/site-logo",
            "core/site-title",
            "core/spacer",
            "core/table",
            "core/template-part",
            "core/widget-group"
        ];

        const allBlocks = select('core/blocks').getBlockTypes();
        allBlocks.forEach(block => {
            if (!blocksToKeep.includes(block.name)) {
                unregisterBlockType(block.name);
            }
        });

    });
}

export default removeUnusedBlocks;