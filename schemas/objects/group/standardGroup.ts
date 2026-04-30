import {defineArrayMember, defineField, defineType} from 'sanity'

export const standardGroup = defineType({
  name: 'standardGroup',
  title: 'School Levels (Primary / Middle / Secondary)',
  type: 'object',

  fields: [
    defineField({
      name: 'groupName',
      title: 'Group Name',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (I–V)', value: 'Primary (I–V)'},
          {title: 'Middle (VI–VIII)', value: 'Middle (VI–VIII)'},
          {title: 'Secondary (IX–X)', value: 'Secondary (IX–X)'},
        ],
      },
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
      initialValue: 'standard',
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
