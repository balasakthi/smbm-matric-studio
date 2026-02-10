import { defineField, defineType } from 'sanity'

export const link = defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
            title: 'Label',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'href',
            type: 'url',
            title: 'URL',
            validation: (rule) => rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
        }),
    ],
})
