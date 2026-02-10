import { defineType, defineField } from 'sanity'

export const callToAction = defineType({
  name: 'callToActionSection',
  title: 'Call To Action Section',
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
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
