import {HomeIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'homeHeroSection',
    }),

    defineField({
      name: 'quickHighlights',
      title: 'Quick Highlights',
      type: 'array',
      of: [{type: 'quickHighlightSection'}],
      validation: (Rule) => Rule.max(4),
    }),

    defineField({
      name: 'schoolIntroduction',
      title: 'School Introduction',
      type: 'schoolIntroductionSection',
    }),

    defineField({
      name: 'leadershipMessage',
      title: 'Correspondent Message',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'leadershipMember'}]}],
    }),

    defineField({
      name: 'whyChooseSMBM',
      title: 'Why Choose SMBM',
      type: 'whyChooseSMBMSection',
    }),

    defineField({
      name: 'statsBlock',
      title: 'Stats Block',
      type: 'reference',
      to: [{type: 'stats'}],
    }),

    defineField({
      name: 'academicLevels',
      title: 'Academic Levels',
      type: 'academicLevelSection',
    }),

    defineField({
      name: 'academicResults',
      title: 'Academic Results',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'academicResults'}]}],
    }),

    defineField({
      name: 'infrastructureHighlights',
      title: 'Infrastructure Highlights',
      type: 'infrastructureHighlightSection',
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required().max(40),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required().max(80),
        }),
        defineField({
          name: 'testimonialsList',
          title: 'Testimonials List',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'testimonial'}]}],
          validation: (Rule) => Rule.max(6),
        }),
      ],
    }),
    defineField({
      name: 'ctaBlock',
      title: 'Home Page CTA Block',
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
