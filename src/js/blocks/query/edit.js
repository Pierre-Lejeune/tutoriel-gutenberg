import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps } from "@wordpress/block-editor";

const edit = ({ attributes }) => {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <ServerSideRender
                block="tutoriel-gutenberg/query"
                attributes={attributes}
            />
        </div>
    );
};

export default edit;
