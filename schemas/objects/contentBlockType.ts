import {defineArrayMember, defineField, defineType} from 'sanity'

export const contentBlockType = defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional: icon name (e.g. user, flask, lightbulb)',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.min(1).error('At least one content block is required.'),
    }),
  ],
})
