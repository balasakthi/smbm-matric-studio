import {defineArrayMember, defineField, defineType} from 'sanity'

export const kgGroup = defineType({
  name: 'kgGroup',
  title: 'Kindergarten',
  type: 'object',

  fields: [
    defineField({
      name: 'groupName',
      title: 'Group Name',
      type: 'string',
      initialValue: 'Kindergarten',
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
      initialValue: 'kg',
      hidden: true,
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'category',
          title: 'Category',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Eg: school, book-open, building, users',
            }),
            defineField({
              name: 'subjects',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
        }),
      ],
    }),
  ],
})
