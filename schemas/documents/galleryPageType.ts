import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const galleryPageType = defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  icon: ImagesIcon,

  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'hero.backgroundImage',
    },
  },

  fields: [
    defineField({name: 'hero', title: 'Hero Section', type: 'heroSection'}),

    defineField({name: 'gallery', title: 'Gallery Section', type: 'gallerySection'}),

    defineField({
      name: 'ctaBlock',
      title: 'Gallery Page CTA Block',
      type: 'ctaBlock',
    }),
  ],
})
