import { registerFormatType } from '@wordpress/rich-text';
import highlight from './highlight';

// Liste des formats personnalisés à enregistrer
const textFormats = [
    highlight
];

// Enregistre les formats de texte
const addTextFormat = () => textFormats.map(format => registerFormatType(format.name, { ...format }));

export default addTextFormat;
