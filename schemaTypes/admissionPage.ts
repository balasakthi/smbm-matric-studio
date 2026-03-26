import {defineType, defineField} from 'sanity'

export const admissionPage = defineType({
  name: 'admissionPage',
  title: 'Admission Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Admissions',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Example: School campus image',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Example: "Students learning in smart classroom"',
          validation: (Rule) => Rule.required().warning('Add alt text'),
        }),
      ],
    }),

    defineField({
      name: 'overviewTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overviewContent',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'classesTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'classesIntro',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: 'classes',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
            }),
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
          ],
        },
      ],
    }),

    defineField({
      name: 'processTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'processIntro',
      type: 'string',
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: 'processSteps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
          ],
        },
      ],
    }),

    defineField({
      name: 'documentsTitle',
      type: 'string',
    }),
    defineField({
      name: 'documentsIntro',
      type: 'string',
    }),
    defineField({
      name: 'documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
            }),
            defineField({
              name: 'label',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'guidelinesTitle',
      type: 'string',
    }),
    defineField({
      name: 'guidelinesIntro',
      type: 'string',
    }),
    defineField({
      name: 'guidelines',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'subtitle', type: 'string'}),

        defineField({
          name: 'officeHours',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'days', type: 'string'}),
                defineField({name: 'timing', type: 'string'}),
              ],
            },
          ],
        }),

        defineField({
          name: 'phones',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.min(1),
        }),

        defineField({
          name: 'emails',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.min(1),
        }),

        defineField({
          name: 'address',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
  },
})
