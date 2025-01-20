import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import transparency from './transparency';

export const getGutenbergExtends = () => [
    transparency
];

const registerGutenbergExtend = (extension) => {
    const { name, blocks, attributes, Controls, newPropsEdit, newPropsSave } = extension;

    addFilter(
        'blocks.registerBlockType',
        `tutoriel-gutenberg/${name}/attributes`,
        (settings, name) => {
            if (blocks.indexOf(name) !== -1) {
                settings.attributes = {
                    ...settings.attributes,
                    ...attributes
                };
            }
            return settings;
        }
    );

    addFilter(
        'editor.BlockEdit',
        `tutoriel-gutenberg/${name}/controls`,
        createHigherOrderComponent((BlockEdit) => {
            return (props) => {
                if (blocks.indexOf(props.name) === -1) return <BlockEdit {...props} />;
                    return (
                        <>
                            <BlockEdit {...props} />
                            <Controls {...props} />
                        </>
                    );
                
            };
        }, 'withInspectorControl')
    );

    addFilter(
        'blocks.getSaveContent.extraProps',
        `tutoriel-gutenberg/${name}/props`,
        (extraProps, blockType, attributes) => {
            if (blocks.indexOf(blockType.name) === -1) return extraProps;
            return {...extraProps, ...newPropsSave(extraProps, attributes)};
        }
    );

    addFilter(
        'editor.BlockListBlock',
        `tutoriel-gutenberg/${name}/editor`,
        createHigherOrderComponent((BlockListBlock) => {
            return (props) => {
                if (blocks.indexOf(props.name) !== -1) {
                    props = {
                        ...props,
                        ...newPropsEdit(props, props.attributes)
                    };
                }
                return <BlockListBlock {...props} />;
            };
        }, 'withBlockListBlockClass')
    );
}
const extendsGutenbergBlocks = (extensions = getGutenbergExtends()) => extensions.forEach(registerGutenbergExtend);
export default extendsGutenbergBlocks;
