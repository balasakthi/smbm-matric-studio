import {defineField, defineType} from 'sanity'

export const schoolType = defineType({
  name: 'school',
  title: 'School',
  type: 'object',
  fields: [
    defineField({name: 'year', title: 'Year', type: 'number'}),
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'type', title: 'Type', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year',
    },
  },
})
