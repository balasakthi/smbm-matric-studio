import {defineArrayMember, defineField, defineType} from 'sanity'

export const academicsOverviewSectionType = defineType({
  name: 'academicsOverviewSection',
  title: 'Academics Overview Section',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subtitle', type: 'string'}),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string'}],
    }),
    defineField({
      name: 'highlights',
      title: 'Academic highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Highlights specific to the academics page',
    }),
  ],
})
