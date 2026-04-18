import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
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
      name: 'whyChooseSMBM',
      title: 'Why Choose SMBM',
      type: 'whyChooseSMBMSection',
    }),

    defineField({
      name: 'academicLevels',
      title: 'Academic Levels',
      type: 'academicLevelSection',
    }),

    defineField({
      name: 'infrastructureHighlights',
      title: 'Infrastructure Highlights',
      type: 'infrastructureHighlightSection',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'ctaBlock',
      title: 'Call to Action Block',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cta'}]}],
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
