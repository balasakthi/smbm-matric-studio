import {defineArrayMember, defineField, defineType} from 'sanity'

export const processSectionType = defineType({
  name: 'processSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Process title is required.'),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(140).error('Intro is required and must be under 140 characters.'),
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [defineArrayMember({type: 'processStep'})],
      validation: (Rule) => Rule.min(1).error('At least one step is required.'),
    }),
  ],
})
