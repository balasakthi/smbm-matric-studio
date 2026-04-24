import {defineField, defineType} from 'sanity'

export const studentLifeSectionType = defineType({
  name: 'studentLifeSection',
  title: 'Student Life Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Student Life at S.M.B.M.',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Student Life Items',
      type: 'array',
      of: [{type: 'studentLifeItem'}],
    }),
  ],
})
