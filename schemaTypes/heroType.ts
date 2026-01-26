import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trustLine',
      type: 'string',
      validation: (rule) => rule.required(),
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

    defineField({
      name: 'slides',
      title: 'Carousel Slides',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', type: 'string'},
            {name: 'text', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
