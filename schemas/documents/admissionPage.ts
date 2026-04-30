import {defineField, defineType} from 'sanity'

export const admissionPage = defineType({
  name: 'admissionPage',
  title: 'Admission Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'overview', title: 'Overview Section', type: 'overviewSection'}),
    defineField({name: 'classSections', title: 'Class Sections', type: 'classesSection'}),
    defineField({name: 'admissionProcess', title: 'Process Section', type: 'processSection'}),
    defineField({name: 'requiredDocuments', title: 'Documents Section', type: 'documentsSection'}),
    defineField({
      name: 'admissionGuidelines',
      title: 'Guidelines Section',
      type: 'guidelinesSection',
    }),
    defineField({name: 'contactSection', title: 'Contact Section', type: 'contactSection'}),
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },
})
