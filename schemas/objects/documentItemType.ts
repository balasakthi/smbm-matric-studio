import {defineField, defineType} from 'sanity'

export const documentItemType = defineType({
  name: 'documentItem',
  title: 'Document Item',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Eg: school, book-open, building, users',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label'},
  },
})
