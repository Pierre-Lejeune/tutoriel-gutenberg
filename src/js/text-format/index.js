import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const customTextFormat = ({ isActive, value, onChange }) => {
    return (
        <RichTextToolbarButton
            icon="button"
            title="Test"
            onClick={ () => {
                onChange(
                    toggleFormat(value,{type:'tutoriel-gutenberg/test'})
                )
            } }
            isActive={isActive}
        />
    );
}

const addTextFormat = () => {
    registerFormatType('tutoriel-gutenberg/test', {
        title: "Test",
        tagName: 'span',
        className: "test",
        edit: customTextFormat
    });
}
export default addTextFormat;