import { Fragment } from "react";
import type { Rich as RichValue } from "@/content/content";

// Renders a content string, or an array of strings and { text, href } links, in order.
export default function Rich({ value }: { value: RichValue }) {
  if (typeof value === "string") return value;
  return value.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a href={part.href} key={i}>
        {part.text}
      </a>
    ),
  );
}
