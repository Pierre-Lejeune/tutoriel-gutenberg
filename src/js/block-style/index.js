import {registerBlockStyle} from "@wordpress/blocks";

const blockStyles = [
    {
        'name': 'core/group',
        'styles': [
            {
                name: 'full-height',
                label: "Full height"
            }
        ]
    }
]

const addBlockStyle = () => {
    blockStyles.map(bloc => registerBlockStyle(bloc.name, bloc.styles))
}

export default addBlockStyle;