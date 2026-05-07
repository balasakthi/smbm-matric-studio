import {defineField, defineType, defineArrayMember} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album Name',
      type: 'string',
      description: 'Example: Boating, Annual Day',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Main Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),

    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          name: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }),
          ],
        }),
      ],
      options: {layout: 'grid'},
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'category.title',
    },
  },
})
