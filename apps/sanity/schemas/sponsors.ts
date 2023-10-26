import { defineType, defineField, defineArrayMember } from "sanity";
import { HeartHandshake } from "lucide-react";

export default defineType({
	name: "sponsors",
	title: "Sponsors",
	icon: HeartHandshake,
	type: "document",
	fields: [
		defineField({
			name: "sponsors",
			title: "Sponsors",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					name: "sponsor",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
						}),
						defineField({
							name: "url",
							title: "URL",
							type: "url",
						}),
						defineField({
							name: "logo",
							title: "Logo",
							type: "image",
						}),
					],
				}),
			],
		}),
	],
});
