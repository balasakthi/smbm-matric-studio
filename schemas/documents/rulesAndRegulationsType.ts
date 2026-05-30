import {OlistIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {sectionHeaderFields} from '../shared/sectionHeaderFields'

export const rulesAndRegulations = defineType({
  name: 'rulesAndRegulationsPage',
  title: 'Rules & Regulations Page',
  type: 'document',
  icon: OlistIcon,

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },

  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),

    defineField({
      name: 'discipline',
      title: 'Discipline Section',
      type: 'object',
      fields: [
        ...sectionHeaderFields,
        defineField({
          name: 'rules',
          title: 'Rules',
          type: 'highlightItems',
        }),
      ],
    }),

    defineField({
      name: 'uniformPolicy',
      title: 'Uniform Policy Section',
      type: 'object',

      fields: [
        ...sectionHeaderFields,

        defineField({
          name: 'guidelines',
          title: 'General Guidelines',
          type: 'array',

          of: [
            defineArrayMember({
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'uniformCategories',
          title: 'Uniform Categories',
          type: 'array',

          of: [
            defineArrayMember({
              type: 'object',

              fields: [
                defineField({
                  name: 'classGroup',
                  title: 'Class Group',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),

                defineField({
                  name: 'boysUniform',
                  title: 'Boys Uniform',
                  type: 'text',
                  rows: 5,
                }),

                defineField({
                  name: 'girlsUniform',
                  title: 'Girls Uniform',
                  type: 'text',
                  rows: 5,
                }),
              ],

              preview: {
                select: {
                  title: 'classGroup',
                },
              },
            }),
          ],
        }),

        defineField({
          name: 'specialUniformNote',
          title: 'Special Uniform Note',
          type: 'text',
          rows: 3,
          description: 'Example: Wednesday uniform instructions',
        }),
      ],
    }),

    defineField({
      name: 'prayerAndPledge',
      title: 'Prayer & Pledge Section',
      type: 'object',

      fields: [
        ...sectionHeaderFields,

        defineField({
          name: 'morningPrayer',
          title: 'Morning Prayer',
          type: 'array',
          of: [{type: 'block'}],
        }),

        defineField({
          name: 'eveningPrayer',
          title: 'Evening Prayer',
          type: 'array',
          of: [{type: 'block'}],
        }),

        defineField({
          name: 'loyaltyPledge',
          title: 'Loyalty Pledge',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
  ],
})
