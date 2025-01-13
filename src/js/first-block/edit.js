import { useBlockProps } from '@wordpress/block-editor';

const edit = (props) => {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <span>Test</span>
        </div>
    )
}

export default edit;