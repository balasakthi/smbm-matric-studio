import {defineField, defineType} from 'sanity'

export const contactSectionType = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'reference',
      to: [{type: 'contactInfo'}],
      weak: true,
      validation: (Rule) => Rule.required().error('A contact details reference is required.'),
    }),
  ],
})
