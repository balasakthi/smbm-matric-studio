import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'overview', title: 'Overview Section', type: 'overviewSection'}),
    defineField({
      name: 'missionVisionSection',
      title: 'Mission & Vision Section',
      type: 'missionVisionSection',
    }),
    defineField({name: 'heritage', title: 'Heritage Section', type: 'heritageSection'}),
    defineField({name: 'studentLife', title: 'Student Life Section', type: 'studentLifeSection'}),
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },
})
