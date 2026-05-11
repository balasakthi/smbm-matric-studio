import {defineField, defineType} from 'sanity'

export const galleryCategoryType = defineType({
  name: 'galleryCategory',
  title: 'Gallery Main Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
