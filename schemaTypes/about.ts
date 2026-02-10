import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'accessibleImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'knowMoreAction',
      title: 'Know More Action',
      type: 'link',
    }),
  ],
})
