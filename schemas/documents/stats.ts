import {defineField, defineType} from 'sanity'

export const stats = defineType({
  name: 'stats',
  title: 'Stats Data',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistics List',
      type: 'array',
      description: 'Add up to 4 key statistics to display on the site.',
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
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(10),
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
                title: `${value}${suffix ?? ''} - ${label}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    }),
  ],
  preview: {
    select: {
      stats: 'stats',
    },
    prepare({stats}) {
      return {
        title: 'Global Statistics',
        subtitle: `${stats?.length || 0} items defined`,
      }
    },
  },
})
