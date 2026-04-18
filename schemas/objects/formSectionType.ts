import {defineField, defineType} from 'sanity'

export const formSectionType = defineType({
  name: 'formSection',
  title: 'Form Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'mapUrl', title: 'Google Maps Embed URL', type: 'url'}),
    defineField({name: 'formTitle', title: 'Form Title', type: 'string'}),
  ],
})
