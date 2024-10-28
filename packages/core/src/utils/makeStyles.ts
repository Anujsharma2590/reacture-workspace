// src/utils/makeStyles.ts
import { css, CSSObject, SerializedStyles } from '@emotion/react';

/**
 * Utility function to create Emotion styles.
 * @param styles A CSSObject with styles to apply.
 * @returns SerializedStyles object to be used with Emotion.
 */
export const makeStyles = (styles: CSSObject): SerializedStyles => css(styles);