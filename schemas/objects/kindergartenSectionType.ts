import {defineArrayMember, defineField, defineType} from 'sanity'

export const kindergartenSectionType = defineType({
  name: 'kindergartenSection',
  title: 'Kindergarten Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Kindergarten',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
})
