import {defineField, defineType} from 'sanity'

export const stats = defineType({
  name: 'stats',
  title: 'Stats Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'SMBM at a Glance',
    }),

    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Number',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              description: 'Example: + or %',
            }),

            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              value: 'value',
              suffix: 'suffix',
              label: 'label',
            },
            prepare({value, suffix, label}) {
              return {
                title: `${value}${suffix ?? ''}`,
                subtitle: label,
              }
            },
          },
        },
      ],

      validation: (Rule) => Rule.max(4),
    }),
  ],
})
