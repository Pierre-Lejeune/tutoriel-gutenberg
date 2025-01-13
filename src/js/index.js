import { registerBlockType } from '@wordpress/blocks';
import firstblock from "./first-block/block.json";
import edit from './first-block/edit';
import save from './first-block/save';

registerBlockType('tutoriel-gutenberg/first-block', {...firstblock, edit, save});