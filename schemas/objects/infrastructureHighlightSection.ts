import {defineField, defineType} from 'sanity'

export const infrastructureHighlightSection = defineType({
  name: 'infrastructureHighlightSection',
  title: 'Infrastructure Highlight Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Infrastructure Highlights',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
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
              name: 'title',
              title: 'Facility Title',
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
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }),
              ],
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(4).max(8),
    }),
  ],
})
