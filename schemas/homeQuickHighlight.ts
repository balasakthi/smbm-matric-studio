import {defineField, defineType} from 'sanity'

export const homeQuickHighlight = defineType({
  name: 'homeQuickHighlight',
  title: 'Home Page – Quick Highlight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(40),
    }),

    defineField({
      name: 'description',
      title: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(120),
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Eg: school, book-open, building, users',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
