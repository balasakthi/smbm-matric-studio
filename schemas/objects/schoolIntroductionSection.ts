import {defineField, defineType} from 'sanity'

export const schoolIntroductionSection = defineType({
  name: 'schoolIntroductionSection',
  title: 'School Introduction Section',
  type: 'object',
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
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'aboutImage',
      title: 'School Introduction Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
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
