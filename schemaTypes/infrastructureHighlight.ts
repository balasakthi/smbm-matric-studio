import {defineField, defineType} from 'sanity'

export const infrastructureHighlight = defineType({
  name: 'infrastructureHighlight',
  title: 'Home Page – Infrastructure Highlights',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Infrastructure Highlights',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Short Introduction',
      type: 'string',
      description: '1 short line under the title',
      validation: (Rule) => Rule.required().max(140),
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Facility Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'string',
              validation: (Rule) => Rule.required().max(120),
            }),
            defineField({
              name: 'image',
              title: 'Image (optional)',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(4).max(8),
    }),
  ],
})
