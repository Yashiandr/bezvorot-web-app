export function textToHSL(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) + hash);
  }

  const h = Math.abs(hash) % 360;
  const s = 70 + (Math.abs(hash) % 30);
  const l = 40 + (Math.abs(hash) % 30);

  const textColor = l < 47 ? "oklch(0.985 0 0)" : "oklch(0.21 0.006 285.885)";

  return {
    background: `hsl(${h} ${s}% ${l}%)`,
    color: textColor,
  };
}
