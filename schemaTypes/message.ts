import { defineType, defineField, SchemaTypeDefinition } from 'sanity'

export const message: SchemaTypeDefinition = defineType({
  name: 'messageSection',
  title: 'Message Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Correspondent Image',
      type: 'accessibleImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Blockquote',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Correspondent Message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Correspondent Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readMoreAction',
      title: 'Read Full Message Action',
      type: 'link',
    }),
  ],
})
