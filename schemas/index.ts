import {aboutPage} from './aboutPage'
import {academicLevel} from './academicLevel'
import {academicResult} from './academicResult'
import {academicsPage} from './academicsPage'
import {admissionPage} from './admissionPage'
import {ctaBlock} from './ctaBlock'
import {homeHero} from './homeHero'
import {homeQuickHighlight} from './homeQuickHighlight'
import {infrastructureHighlight} from './infrastructureHighlight'
import {managementMessage} from './managementMessage'
import {schoolIntroduction} from './schoolIntroduction'
import {statsSection} from './statsSection'
import {testimonial} from './testimonial'
import {whyChooseSMBM} from './whyChooseSMBM'

import {documents} from './documents'
import {objects} from './objects'

export const schemaTypes = [
  homeHero,
  homeQuickHighlight,
  schoolIntroduction,
  managementMessage,
  whyChooseSMBM,
  statsSection,
  academicLevel,
  academicResult,
  infrastructureHighlight,
  testimonial,
  ctaBlock,
  admissionPage,
  aboutPage,
  academicsPage,
  ...documents,
  ...objects,
]
