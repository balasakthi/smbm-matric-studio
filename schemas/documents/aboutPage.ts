import {InfoOutlineIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: InfoOutlineIcon,

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
      name: 'leadershipMessage',
      title: 'Principal Message',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'leadershipMember'}]}],
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
      title: 'About Page CTA Block',
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
