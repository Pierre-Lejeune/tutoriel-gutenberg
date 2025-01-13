import { useBlockProps } from '@wordpress/block-editor';

const save = ({attributes}) => {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <span>Test {attributes.point}</span>
        </div>
    )
}

export default save;