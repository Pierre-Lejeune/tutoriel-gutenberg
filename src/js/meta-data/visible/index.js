import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { ToggleControl } from "@wordpress/components";

const VisibleMeta = () => {
    const postType = useSelect((select) => select('core/editor').getCurrentPostType(), []);
    const postMeta = useSelect((select) => select('core/editor').getEditedPostAttribute('meta'), []);
    const { editPost } = useDispatch('core/editor');

    const setMeta = (newMeta) => {
        editPost({meta: {...postMeta, ...newMeta}})
    }
    return (
        <Fragment>
            {postType==="page" && 
                <PluginDocumentSettingPanel
                    key={"visible-meta"}
                    name={"visible-meta"}
                    title={"Visible meta"}
                    className="custom-meta-panel"
                >
                    <ToggleControl
                        label="Page visible ?"
                        checked={ postMeta.visible }
                        onChange={ visible => setMeta({visible}) }
                    />
                </PluginDocumentSettingPanel>
            }
        </Fragment>
    )
}

export default VisibleMeta;