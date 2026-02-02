import {defineField, defineType} from 'sanity'

export const whyChooseType = defineType({
  name: 'whyChooseSection',
  title: 'Why Choose Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', title: 'Section Description', type: 'text', rows: 4}),
    defineField({
      name: 'features',
      title: 'Why Choose',
      type: 'array',
      of: [{type: 'featureItem'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'image',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exploreCampusAction',
      title: 'Explore Campus Life',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'href', type: 'url'},
      ],
    }),
  ],
})
