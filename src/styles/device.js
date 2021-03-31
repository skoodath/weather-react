const size = {
  mobileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLg: '1280px',
  desktop: '1440px'
}

export const device = {
  mobileMD: `(min-width: ${size.mobileMd})`,
  mobileLG: `(min-width: ${size.mobileLg})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLG: `(min-width: ${size.laptopLg})`,
  desktop: `(min-width: ${size.desktop})`,
};