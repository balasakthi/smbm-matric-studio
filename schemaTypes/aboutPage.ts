import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
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

    // 🔷 OVERVIEW
    defineField({
      name: 'overview',
      title: 'Overview Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', validation: (Rule) => Rule.required()},
        {
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string'}],
        },
      ],
    }),

    // 🔷 MISSION & VISION
    defineField({
      name: 'missionVision',
      title: 'Mission & Vision',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'mission', type: 'array', of: [{type: 'block'}]},
        {name: 'vision', type: 'array', of: [{type: 'block'}]},
        {name: 'coreValues', type: 'string'},
        {name: 'quote', type: 'string'},
      ],
    }),

    // 🔷 HERITAGE
    defineField({
      name: 'heritage',
      title: 'Heritage Section',
      type: 'object',
      fields: [
        // 🔹 Header
        defineField({
          name: 'label',
          type: 'string',
          initialValue: 'Our Legacy',
          description: 'Main section label',
        }),

        defineField({
          name: 'title',
          type: 'string',
          initialValue: 'Dindigul Nadar Uravinmurai',
          description: 'Main section title',
        }),

        defineField({
          name: 'description',
          type: 'string',
          initialValue: 'Empowering Education & Society Since 1964',
          description: 'Subtitle for the heritage section',
        }),

        defineField({
          name: 'aphorism',
          title: 'Aphorism',
          type: 'string',
        }),

        // 🔹 Leadership Mission
        defineField({
          name: 'leadershipMission',
          title: 'Leadership and Educational Mission',
          type: 'array',
          of: [{type: 'block'}],
        }),

        // 🔹 Leadership Team
        defineField({
          name: 'leadership',
          title: 'Leadership Team',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Leader',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                }),
                defineField({
                  name: 'position',
                  type: 'string',
                }),
              ],
            },
          ],
        }),

        // 🔹 Core Focus
        defineField({
          name: 'coreFocus',
          title: 'Core Focus',
          type: 'object',
          fields: [
            {name: 'title', type: 'string'},
            {
              name: 'content',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        }),

        // 🔹 Schools List
        defineField({
          name: 'schools',
          title: 'Educational Institutions',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'School',
              fields: [
                defineField({
                  name: 'year',
                  type: 'number',
                }),
                defineField({
                  name: 'name',
                  type: 'string',
                }),
                defineField({
                  name: 'type',
                  type: 'string',
                }),
              ],
            },
          ],
        }),

        // 🔹 Social Vision
        defineField({
          name: 'socialVision',
          title: 'Social Vision',
          type: 'object',
          fields: [
            {name: 'title', type: 'string'},
            {
              name: 'content',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        }),

        // 🔹 Motto
        defineField({
          name: 'motto',
          title: 'Motto',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // 🔷 STUDENT LIFE
    defineField({
      name: 'studentLife',
      title: 'Student Life Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          initialValue: 'Student Life at S.M.B.M.',
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'items',
          title: 'Student Life Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'image',
                  type: 'image',
                  options: {hotspot: true},
                  fields: [{name: 'alt', type: 'string'}],
                }),
              ],
            },
          ],
        }),
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
