import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { CustomToggleControl } from '../../components';

const VisibleMeta = () => {
    // Récupère le type de post en cours d'édition
    const postType = useSelect((select) => select('core/editor').getCurrentPostType(), []);
    
    // Récupère les métadonnées associées au post
    const postMeta = useSelect((select) => select('core/editor').getEditedPostAttribute('meta'), []);
    
    // Permet de modifier les métadonnées du post
    const { editPost } = useDispatch('core/editor');

    const setMeta = (newMeta) => {
        editPost({ meta: { ...postMeta, ...newMeta } }); // Met à jour les métadonnées sans écraser les autres
    }

    return (
        <Fragment>
            {postType === "page" && (
                <PluginDocumentSettingPanel
                    key={"visible-meta"}
                    name={"visible-meta"}
                    title={"Visible meta"}
                    className="custom-meta-panel"
                >
                    <CustomToggleControl
                        label="Page visible ?"
                        checked={postMeta.visible} // Récupère la valeur actuelle
                        onChange={(visible) => setMeta({ visible })} // Met à jour la métadonnée `visible`
                    />
                </PluginDocumentSettingPanel>
            )}
        </Fragment>
    );
}

export default VisibleMeta;
