// src/utils/makeStyles.ts
import { css, CSSObject, SerializedStyles } from '@emotion/react';

/**
 * Utility function to create Emotion styles.
 * @param styles A record of CSSObject styles to apply.
 * @returns A record of SerializedStyles for use with Emotion.
 */
export const makeStyles = (
  styles: Record<string, CSSObject>
): Record<string, SerializedStyles> => {
  const generatedStyles: Record<string, SerializedStyles> = {};

  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      generatedStyles[key] = css(styles[key]);
    }
  }

  return generatedStyles;
};
