export const bgColors = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  ternary: 'bg-ternary',
  white: 'bg-white',
  black: 'bg-black',
  darkBrown: 'bg-darkBrown',
  cyan: ' bg-cyan',
  content: 'bg-content',
};

export interface PageProps {
  editTheme?: (newSettings: any) => void;
  background_color?: keyof typeof bgColors;
}
