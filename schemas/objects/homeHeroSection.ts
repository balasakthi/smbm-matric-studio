import {defineField, defineType} from 'sanity'

export const homeHeroSection = defineType({
  name: 'homeHeroSection',
  title: 'Home Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'School name or main heading',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'established',
      title: 'Established',
      type: 'string',
      description: 'School established year',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'schoolMotto',
      title: 'School Motto',
      type: 'string',
      description: 'Tagline or Motto of the School',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
      description: 'Short description',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'admissionText',
      title: 'Admission Text',
      type: 'string',
    }),

    defineField({
      name: 'admissionOpen',
      title: 'Admission Open',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Eg: School campus image',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})
