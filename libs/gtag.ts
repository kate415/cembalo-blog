export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''

export const existsGaId = GA_ID !== ''

export const pageView = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

type Event = {
  action: string
  category: string
  label: string
  value?: string
}

export const event = ({ action, category, label, value = '' }: Event) => {
  if (!existsGaId) {
    return
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
