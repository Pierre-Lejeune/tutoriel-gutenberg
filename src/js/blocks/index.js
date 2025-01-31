import firstblock from "./first-block";
import query from "./query";

// Initialise les blocs sur mesure
const initBlocks = () => {
    firstblock(); // Enregistre le premier bloc personnalisé
    query(); // Enregistre le bloc de requête personnalisé
};

export default initBlocks;
