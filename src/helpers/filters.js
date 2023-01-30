export const filters = {
    'Smaller than Lithuania': (country) => {
      const LithuaniaArea = 65300
      return country.area < LithuaniaArea
    },
    'Oceania region': (country) => {
      const region = 'Oceania'
      return country.region === region
    }
  }