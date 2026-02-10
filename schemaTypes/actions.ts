import { defineType, defineField } from 'sanity'

export const actions = defineType({
  name: 'actions',
  title: 'Actions',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'admissionOpen',
      title: 'Admission Open?',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'admissionAction',
      title: 'Admission Enquiry',
      type: 'link',
    }),

    defineField({
      name: 'exploreAction',
      title: 'Explore Our School (Shared)',
      type: 'link',
    }),

    defineField({
      name: 'contactAction',
      title: 'Contact Us',
      type: 'link',
    }),
  ],
})
