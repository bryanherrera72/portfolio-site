import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: '1.5',
  scaleRatio: 2.5,
  headerWeight: 400,
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '400',
      ],
    },
    {
      name: 'Yanone Kaffeesatz',
      styles: [
        '400',
      ],
    },
  ],
  headerFontFamily: ['Yanone Kaffeesatz', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Lato', 'Helvetica Neue','serif'],
});

export const { scale, rhythm, options } = typography
// headerFontFamily: ['Yanone Kaffeesatz', 'Oswald', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
// bodyFontFamily: ['PT Sans', 'serif'],
export default typography;