import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
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
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <span>Test {attributes.point}</span>
            </div>
        </Fragment>
    );
};

export default edit;
