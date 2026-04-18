import {defineField, defineType} from 'sanity'

export const academicResults = defineType({
  name: 'academicResults',
  title: 'Academic Results Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Short Introduction',
      type: 'string',
      description: '1 short line under the title',
      validation: (Rule) => Rule.required().max(140),
    }),

    defineField({
      name: 'year',
      title: 'Academic Year',
      type: 'string',
      description: 'Example: 2024–2025',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isCurrent',
      title: 'Current Year Result',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'resultPoster',
      title: 'Result Poster (Optional)',
      type: 'image',
      description: 'Upload the official result banner if available',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    defineField({
      name: 'topStudents',
      title: 'Top Performing Students',
      description: 'Add students who scored top marks',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Student',

          fields: [
            defineField({
              name: 'studentName',
              title: 'Student Name',
              type: 'string',
            }),

            defineField({
              name: 'photo',
              title: 'Photo',
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

            defineField({
              name: 'className',
              title: 'Class',
              type: 'string',
              options: {
                list: ['Class 10', 'Class 12'],
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'group',
              title: 'Group',
              type: 'string',
              options: {
                list: ['Biology Maths', 'Biology Computer Science', 'Computer Science', 'Commerce'],
              },
              hidden: ({parent}) => parent?.className !== 'Class 12',
            }),

            defineField({
              name: 'centum',
              title: 'Total Centum',
              type: 'number',
            }),

            defineField({
              name: 'score',
              title: 'Score',
              type: 'number',
              description: 'Example: 497',
            }),

            defineField({
              name: 'achievement',
              title: 'Achievement',
              type: 'string',
              description: 'Example: District II Rank',
            }),
          ],

          preview: {
            select: {
              title: 'studentName',
              className: 'className',
              score: 'score',
              media: 'photo',
            },
            prepare({title, className, score, media}) {
              const total = className === 'Class 10' ? 500 : 600

              return {
                title,
                subtitle: `${className} • ${score}/${total}`,
                media,
              }
            },
          },
        },
      ],
    }),
  ],
})
