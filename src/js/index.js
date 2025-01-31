import addBlockStyle from "./block-style";
import initBlocks from "./blocks";
import extendsGutenbergBlocks from "./extends";
import addMetaData from "./meta-data";
import removeUnusedBlocks from "./optimize";
import addTextFormat from "./text-format";

initBlocks(); // Charge les blocs personnalisés
extendsGutenbergBlocks(); // Étend les blocs Gutenberg existants
addMetaData(); // Ajoute les métadonnées personnalisées
addBlockStyle(); // Applique des styles spécifiques aux blocs
addTextFormat(); // Ajoute des formats de texte personnalisés
removeUnusedBlocks();