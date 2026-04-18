import {defineArrayMember, defineField, defineType} from 'sanity'

export const learningApproachSectionType = defineType({
  name: 'learningApproachSection',
  title: 'Learning Approach Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our Learning Approach',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'A dynamic blend of innovation, creativity and student-focused education',
    }),
    defineField({
      name: 'points',
      title: 'Approach Points',
      type: 'array',
      of: [defineArrayMember({type: 'approachPoint'})],
      validation: (Rule) => Rule.min(3).max(6),
    }),
  ],
})
