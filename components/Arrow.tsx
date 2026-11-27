// The design kit's drawn arrow (motion.css moves it on hover); the last child of a primary button.
export default function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}
