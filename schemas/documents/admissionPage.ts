import {defineField, defineType} from 'sanity'

export const admissionPage = defineType({
  name: 'admissionPage',
  title: 'Admission Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'overview', title: 'Overview Section', type: 'admissionOverviewSection'}),
    defineField({name: 'classes', title: 'Classes Section', type: 'classesSection'}),
    defineField({name: 'process', title: 'Process Section', type: 'processSection'}),
    defineField({name: 'documents', title: 'Documents Section', type: 'documentsSection'}),
    defineField({name: 'guidelines', title: 'Guidelines Section', type: 'guidelinesSection'}),
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
