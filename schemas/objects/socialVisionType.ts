import {defineField, defineType} from 'sanity'

export const socialVisionType = defineType({
  name: 'socialVision',
  title: 'Social Vision',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]}),
  ],
})
