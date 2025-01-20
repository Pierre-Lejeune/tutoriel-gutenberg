import { useBlockProps } from '@wordpress/block-editor';

const save = ({attributes}) => {
    const blockProps = useBlockProps.save();
    const { angle, point } = attributes; 
    return (
        <div {...blockProps}>
            <span class="wp-block-tutoriel-gutenberg-first-block__text" style={{'--rotate': `rotate(${angle}deg)`}}>Test {point+""}</span>
        </div>
    )
}

export default save;