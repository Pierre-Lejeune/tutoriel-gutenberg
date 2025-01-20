import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

const VisibleMeta = () => {
    return (
        <PluginDocumentSettingPanel
            key={"visible-meta"}
            name={"visible-meta"}
            title={"Visible meta"}
            className="custom-meta-panel"
        >
            <p>Nos paramètres de méta-donnée</p>
        </PluginDocumentSettingPanel>
    )
}

export default VisibleMeta;