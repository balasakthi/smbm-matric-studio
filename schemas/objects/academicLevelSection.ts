import {defineField, defineType} from 'sanity'

export const academicLevelSection = defineType({
  name: 'academicLevelSection',
  title: 'Academic Level Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Academics',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'levels',
      title: 'Academic Levels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'levelName',
              title: 'Level Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'shortDescription',
              title: 'Short Description',
              type: 'string',
              description: '1-line only',
              validation: (Rule) => Rule.required().max(120),
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(3),
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'View Curriculum',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'Example: /about',
      initialValue: '/academics',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
