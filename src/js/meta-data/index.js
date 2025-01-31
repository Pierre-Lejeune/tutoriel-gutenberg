import { registerPlugin } from "@wordpress/plugins";
import { __ } from "@wordpress/i18n";
import VisibleMeta from "./visible";

// Enregistre un plugin WordPress pour ajouter un panneau de métadonnées
const addMetaData = () => {
    registerPlugin("tutoriel-gutenberg-visible-meta-sidebar", {
		render: VisibleMeta // Affiche le composant `VisibleMeta` dans la sidebar de l'éditeur
	});
}

export default addMetaData;
