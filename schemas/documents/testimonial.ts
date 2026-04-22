import {defineType, defineField} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Alumni Testimonial',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Alumni Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Profession / Role',
      type: 'string',
      description: 'Example: Orthopedic Surgeon, Software Engineer',
    }),

    defineField({
      name: 'organization',
      title: 'Organization / Company',
      type: 'string',
      description: 'Example: Cognizant, Siemens Healthineers',
    }),

    defineField({
      name: 'batch',
      title: 'Batch Year',
      type: 'number',
      description: 'Example: 2010 (optional)',
    }),

    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
      description: 'Short testimonial message from the alumnus',
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional alumini photo',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
