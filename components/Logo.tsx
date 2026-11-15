// Маленький пончик для логотипа (декоративный, поэтому aria-hidden).
export default function Logo() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <circle cx="20" cy="21" r="17" fill="#e0a35c" />
      <path
        d="M5 18c2-8 8-13 15-13s13 5 15 13c-1 3-3 2-4 4-1 2-3 3-4 1s-3-2-4 0-3 3-5 1-3-2-4 0-3 2-4 0-2-2-3-1-2-2-2-5z"
        fill="#f4a6b8"
      />
      <g fill="#fff6e9">
        <rect x="11" y="11" width="3" height="1.4" rx=".7" transform="rotate(-30 12 12)" />
        <rect x="22" y="9" width="3" height="1.4" rx=".7" transform="rotate(20 23 10)" />
        <rect x="27" y="15" width="3" height="1.4" rx=".7" transform="rotate(-50 28 16)" />
        <rect x="16" y="15" width="3" height="1.4" rx=".7" transform="rotate(60 17 16)" />
      </g>
      <ellipse cx="13" cy="10" rx="3" ry="1.4" fill="#fff" opacity=".5" transform="rotate(-30 13 10)" />
    </svg>
  );
}
