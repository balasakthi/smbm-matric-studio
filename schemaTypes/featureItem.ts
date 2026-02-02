import {defineType, defineField} from 'sanity'

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name (e.g., Blocks, BookOpenText, GraduationCap)',
      validation: (rule) => rule.required(),
    }),
  ],
})
