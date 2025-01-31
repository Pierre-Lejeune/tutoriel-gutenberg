import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import transparency from './transparency';

// Récupère toutes les extensions à ajouter à Gutenberg
export const getGutenbergExtends = () => [
    transparency // Ajoute l'extension "transparency"
];

// Enregistre une extension Gutenberg
const registerGutenbergExtend = (extension) => {
    const { name, blocks, attributes, Controls, newPropsEdit, newPropsSave } = extension;

    // Ajoute les nouveaux attributs aux blocs ciblés
    addFilter(
        'blocks.registerBlockType',
        `tutoriel-gutenberg/${name}/attributes`,
        (settings, name) => {
            if (blocks.indexOf(name) !== -1) {
                settings.attributes = {
                    ...settings.attributes,
                    ...attributes // Ajoute les nouveaux attributs définis par l'extension
                };
            }
            return settings;
        }
    );

    // Ajoute des contrôles supplémentaires dans l'inspecteur de bloc
    addFilter(
        'editor.BlockEdit',
        `tutoriel-gutenberg/${name}/controls`,
        createHigherOrderComponent((BlockEdit) => {
            return (props) => {
                if (blocks.indexOf(props.name) === -1) return <BlockEdit {...props} />;
                return (
                    <>
                        <BlockEdit {...props} />
                        <Controls {...props} /> {/* Ajoute les contrôles personnalisés */}
                    </>
                );
            };
        }, 'withInspectorControl')
    );

    // Ajoute des propriétés supplémentaires à l'enregistrement du bloc
    addFilter(
        'blocks.getSaveContent.extraProps',
        `tutoriel-gutenberg/${name}/props`,
        (extraProps, blockType, attributes) => {
            if (blocks.indexOf(blockType.name) === -1) return extraProps;
            return { ...extraProps, ...newPropsSave(extraProps, attributes) };
        }
    );

    // Ajoute des propriétés au rendu de l'éditeur (ex : classes CSS supplémentaires)
    addFilter(
        'editor.BlockListBlock',
        `tutoriel-gutenberg/${name}/editor`,
        createHigherOrderComponent((BlockListBlock) => {
            return (props) => {
                if (blocks.indexOf(props.name) !== -1) {
                    props = {
                        ...props,
                        ...newPropsEdit(props, props.attributes) // Modifie les props éditables
                    };
                }
                return <BlockListBlock {...props} />;
            };
        }, 'withBlockListBlockClass')
    );
};

// Applique toutes les extensions définies
const extendsGutenbergBlocks = (extensions = getGutenbergExtends()) => 
    extensions.forEach(registerGutenbergExtend);

export default extendsGutenbergBlocks;
