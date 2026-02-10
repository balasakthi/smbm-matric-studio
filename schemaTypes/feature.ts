import { defineType, defineField } from 'sanity'

export const feature = defineType({
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
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name (e.g., Blocks, BookOpenText, GraduationCap)',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'accessibleImage',
      description: 'Optional image if no icon is used',
    }),

    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
