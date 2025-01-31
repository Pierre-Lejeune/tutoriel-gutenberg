import { registerBlockStyle } from "@wordpress/blocks";

const blockStyles = [
    {
        'name': 'core/group',
        'styles': [
            {
                name: 'full-height',
                label: "Full height" // Ajoute un style personnalisé "Full height" au bloc Group
            }
        ]
    }
];

const addBlockStyle = () => {
    blockStyles.map(bloc => registerBlockStyle(bloc.name, bloc.styles));
};

export default addBlockStyle;
