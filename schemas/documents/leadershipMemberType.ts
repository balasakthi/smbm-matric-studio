import {defineField, defineType} from 'sanity'

export const leadershipMemberType = defineType({
  name: 'leadershipMember',
  title: 'Leadership Member',
  type: 'document',

  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'photo',
    },
  },

  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Which group does this person belong to?',
      options: {
        list: [
          {title: 'Management Committee', value: 'management'},
          {title: 'Academic Leadership', value: 'academicLeadership'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Please select a category.'),
    }),

    defineField({
      name: 'role',
      title: 'Internal Role',
      type: 'string',
      description: 'Used internally for filtering and layouts. Not shown publicly.',
      options: {
        list: [
          {title: 'Correspondent', value: 'correspondent'},
          {title: 'Principal', value: 'principal'},
          {title: 'Vice Principal', value: 'vicePrincipal'},
          {title: 'President', value: 'president'},
          {title: 'Vice President', value: 'vicePresident'},
          {title: 'Treasurer', value: 'treasurer'},
          {title: 'Assistant Secretary', value: 'assistantSecretary'},
          {title: 'Coordinator', value: 'coordinator'},
        ],
      },
      validation: (Rule) => Rule.required().error('Please select an internal role.'),
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the leadership member.',
      validation: (Rule) => Rule.required().error('Name is required.'),
    }),

    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'The title shown publicly. Example: "Co-ordinator Secondary Section".',
      validation: (Rule) => Rule.required().error('Please enter a public designation.'),
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Profile photo of this person.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description:
            'Describe the image for screen readers and search engines. E.g. "Photo of the Principal".',
        }),
      ],
      validation: (Rule) => Rule.required().error('A photo is required.'),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Member',
      type: 'boolean',
      description:
        'Turn on for key members like Principal or Correspondent. Featured members get a larger layout with a full profile.',
      initialValue: false,
    }),

    defineField({
      name: 'highlightQuote',
      title: 'Highlight Quote',
      type: 'string',
      description: 'A short inspiring quote shown at the top of their profile. Keep it brief.',
      hidden: ({document}) => !document?.featured,
      validation: (Rule) => Rule.max(200).warning('Try to keep the quote under 200 characters.'),
    }),

    defineField({
      name: 'previewMessage',
      title: 'Preview Message',
      type: 'array',
      of: [{type: 'block'}],
      description: 'A short version of their message (2–3 paragraphs) shown on the About page.',
      hidden: ({document}) => !document?.featured,
    }),

    defineField({
      name: 'fullMessage',
      title: 'Full Message',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The complete message shown on their individual profile page.',
      hidden: ({document}) => !document?.featured,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.featured && (!value || value.length === 0)) {
            return 'Please add at least one paragraph to the full message for featured members.'
          }
          return true
        }),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from the name. Used in the URL for their profile page.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      hidden: ({document}) => !document?.featured,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.featured && !value?.current) {
            return 'A slug is required for featured members — click "Generate" to create one.'
          }
          return true
        }),
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order this person appears in lists. Lower numbers appear first.',
      initialValue: 1,
    }),
  ],
})
