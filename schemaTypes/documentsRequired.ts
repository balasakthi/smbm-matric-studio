import { defineField, defineType } from 'sanity'

export const documentsRequired = defineType({
  name: 'documentsRequiredSection',
  title: 'Documents Required Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'documentsRequired',
      title: 'Documents Required',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
    }),
  ],
})
