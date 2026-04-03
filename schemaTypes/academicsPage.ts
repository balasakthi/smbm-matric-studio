import {defineField, defineType} from 'sanity'

export const academicsPage = defineType({
  name: 'academicsPage',
  title: 'Academics Page',
  type: 'document',

  fields: [
    // 🔷 HERO
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'title', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'subtitle', type: 'string'},
        {
          name: 'backgroundImage',
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string'}],
        },
      ],
    }),

    // Overview
    defineField({
      name: 'overview',
      title: 'Overview Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.min(1),
        },
      ],
    }),

    // 🔶 LEARNING APPROACH
    defineField({
      name: 'learningApproach',
      title: 'Learning Approach Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          initialValue: 'Our Learning Approach',
        },
        {
          name: 'subtitle',
          type: 'string',
          initialValue: 'A dynamic blend of innovation, creativity and student-focused education',
        },
        {
          name: 'points',
          title: 'Approach Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  type: 'text',
                  rows: 2,
                },
                {
                  name: 'icon',
                  type: 'string',
                  description: 'Optional: icon name (e.g. user, flask, lightbulb)',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(3).max(6),
        },
      ],
    }),

    // Kindergarten
    defineField({
      name: 'kindergarten',
      title: 'Kindergarten',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          initialValue: 'Kindergarten',
        },
        {name: 'content', type: 'array', of: [{type: 'block'}], validation: (Rule) => Rule.min(1)},
      ],
    }),

    // 🔷 CURRICULUM
    defineField({
      name: 'curriculum',
      title: 'Curriculum Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          initialValue: 'Curriculum Overview',
        },
        {
          name: 'subtitle',
          type: 'string',
        },
        {
          name: 'levels',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'level',
                  type: 'string', // KG, Primary, etc
                },
                {
                  name: 'description',
                  type: 'text',
                },

                // 🔹 For KG / Primary / Middle / Secondary
                {
                  name: 'subjects',
                  type: 'array',
                  of: [{type: 'string'}],
                  hidden: ({parent}) => parent?.type === 'higherSecondary',
                },

                // 🔹 For XI–XII ONLY
                {
                  name: 'streams',
                  type: 'array',
                  hidden: ({parent}) => parent?.type !== 'higherSecondary',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {name: 'streamName', type: 'string'}, // Science
                        {
                          name: 'coreSubjects',
                          type: 'array',
                          of: [{type: 'string'}],
                        },
                        {
                          name: 'groupOptions',
                          type: 'array',
                          of: [{type: 'string'}],
                        },
                        {
                          name: 'languages',
                          type: 'array',
                          of: [{type: 'string'}],
                        },
                      ],
                    },
                  ],
                },

                // 🔹 Type selector (IMPORTANT)
                {
                  name: 'type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Standard', value: 'standard'},
                      {title: 'Higher Secondary', value: 'higherSecondary'},
                    ],
                  },
                  initialValue: 'standard',
                },
              ],
              preview: {
                select: {
                  title: 'level',
                  subtitle: 'type',
                },
              },
            },
          ],
        },
      ],
    }),

    // 🔶 TEACHING METHODOLOGY
    defineField({
      name: 'teachingMethodology',
      title: 'Teaching Methodology',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          initialValue: 'Teaching Methodology',
        },
        {
          name: 'description',
          type: 'string',
          initialValue: 'Delivering meaningful learning through innovative and engaging practices',
        },
        {
          name: 'methodologies',
          title: 'Methodologies',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.min(4),
        },
        {
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string'}],
        },
      ],
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
