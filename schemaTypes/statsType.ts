import {defineType, defineField} from 'sanity'

export const statsType = defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      description: 'Leave empty if not numeric (e.g. K.G. - XII)',
    }),

    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Example: +, %, K.G. - XII',
    }),
  ],
})
