import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect, Fragment} from '@wordpress/element';
import { SelectControl, PanelBody} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { page_id } = attributes;
    
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiFetch({ path: '/wp/v2/pages?per_page=100' })
            .then((response) => {
                const options = response.map((page) => ({
                    value: page.id,
                    label: page.title.rendered || `Page ${page.id}`,
                }));
                setPages(options);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des pages :', error);
                setPages([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Paramètre de ma query">
                    {isLoading ? (
                        <p>Chargement des pages...</p>
                    ) : (
                        <SelectControl
                            label="Sélectionnez une page"
                            value={page_id}
                            options={[
                                { label: 'Aucune sélection', value: 0 },
                                ...pages,
                            ]}
                            onChange={(page_id) => setAttributes({ page_id })}
                        />
                    )}
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <ServerSideRender
                    block="tutoriel-gutenberg/query"
                    attributes={attributes}
                />
            </div>
        </Fragment>
    );
};

export default edit;