import Typography from 'typography';
import glenElkTheme from 'typography-theme-elk-glen';
glenElkTheme.overrideThemeStyles = () => ({
  'h1, h2, h3, h4, h5, h6, p, a': {
      color: '#D9D9CA',
      textShadow: `none`,
      backgroundImage: `none`,
  },
  
  });
const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: '1.5',
  scaleRatio: 2,
  headerWeight: 400,
  headerFontFamily: ['Oswald', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'serif'],
  
});

export const { scale, rhythm, options } = typography

export default typography;