import {defineField, defineType} from 'sanity'

export const quickHighlightSection = defineType({
  name: 'quickHighlightSection',
  title: 'Quick Highlight Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(40),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(120),
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Eg: school, book-open, building, users',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
})
