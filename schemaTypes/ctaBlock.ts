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
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Eg: Admissions Open, Contact Us',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'Eg: /admissions or /contact',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
