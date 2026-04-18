import {defineField, defineType} from 'sanity'

export const admissionHeroSectionType = defineType({
  name: 'admissionHeroSection',
  title: 'Admission Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Admissions',
      validation: (Rule) => Rule.required().error('Hero title is required.'),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('Hero subtitle is required.'),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().error('Label is required.'),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Example: School campus image',
      validation: (Rule) => Rule.required().error('Background image is required.'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Example: "Students learning in smart classroom"',
          validation: (Rule) =>
            Rule.custom((alt, context) => {
              if ((context.parent as {asset?: unknown})?.asset && !alt) {
                return 'Alt text is required when an image is set.'
              }
              return true
            }).warning('Add alt text'),
        }),
      ],
    }),
  ],
})
