import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),

    defineField({name: 'overview', title: 'Overview Section', type: 'overviewSection'}),

    defineField({
      name: 'missionVision',
      title: 'Mission & Vision Section',
      type: 'missionVisionSection',
    }),

    defineField({name: 'heritage', title: 'Heritage Section', type: 'heritageSection'}),

    defineField({
      name: 'managementMessage',
      title: 'Principle Message',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'managementMessage'}]}],
    }),

    defineField({name: 'studentLife', title: 'Student Life Section', type: 'studentLifeSection'}),

    defineField({
      name: 'statsBlock',
      title: 'Stats Block',
      type: 'reference',
      to: [{type: 'stats'}],
    }),

    defineField({
      name: 'ctaBlock',
      title: 'Call to Action Block',
      type: 'reference',
      to: [{type: 'cta'}],
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
