import { toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

// Composant pour ajouter un bouton dans la barre d'outils de l'éditeur de texte
const highLightTextFormat = ({ isActive, value, onChange }) => {
    return (
        <RichTextToolbarButton
            icon="button"
            title="Test"
            onClick={() => {
                onChange(
                    toggleFormat(value, { type: 'tutoriel-gutenberg/highlight' }) // Active/désactive le surlignage
                );
            }}
            isActive={isActive} // Indique si le format est actif
        />
    );
}

// Définition du format de texte personnalisé
const highlight = {
    name: "tutoriel-gutenberg/highlight",
    title: "High light",
    tagName: 'span',
    className: "highlight", // Ajoute une classe CSS `highlight` au texte surligné
    edit: highLightTextFormat
}

export default highlight;
