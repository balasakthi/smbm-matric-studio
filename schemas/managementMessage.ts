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
      name: 'previewMessage',
      title: 'Preview Message',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Short version (2–3 paragraphs for About page)',
    }),

    defineField({
      name: 'fullMessage',
      title: 'Full Message',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'role',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
})
