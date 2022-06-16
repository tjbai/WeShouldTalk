import { extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Button } from './button';

export const theme = extendTheme({
  colors: {
    brand: {
        100: '#B25068',
        200: '#783848'
    },
  },
  fonts: {
      body: 'Open Sans, sans-serif'
  },
  styles: {
      global: () => ({
          body: {
              bg: 'gray.200',
          }
      })
  },
  components: {
    Button,
  }
})
