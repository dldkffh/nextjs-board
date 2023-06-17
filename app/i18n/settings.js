// https://locize.com/blog/next-13-app-dir-i18n/

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ko']
export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
