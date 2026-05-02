import {defineField, defineType} from 'sanity'
import {sectionHeaderFields} from '../../shared/sectionHeaderFields'

export const whyJoinSMBMSectionType = defineType({
  name: 'whyJoinSMBMSection',
  title: 'Why Join SMBM Section',
  type: 'object',
  fields: [
    ...sectionHeaderFields,
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'highlightItems',
    }),
  ],
})
