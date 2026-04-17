import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
    }),

    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({
          name: 'contactInfo',
          title: 'Contact Info',
          type: 'reference',
          to: [{type: 'contactInfo'}],
          weak: true,
          validation: (Rule) => Rule.required().error('A contact details reference is required.'),
        }),
      ],
    }),

    defineField({
      name: 'formSection',
      title: 'Form Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'mapUrl',
          title: 'Google Maps Embed URL',
          type: 'url',
        }),
        defineField({
          name: 'formTitle',
          title: 'Form Title',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'faq',
          title: 'FAQ',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'faqItem',
              fields: [
                defineField({name: 'question', type: 'string', title: 'Question'}),
                defineField({name: 'answer', type: 'text', title: 'Answer'}),
              ],
            }),
          ],
        }),
      ],
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
