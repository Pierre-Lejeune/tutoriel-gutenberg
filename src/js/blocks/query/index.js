import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';

// Enregistre le bloc "query" avec uniquement une interface d'édition (pas de fonction save, car rendu côté serveur)
const query = () => registerBlockType(metadata.name, {
    ...metadata,
    edit
});

export default query;
