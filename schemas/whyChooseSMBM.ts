import {defineField, defineType} from 'sanity'

export const whyChooseSMBM = defineType({
  name: 'whyChooseSMBM',
  title: 'Home Page – Why Choose SMBM',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Why Choose SMBM',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Short Introduction',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),

    defineField({
      name: 'reasons',
      title: 'Reasons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Reason Title',
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
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(4).max(6),
    }),
  ],
})
