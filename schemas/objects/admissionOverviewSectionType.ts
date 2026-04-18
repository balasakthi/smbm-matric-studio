import {defineArrayMember, defineField, defineType} from 'sanity'

export const admissionOverviewSectionType = defineType({
  name: 'admissionOverviewSection',
  title: 'Overview Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Overview title is required.'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.min(1).error('At least one content block is required.'),
    }),
  ],
})
