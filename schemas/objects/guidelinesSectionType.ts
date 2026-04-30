import {defineArrayMember, defineField, defineType} from 'sanity'

export const guidelinesSectionType = defineType({
  name: 'guidelinesSection',
  title: 'Guidelines Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'guidelines',
      title: 'Guidelines',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
})
