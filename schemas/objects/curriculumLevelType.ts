import {defineArrayMember, defineField, defineType} from 'sanity'

export const curriculumLevelType = defineType({
  name: 'curriculumLevel',
  title: 'Curriculum Level',
  type: 'object',
  fields: [
    defineField({name: 'level', title: 'Level', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Standard', value: 'standard'},
          {title: 'Higher Secondary', value: 'higherSecondary'},
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      hidden: ({parent}) => parent?.type === 'higherSecondary',
    }),
    defineField({
      name: 'streams',
      title: 'Streams',
      type: 'array',
      of: [defineArrayMember({type: 'stream'})],
      hidden: ({parent}) => parent?.type !== 'higherSecondary',
    }),
  ],
  preview: {
    select: {title: 'level', subtitle: 'type'},
  },
})
