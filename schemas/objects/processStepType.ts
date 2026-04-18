import {defineField, defineType} from 'sanity'

export const processStepType = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
