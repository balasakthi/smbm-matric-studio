import {defineField, defineType} from 'sanity'

export const admissionsPage = defineType({
  name: 'admissionsPage',
  title: 'Admissions Page',
  type: 'document',
  fields: [
    // 1️⃣ Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // 2️⃣ Who Can Apply
    defineField({
      name: 'eligibleLevels',
      title: 'Who Can Apply',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Eg: Kindergarten, Primary, Middle, High School, Higher Secondary',
      validation: (Rule) => Rule.min(1),
    }),

    // 3️⃣ Admission Process
    defineField({
      name: 'admissionSteps',
      title: 'Admission Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stepTitle',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'stepDescription',
              title: 'Step Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // 4️⃣ Documents Required
    defineField({
      name: 'requiredDocuments',
      title: 'Documents Required',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),

    // 5️⃣ Age Criteria
    defineField({
      name: 'ageCriteriaNote',
      title: 'Age Criteria Note',
      type: 'text',
      rows: 2,
      description: 'Generic statement as per board norms',
    }),

    // 6️⃣ Fee Information
    defineField({
      name: 'feeInformationNote',
      title: 'Fee Information Note',
      type: 'text',
      rows: 2,
      description: 'Do not include fee amounts',
    }),

    // 7️⃣ Contact CTA
    defineField({
      name: 'contactTitle',
      title: 'Contact CTA Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact CTA Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactButtonLink',
      title: 'Contact Button Link',
      type: 'string',
      description: 'Eg: /contact',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
