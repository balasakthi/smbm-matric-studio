import {defineField, defineType} from 'sanity'

export const ctaBlockType = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      subtitle: 'supportLine',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main headline for the call-to-action section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supportLine',
      title: 'Support Line',
      type: 'string',
      description: 'Brief supporting text or subheadline (max 140 chars).',
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text displayed on the CTA button.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'Target URL or path (e.g., /about).',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
