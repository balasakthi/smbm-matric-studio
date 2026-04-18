import {defineField, defineType} from 'sanity'

export const leaderType = defineType({
  name: 'leader',
  title: 'Leader',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'position', title: 'Position', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
    },
  },
})
