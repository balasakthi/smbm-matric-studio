import {defineArrayMember, defineField, defineType} from 'sanity'

export const higherSecondaryGroup = defineType({
  name: 'higherSecondaryGroup',
  title: 'Higher Secondary',
  type: 'object',

  fields: [
    defineField({
      name: 'groupName',
      title: 'Group Name',
      type: 'string',
      initialValue: 'Higher Secondary (XI–XII)',
      readOnly: true,
    }),

    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Eg: school, book-open, building, users',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'higherSecondary',
      hidden: true,
    }),

    defineField({
      name: 'streams',
      title: 'Streams',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'stream',
          title: 'Stream',
          type: 'object',
          fields: [
            defineField({name: 'streamName', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
            }),
            defineField({
              name: 'languages',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),

            defineField({
              name: 'coreSubjects',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),

            defineField({
              name: 'groupOptions',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
        }),
      ],
    }),
  ],
})
