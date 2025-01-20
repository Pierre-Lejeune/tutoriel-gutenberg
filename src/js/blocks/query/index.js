import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';
const query = () => registerBlockType(metadata.name, {
    ...metadata,
    edit
});
export default query;
