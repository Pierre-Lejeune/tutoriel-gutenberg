import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
import edit from "./edit";
import save from "./save";

// Enregistre le bloc avec ses options, son interface d'édition et son rendu final
const firstblock = () => registerBlockType(
    metadata.name,
    {
        ...metadata,
        edit,
        save
    }
);

export default firstblock;
