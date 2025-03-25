import type { ElementType } from "react";
import { H1 } from "./Headers/H1";
import { H2 } from "./Headers/H2";
import { H3 } from "./Headers/H3";
import { H4 } from "./Headers/H4";
import { P } from "./Paragraphs/P";
import { Blockquote } from "./Paragraphs/Blockquote";
import { TypographyTable } from "./Components/TypographyTable";
import { TypographyList } from "./Components/TypographyList";
import { InlineCode } from "./Paragraphs/InlineCode";
import { Lead } from "./Paragraphs/Lead";
import { Large } from "./Paragraphs/Large";
import { Small } from "./Paragraphs/Small";
import { Muted } from "./Paragraphs/Muted";
import { Bold } from "./Paragraphs/Bold";

export const variantTypography = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "blockquote",
  "table",
  "ul",
  "code",
  "lead",
  "large",
  "small",
  "muted",
  "b",
] as const;

export const variantTypographyTags: Record<
  (typeof variantTypography)[number],
  ElementType
> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: Blockquote,
  table: TypographyTable,
  ul: TypographyList,
  code: InlineCode,
  lead: Lead,
  large: Large,
  small: Small,
  muted: Muted,
  b: Bold,
};
