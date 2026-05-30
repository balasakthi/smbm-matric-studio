import {defineField, defineType} from 'sanity'
import {MarkerIcon} from '@sanity/icons'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: MarkerIcon,

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },

  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'contactSection', title: 'Contact Section', type: 'contactSection'}),
    defineField({name: 'contactForm', title: 'Form Section', type: 'formSection'}),
    defineField({name: 'faqSection', title: 'FAQ Section', type: 'faqSection'}),
    defineField({
      name: 'ctaBlock',
      title: 'Home Page CTA Block',
      type: 'ctaBlock',
    }),
  ],
})
