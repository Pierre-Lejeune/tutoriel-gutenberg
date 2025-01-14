import {InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {Fragment} from "@wordpress/element";
import {PanelBody} from "@wordpress/components";

const edit = ({attributes, setAttributes}) => {
    const blockProps = useBlockProps();
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="test">
                    <button onClick={()=>{setAttributes({point: attributes.point-1})}}>Décrémenter</button>
                    <button onClick={()=>{setAttributes({point: attributes.point+1})}}>Incrémenter</button>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <span>Test {attributes.point}</span>
            </div>
        </Fragment>
    );
};

export default edit;
