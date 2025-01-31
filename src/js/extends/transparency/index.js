import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const transparency = {
    name: 'transparency',
    blocks: ['core/heading', 'core/group', 'tutoriel-gutenberg/first-block'], // Blocs affectés
    attributes: {
       transparency: {
           type: "number",
           default: 100 // Transparence à 100% par défaut
       }
    },
    Controls: ({ attributes, setAttributes }) => {
        const { transparency } = attributes;
        return (
            <InspectorControls>
                <PanelBody title={"Transparency parameter"}>
                    <RangeControl
                        label={"Transparency in %"}
                        step={1}
                        value={transparency}
                        onChange={transparency => setAttributes({ transparency })}
                        min={0}
                        max={100}
                    />
                </PanelBody>
            </InspectorControls>
        );
    },
    newPropsEdit: (props, attributes) => {
        const { transparency } = attributes;
        let wrapperPropsStyle = props.wrapperProps ? { ...props.wrapperProps.style } : {};

        if (transparency !== 100) {
            wrapperPropsStyle['--transparency'] = `${transparency}%`;
        }

        return {
            wrapperProps: {
                ...props.wrapperProps,
                style: wrapperPropsStyle
            }
        };
    },
    newPropsSave: (props, attributes) => {
        const { transparency } = attributes;
        let style = { ...props.style };

        if (transparency !== 100) {
            style['--transparency'] = `${transparency}%`;
        }

        return {
            ...props,
            style
        };
    }
};

export default transparency;
