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
      description: 'Section title',
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
      description: 'Section subtitle',
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
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
      of: [{type: 'leader'}],
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
