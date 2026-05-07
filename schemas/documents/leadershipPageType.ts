import {UsersIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'
import {sectionHeaderFields} from '../shared/sectionHeaderFields'

export const leadershipPageType = defineType({
  name: 'leadershipPage',
  title: 'Leadership Page',
  type: 'document',
  icon: UsersIcon,

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
      description: 'The large banner shown at the top of the Leadership page.',
    }),

    defineField({
      name: 'managementSection',
      title: 'Management Section',
      type: 'object',
      description: 'Heading and subtitle for the Management Committee section.',
      fields: [...sectionHeaderFields],
    }),

    defineField({
      name: 'academicSection',
      title: 'Academic Section',
      type: 'object',
      description: 'Heading and subtitle for the Academic Leadership section.',
      fields: [...sectionHeaderFields],
    }),

    defineField({
      name: 'ctaBlock',
      title: 'Leadership Page CTA Block',
      type: 'ctaBlock',
      description: 'A call-to-action block shown at the bottom of the page.',
    }),
  ],
})
