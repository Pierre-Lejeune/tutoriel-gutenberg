import { toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const highLightTextFormat = ({ isActive, value, onChange }) => {
    return (
        <RichTextToolbarButton
            icon="button"
            title="Test"
            onClick={ () => {
                onChange(
                    toggleFormat(value,{type:'tutoriel-gutenberg/highlight'})
                )
            } }
            isActive={isActive}
        />
    );
}

const highlight = {
    name: "tutoriel-gutenberg/highlight",
    title: "High light",
    tagName: 'span',
    className: "highlight",
    edit: highLightTextFormat
}

export default highlight;