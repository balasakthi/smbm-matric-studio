import {defineField, defineType} from 'sanity'

export const heritageSectionType = defineType({
  name: 'heritageSection',
  title: 'Heritage Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      initialValue: 'Our Legacy',
      description: 'Main section label',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Dindigul Nadar Uravinmurai',
      description: 'Main section title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Empowering Education & Society Since 1964',
      description: 'Subtitle for the heritage section',
    }),
    defineField({name: 'aphorism', title: 'Aphorism', type: 'string'}),
    defineField({
      name: 'leadershipMission',
      title: 'Leadership and Educational Mission',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership Team',
      type: 'array',
      of: [{type: 'leader'}], // references the extracted type by name
    }),
    defineField({name: 'coreFocus', title: 'Core Focus', type: 'coreFocus'}),
    defineField({
      name: 'schools',
      title: 'Educational Institutions',
      type: 'array',
      of: [{type: 'school'}],
    }),
    defineField({name: 'socialVision', title: 'Social Vision', type: 'socialVision'}),
    defineField({
      name: 'motto',
      title: 'Motto',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
