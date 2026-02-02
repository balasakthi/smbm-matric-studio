import {defineType, defineField} from 'sanity'

export const actionsType = defineType({
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
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
      ],
    }),

    defineField({
      name: 'exploreAction',
      title: 'Explore Our School (Shared)',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
      ],
    }),

    defineField({
      name: 'contactAction',
      title: 'Contact Us',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
      ],
    }),
  ],
})
