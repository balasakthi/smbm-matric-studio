import { defineField, defineType } from 'sanity'

export const admissionGuidelines = defineType({
  name: 'admissionGuidelinesSection',
  title: 'Admission Guidelines Section',
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
      name: 'steps',
      title: 'Admission Guidelines',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})
