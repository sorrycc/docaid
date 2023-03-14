import { createGlobalStyle, useDocAidTheme } from 'umi';
import { globalCSS } from 'leeguoo-docaid/client';

export function rootContainer(container: any) {
  const theme = useDocAidTheme();
  const GlobalStyle = createGlobalStyle`
    ${globalCSS}
    ${theme.globalCSS}
  `;
  return (
    <>
      <GlobalStyle />
      {container}
    </>
  );
}
