import urlImageBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import ResourceCard from "../../components/ResourceCard/ResourceCard";
import { getResources } from "../../getResources";
import { client } from "@/lib/sanity/client";

import styles from "./FrontendResources.module.scss";

async function FrontendResources() {
	const resources = await getResources("frontend");
	return (
		<div className="container">
			<div className={styles.card}>
				<h2 className={styles.title}>Frontend Framework Resources</h2>
				<p className={styles.text}>
					Frontend frameworks aid in the design of user interfaces and
					experiences. Your users will interact with your services through the
					frontend.
				</p>
			</div>
			<div className={styles["bottom-spacer"] + " row"}>
				{resources.map(
					({ _id, title, description, link, logo, stickyNoteColor }) => (
						<div className={styles.column + " col"} key={_id}>
							<ResourceCard
								title={title}
								description={<PortableText value={description} />}
								stickerSrc={urlImageBuilder(client).image(logo).url()}
								stickyNoteColor={stickyNoteColor.hex}
								links={[{ text: "Reference", link: link }]}
							/>
						</div>
					),
				)}
			</div>
		</div>
	);
}

export default FrontendResources;
