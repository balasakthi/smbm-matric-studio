import {defineType} from 'sanity'
import {sectionHeaderFields} from '../../shared/sectionHeaderFields'

export const gallerySectionType = defineType({
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [...sectionHeaderFields],
})
