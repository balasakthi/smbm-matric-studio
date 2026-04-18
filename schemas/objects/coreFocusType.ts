import {defineField, defineType} from 'sanity'

export const coreFocusType = defineType({
  name: 'coreFocus',
  title: 'Core Focus',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]}),
  ],
})
