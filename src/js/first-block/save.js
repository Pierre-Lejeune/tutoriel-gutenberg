import { useBlockProps } from '@wordpress/block-editor';

const save = (props) => {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <span>Test</span>
        </div>
    )
}

export default save;