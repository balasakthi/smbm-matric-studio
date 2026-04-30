import {defineArrayMember, defineField, defineType} from 'sanity'

export const curriculumSectionType = defineType({
  name: 'curriculumSection',
  title: 'Curriculum Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Curriculum Overview',
    }),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'groups',
      title: 'Curriculum Groups',
      type: 'array',
      of: [
        defineArrayMember({type: 'kgGroup'}),
        defineArrayMember({type: 'standardGroup'}),
        defineArrayMember({type: 'higherSecondaryGroup'}),
      ],
    }),
  ],
})
