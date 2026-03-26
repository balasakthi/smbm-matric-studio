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

    // 🔷 MESSAGES (VERY IMPORTANT)
    defineField({
      name: 'messages',
      title: 'Messages',
      type: 'object',
      fields: [
        {
          name: 'correspondent',
          type: 'object',
          fields: [
            {name: 'name', type: 'string'},
            {name: 'role', type: 'string'},
            {name: 'message', type: 'array', of: [{type: 'block'}]},
            {name: 'photo', type: 'image', options: {hotspot: true}},
          ],
        },
        {
          name: 'principal',
          type: 'object',
          fields: [
            {name: 'name', type: 'string'},
            {name: 'role', type: 'string'},
            {name: 'message', type: 'array', of: [{type: 'block'}]},
            {name: 'photo', type: 'image', options: {hotspot: true}},
          ],
        },
        {
          name: 'vicePrincipal',
          type: 'object',
          fields: [
            {name: 'name', type: 'string'},
            {name: 'role', type: 'string'},
            {name: 'message', type: 'array', of: [{type: 'block'}]},
            {name: 'photo', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    }),

    // 🔷 INFRASTRUCTURE
    defineField({
      name: 'infrastructure',
      title: 'Infrastructure',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'array', of: [{type: 'block'}]},
        {name: 'image', type: 'image', options: {hotspot: true}},
      ],
    }),

    // 🔷 TEACHING METHODOLOGY
    defineField({
      name: 'teachingMethodology',
      title: 'Teaching Methodology',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {
          name: 'points',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),

    // 🔷 KINDERGARTEN
    defineField({
      name: 'kindergarten',
      title: 'Kindergarten',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'array', of: [{type: 'block'}]},
      ],
    }),

    // 🔷 CURRICULUM
    defineField({
      name: 'curriculum',
      title: 'Curriculum',
      type: 'object',
      fields: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'array', of: [{type: 'block'}]},

        {
          name: 'courses',
          type: 'object',
          fields: [
            {
              name: 'higherSecondary',
              title: 'XI & XII',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'highSchool',
              title: 'IX & X',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'middleSchool',
              title: 'VI - VIII',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'primary',
              title: 'I - V',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'kindergartenCourses',
              title: 'KG',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
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
