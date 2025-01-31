import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl, AnglePickerControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const edit = ({ attributes, setAttributes }) => {

    const blockProps = useBlockProps(); //Récupère les propriétés HTML à afficher pour notre bloc en back-office

    const { point, angle } = attributes; //Récupère les attributs de notre bloc

    return (
        <Fragment>
            {/* Panneau de contrôle dans l'éditeur */}
            <InspectorControls>
                <PanelBody title="Nos paramètres de bloc">
                    <RangeControl
                        label="Points"
                        value={point}
                        onChange={point => setAttributes({ point })} 
                        min={0}
                        max={10}
                    />
                    <AnglePickerControl
                        label="Rotation"
                        value={angle}
                        onChange={angle => setAttributes({ angle })}
                    />
                </PanelBody>
            </InspectorControls>

            {/* Contenu du bloc affiché dans l'éditeur */}
            <div {...blockProps}>
                <span className="wp-block-tutoriel-gutenberg-first-block__text" style={{ '--rotate': `rotate(${angle}deg)` }}>
                    Test {point}
                </span>
            </div>
        </Fragment>
    );
};

export default edit;
