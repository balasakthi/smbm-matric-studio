import {defineArrayMember, defineField, defineType} from 'sanity'

export const documentsSectionType = defineType({
  name: 'documentsSection',
  title: 'Documents Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'string'}),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [defineArrayMember({type: 'documentItem'})],
    }),
  ],
})
