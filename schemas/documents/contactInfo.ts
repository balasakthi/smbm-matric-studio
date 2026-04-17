import {defineType, defineField, defineArrayMember} from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'officeHours',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'days', type: 'string'}),
            defineField({name: 'timing', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'phones',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'emails',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({name: 'address', type: 'array', of: [{type: 'block'}]}),
  ],
})
