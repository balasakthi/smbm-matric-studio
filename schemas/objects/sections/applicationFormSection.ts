import {defineType, defineField} from 'sanity'
import {sectionHeaderFields} from '../../shared/sectionHeaderFields'
import {imageField} from '../../shared/imageField'

export const applicationFormSection = defineType({
  name: 'applicationFormSection',
  title: 'Application Form Section',
  type: 'object',
  fields: [
    ...sectionHeaderFields,
    ...imageField,
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      description: 'Short headline for the form.',
    }),
  ],
})
