import {defineField, defineType} from 'sanity'

export const missionVisionSectionType = defineType({
  name: 'missionVisionSection',
  title: 'Mission and Vision Section',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'subtitle', type: 'string'}),
    defineField({name: 'mission', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'vision', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'coreValues', type: 'string'}),
    defineField({name: 'missionStatement', type: 'string'}),
  ],
})
