import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const careersPage = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  icon: CaseIcon,

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },

  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),

    defineField({name: 'whyJoinSMBM', title: 'Why Join SMBM', type: 'whyJoinSMBMSection'}),

    defineField({
      name: 'applicationForm',
      title: 'Application Form',
      type: 'applicationFormSection',
    }),

    defineField({
      name: 'ctaBlock',
      title: 'Careers Page CTA Block',
      type: 'ctaBlock',
    }),
  ],
})
