import { defineField, defineType } from 'sanity'

export const whyChoose = defineType({
  name: 'whyChooseSection',
  title: 'Why Choose Section',
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
      name: 'features',
      title: 'Why Choose',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'accessibleImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exploreCampusAction',
      title: 'Explore Campus Life',
      type: 'link',
    }),
  ],
})
