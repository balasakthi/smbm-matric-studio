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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Delivering meaningful learning through innovative and engaging practices',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'content',
      title: 'Conent',
      type: 'array',
      of: [defineArrayMember({type: 'contentBlock'})],
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
