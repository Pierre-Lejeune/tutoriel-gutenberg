import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import edit from "./edit";
import save from "./save";

const firstblock = () => registerBlockType(
    metadata.name, 
    {
        ...metadata, 
        edit, 
        save
    }
);

export default firstblock;