import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#060B14',
          surface: '#0B1324',
          primary: '#2563FF',
          secondary: '#4EA8FF',
          'on-background': '#F8FAFC',
          'on-surface': '#F8FAFC',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      rounded: 'xl',
    },
    VCard: {
      rounded: 'xl',
    },
  },
})