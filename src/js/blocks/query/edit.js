import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect, Fragment } from '@wordpress/element';
import { SelectControl, PanelBody } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { page_id } = attributes;
    
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Récupère la liste des pages disponibles via l'API REST de WordPress
        apiFetch({ path: '/wp/v2/pages?per_page=100' })
            .then((response) => {
                // Transforme la réponse en un tableau d'options pour le SelectControl
                const options = response.map((page) => ({
                    value: page.id,
                    label: page.title.rendered || `Page ${page.id}`,
                }));
                setPages(options);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des pages :', error);
                setPages([]); // Évite un état non défini en cas d'erreur
            })
            .finally(() => {
                setIsLoading(false); // Désactive l'état de chargement
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
                {/* Rend le bloc dynamiquement côté serveur */}
                <ServerSideRender
                    block="tutoriel-gutenberg/query"
                    attributes={attributes}
                />
            </div>
        </Fragment>
    );
};

export default edit;
