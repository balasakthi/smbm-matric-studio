import { defineField, defineType } from 'sanity'

export const accessibleImage = defineType({
    name: 'accessibleImage',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'Important for SEO and accessiblity.',
            validation: (rule) => rule.required(),
        }),
    ],
})
