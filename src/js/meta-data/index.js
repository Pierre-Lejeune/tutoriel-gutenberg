import { registerPlugin } from "@wordpress/plugins";
import { __ } from "@wordpress/i18n";
import VisibleMeta from "./visible";

const addMetaData = () => {
    registerPlugin("tutoriel-gutenberg-visible-meta-sidebar", {
		render: VisibleMeta
	});
}
export default addMetaData;
