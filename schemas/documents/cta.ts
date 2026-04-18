import {defineField, defineType} from 'sanity'

export const CTA = defineType({
  name: 'cta',
  title: 'CTA Block Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Start Your Child’s Learning Journey at SMBM',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'supportLine',
      title: 'Support Line',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),
  ],
})
