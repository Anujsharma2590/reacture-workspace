// src/utils/makeStyles.ts
import { css, CSSObject, SerializedStyles } from '@emotion/react';

/**
 * Utility function to generate a hook for Emotion styles.
 * @param styles A record of CSSObject styles to apply.
 * @returns A hook that provides serialized styles.
 */
export const makeStyles = (
  styles: Record<string, CSSObject>
): (() => Record<string, SerializedStyles>) => {
  return () => {
    const generatedStyles: Record<string, SerializedStyles> = {};
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        generatedStyles[key] = css(styles[key]);
      }
    }
    return generatedStyles;
  };
};
