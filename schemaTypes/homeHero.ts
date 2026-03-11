import {defineType, defineField} from 'sanity'

export const homeHero = defineType({
  name: 'homeHero',
  title: 'Home Page – Hero Section',
  type: 'document',
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

    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Eg: School campus image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
