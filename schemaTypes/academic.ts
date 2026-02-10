import { defineType, defineField } from 'sanity'

export const academic = defineType({
  name: 'academicSection',
  title: 'Academic Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'features',
      title: 'Academic Levels',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'viewCurriculumAction',
      title: 'View Curriculum Action',
      type: 'link',
    }),
  ],
})
