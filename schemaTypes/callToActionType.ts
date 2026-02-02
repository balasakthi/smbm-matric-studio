import {defineType, defineField} from 'sanity'

export const callToActionType = defineType({
  name: 'callToActionSection',
  title: 'Call To Action Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'string',
    }),
  ],
})
