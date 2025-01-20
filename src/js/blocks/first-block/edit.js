import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl, AnglePickerControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const edit = ({attributes, setAttributes}) => {
    const blockProps = useBlockProps();
    const { point, angle } = attributes;
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Nos paramètres de bloc">
                    <RangeControl
                        label="Points"
                        value={point}
                        onChange={point=>setAttributes({point})}
                        min={ 0 }
                        max={ 10 }
                    />
                    <AnglePickerControl
                        label="Rotation"
                        value={angle}
                        onChange={angle=>setAttributes({angle})}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <span class="wp-block-tutoriel-gutenberg-first-block__text" style={{'--rotate': `rotate(${angle}deg)`}}>Test {point}</span>
            </div>
        </Fragment>
    );
};

export default edit;
