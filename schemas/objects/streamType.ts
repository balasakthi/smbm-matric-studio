import {defineArrayMember, defineField, defineType} from 'sanity'

export const streamType = defineType({
  name: 'stream',
  title: 'Stream',
  type: 'object',
  fields: [
    defineField({name: 'streamName', title: 'Stream Name', type: 'string'}),
    defineField({
      name: 'coreSubjects',
      title: 'Core Subjects',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'groupOptions',
      title: 'Group Options',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
})
