import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'contactSection', title: 'Contact Section', type: 'contactSection'}),
    defineField({name: 'formSection', title: 'Form Section', type: 'formSection'}),
    defineField({name: 'faqSection', title: 'FAQ Section', type: 'faqSection'}),
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },
})
