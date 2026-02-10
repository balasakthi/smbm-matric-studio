import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trustLine',
      title: 'Trust Line',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slides',
      title: 'Carousel Slides',
      type: 'array',
      of: [{ type: 'accessibleImage' }],
      validation: (rule) => rule.required().min(1),
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description: 'Name of the icon from the icon library',
            },
            {
              name: 'text',
              type: 'string',
              title: 'Highlight Text',
            },
          ],
        },
      ],
    }),
  ],
})
