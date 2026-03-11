import {defineField, defineType} from 'sanity'

export const managementMessage = defineType({
  name: 'managementMessage',
  title: 'Management Message',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Correspondent', value: 'correspondent'},
          {title: 'Principal', value: 'principal'},
          {title: 'Vice Principal', value: 'vicePrincipal'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'designation',
      title: 'Designation (Display)',
      type: 'string',
      description: 'Eg: Correspondent, Principal',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'highlightQuote',
      title: 'Highlight Quote',
      type: 'string',
      description: 'Short quoted line shown at top',
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 12,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
})
