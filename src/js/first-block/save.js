import { useBlockProps } from '@wordpress/block-editor';

const save = ({attributes}) => {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <span class="wp-block-tutoriel-gutenberg-first-block__text" style={{'--rotate': `rotate(${attributes.angle}deg)`}}>Test {attributes.point+""}</span>
        </div>
    )
}

export default save;