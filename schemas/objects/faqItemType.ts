import {defineField, defineType} from 'sanity'

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({name: 'question', title: 'Question', type: 'string'}),
    defineField({name: 'answer', title: 'Answer', type: 'text'}),
  ],
})
