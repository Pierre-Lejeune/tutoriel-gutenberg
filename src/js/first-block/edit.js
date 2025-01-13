import {Fragment} from "@wordpress/element";

const edit = ({attributes, setAttributes}) => {
    return (
        <Fragment>
            <button onClick={()=>{setAttributes({point: attributes.point-1})}}>Décrémenter</button>
            <span>Test {attributes.point}</span>
            <button onClick={()=>{setAttributes({point: attributes.point+1})}}>Incrémenter</button>
        </Fragment>
    );
};

export default edit;
