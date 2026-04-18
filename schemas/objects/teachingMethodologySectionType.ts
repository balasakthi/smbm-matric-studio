import {defineArrayMember, defineField, defineType} from 'sanity'

export const teachingMethodologySectionType = defineType({
  name: 'teachingMethodologySection',
  title: 'Teaching Methodology Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Teaching Methodology',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Delivering meaningful learning through innovative and engaging practices',
    }),
    defineField({
      name: 'methodologies',
      title: 'Methodologies',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.min(4),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alternative Text', type: 'string'})],
    }),
  ],
})
