import { useTranslation } from '../i18n'

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <>
      {t('hello')}
      Home
    </>
  )
}
