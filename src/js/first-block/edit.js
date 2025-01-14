import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl, AnglePickerControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const edit = ({attributes, setAttributes}) => {
    const blockProps = useBlockProps();
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Nos paramètres de bloc">
                    <RangeControl
                        label="Points"
                        value={attributes.point}
                        onChange={(point)=>setAttributes({point: point})}
                        min={ 0 }
                        max={ 10 }
                    />
                    <AnglePickerControl
                        label="Rotation"
                        value={attributes.angle}
                        onChange={(angle)=>setAttributes({angle: angle})}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <span class="wp-block-tutoriel-gutenberg-first-block__text" style={{'--rotate': `rotate(${attributes.angle}deg)`}}>Test {attributes.point}</span>
            </div>
        </Fragment>
    );
};

export default edit;
