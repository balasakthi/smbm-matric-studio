import {defineField, defineType} from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Home Page – CTA Block',
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
      title: 'Suppport Line',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),
  ],
})
