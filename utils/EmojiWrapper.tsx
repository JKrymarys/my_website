/* eslint-disable jsx-a11y/accessible-emoji */

const EmojiWrapper = ({ label, emoji }: any) => (
  <span className="mx-2" role="img" aria-label={label}>
    {emoji}
  </span>
);

export default EmojiWrapper;
