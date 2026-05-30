import {defineArrayMember, defineField, defineType} from 'sanity'

export const highlightItemsType = defineType({
  name: 'highlightItems',
  title: 'Highlight Items',
  type: 'array',
  of: [
    defineArrayMember({
      name: 'highlightItem',
      type: 'object',
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
        },
      },

      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Short, impactful headline for the item.',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          description: 'Brief explanation of the feature or benefit (max 200 chars).',
          validation: (Rule) => Rule.required().max(200),
        }),

        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'string',
          description: 'Optional icon name (e.g., "user", "flask", "lightbulb").',
        }),
      ],
    }),
  ],
})
