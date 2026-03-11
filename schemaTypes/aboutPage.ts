import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About SMBM School',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'schoolOverview',
      title: 'School Overview',
      type: 'text',
      rows: 6,
      description: 'Intro about SMBM School',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Eg: Respect, Tolerance, Inclusion, Excellence',
    }),

    defineField({
      name: 'motto',
      title: 'School Motto / Aphorism',
      type: 'string',
      description: 'Eg: அடக்கம், பணிவு, உழைப்பு, எழுச்சி, இலட்சியம்',
    }),

    defineField({
      name: 'trustOverview',
      title: 'DNU Trust Overview',
      type: 'text',
      rows: 8,
      description: 'About Dindigul Nadar Uravinmurai',
    }),

    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number',
      initialValue: 1984,
    }),
  ],
})
