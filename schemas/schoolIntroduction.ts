import {defineField, defineType} from 'sanity'

export const schoolIntroduction = defineType({
  name: 'schoolIntroduction',
  title: 'Home Page – School Introduction',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(40),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'aboutImage',
      title: 'School Introduction Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Read More About Us',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'Example: /about',
      initialValue: '/about',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
