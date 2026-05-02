import {defineField} from 'sanity'

export const imageField = [
  defineField({
    name: 'image',
    title: 'Section Image',
    type: 'image',
    description: 'Full-width section image.',
    options: {hotspot: true},
    validation: (Rule) => Rule.required().assetRequired(),
    fields: [
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alt Text',
        description: 'SEO and accessibility description for screen readers.',
      }),
    ],
  }),
]
