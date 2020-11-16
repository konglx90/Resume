import { resumeData as enResumeData } from './en'
import { resumeData as zhResumeData } from './zh'

export default function(lang: string) {

  const i18nDict = {
    zh: zhResumeData,
    en: enResumeData
  }

  const data = i18nDict[(lang as 'zh' | 'en')]
  if (!data) {
    return i18nDict['zh']
  }

  return data
}