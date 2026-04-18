import {defineArrayMember, defineField, defineType} from 'sanity'

export const admissionContactSectionType = defineType({
  name: 'admissionContactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Contact title is required.'),
    }),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'array',
      of: [defineArrayMember({type: 'officeHours'})],
    }),
    defineField({
      name: 'phones',
      title: 'Phone Numbers',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.min(1).error('At least one phone number is required.'),
    }),
    defineField({
      name: 'emails',
      title: 'Email Addresses',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.min(1).error('At least one email address is required.'),
    }),
    defineField({name: 'address', title: 'Address', type: 'text'}),
  ],
})
