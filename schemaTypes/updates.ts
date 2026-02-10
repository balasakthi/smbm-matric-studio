import { defineField, defineType } from 'sanity'

export const updates = defineType({
  name: 'updatesSection',
  title: 'Updates Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'announcements',
      title: 'Important Announcements',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'activities',
      title: 'School Activities',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'contactAction',
      title: 'Contact Us For More Information',
      type: 'link',
    }),
  ],
})
