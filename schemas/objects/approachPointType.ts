import {defineField, defineType} from 'sanity'

export const approachPointType = defineType({
  name: 'approachPoint',
  title: 'Approach Point',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional: icon name (e.g. user, flask, lightbulb)',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
