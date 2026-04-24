import {defineField, defineType} from 'sanity'

export const overviewSectionType = defineType({
  name: 'overviewSection',
  title: 'Overview Section',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subtitle', type: 'string'}),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string'}],
    }),
  ],
})
