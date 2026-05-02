import {defineField} from 'sanity'

export const sectionHeaderFields = [
  defineField({
    name: 'label',
    title: 'Label',
    type: 'string',
    description: 'Optional introductory badge or tag (e.g., "Why Choose Us").',
  }),
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    description: 'Main heading summarizing the section.',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'subtitle',
    title: 'Subtitle',
    type: 'string',
    description: 'Supporting text or call-to-action.',
  }),
]
