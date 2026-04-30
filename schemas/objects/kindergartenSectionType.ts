import {defineField, defineType} from 'sanity'

export const kindergartenSectionType = defineType({
  name: 'kindergartenSection',
  title: 'Kindergarten Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string'}],
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [{type: 'contentBlock'}],
    }),
  ],
})
