import {defineField, defineType} from 'sanity'

export const academicsPage = defineType({
  name: 'academicsPage',
  title: 'Academics Page',
  type: 'document',
  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),
    defineField({name: 'overview', title: 'Overview Section', type: 'overviewSection'}),
    defineField({
      name: 'learningApproach',
      title: 'Learning Approach Section',
      type: 'learningApproachSection',
    }),
    defineField({name: 'kindergarten', title: 'Kindergarten', type: 'kindergartenSection'}),
    defineField({name: 'curriculum', title: 'Curriculum Section', type: 'curriculumSection'}),
    defineField({
      name: 'teachingMethodology',
      title: 'Teaching Methodology',
      type: 'teachingMethodologySection',
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
