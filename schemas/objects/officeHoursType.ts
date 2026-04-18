import {defineField, defineType} from 'sanity'

export const officeHoursType = defineType({
  name: 'officeHours',
  title: 'Office Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'days',
      title: 'Days',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timing',
      title: 'Timing',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'days', subtitle: 'timing'},
  },
})
