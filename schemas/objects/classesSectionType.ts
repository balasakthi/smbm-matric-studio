import {defineArrayMember, defineField, defineType} from 'sanity'

export const classesSectionType = defineType({
  name: 'classesSection',
  title: 'Classes Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Classes title is required.'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [defineArrayMember({type: 'classItem'})],
      validation: (Rule) => Rule.min(1).error('At least one class is required.'),
    }),
  ],
})
