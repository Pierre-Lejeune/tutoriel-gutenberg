import { registerFormatType } from '@wordpress/rich-text';
import highlight from './highlight';

const textFormats = [
    highlight
]

const addTextFormat = () => textFormats.map(format => registerFormatType(format.name, {...format}));
export default addTextFormat;