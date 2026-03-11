import {defineField, defineType} from 'sanity'

export const studentLife = defineType({
  name: 'studentLife',
  title: 'Home Page – Student Life & Activities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Student Life & Activities',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Short Introduction',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),

    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Activity Name',
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
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(4).max(8),
    }),
  ],
})
