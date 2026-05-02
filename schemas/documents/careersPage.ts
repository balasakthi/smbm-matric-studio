import {defineField, defineType} from 'sanity'

export const careersPage = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
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
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },
})
