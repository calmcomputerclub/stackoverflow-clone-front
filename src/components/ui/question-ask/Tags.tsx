import cn from "classnames";
import { Dispatch, useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { SetStateAction } from "jotai";

const SPACEBAR_CODE = " ";
const LENGTH_LIMIT = 5;

interface TagsProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const Tags = ({ setTags, tags }: TagsProps) => {
  const [tagText, setTagText] = useState("");
  const [focused, setFocused] = useState(false);

  console.log(tags);

  return (
    <div
      className={cn(
        "flex flex-wrap w-full border p-1 rounded min-h-[37px]",
        focused && "outline outline-blue-200"
      )}
    >
      {tags.length > 0 && (
        <div className="flex flex-none gap-1">
          {tags.map((t) => (
            <span
              className="flex items-center gap-1 px-2 py-[2px] bg-[#e1ecf4] text-[#39739d] rounded"
              key={t}
            >
              {t}
              <button
                onClick={() => {
                  setTags((prev) => prev.filter((item) => item !== t));
                }}
              >
                <Cross1Icon width={14} height={14} />
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        name="tags"
        className="flex-1 ml-2 outline-none"
        value={tagText}
        onBlur={() => {
          setFocused(false);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onChange={(e) => {
          if (e.target.value === " ") return;
          if (tags.length < 5) {
            setTagText(e.target.value);
          }
        }}
        onKeyDown={(e) => {
          // Block enter key
          if (e.key === "Enter") {
            e.preventDefault();
            return;
          }

          // Check tags length
          if (tags.length === LENGTH_LIMIT) {
            e.preventDefault();
            return;
          }

          // Check duplication
          if (tags.find((item) => item === tagText)) {
            e.preventDefault();
            // Reset text
            setTagText("");
            return;
          }
          if (e.key === SPACEBAR_CODE) {
            e.preventDefault();
            if (tagText === "" || tagText === " ") return;
            setTags((prev) => prev.concat(tagText));
            setTagText("");
          }
        }}
      />
    </div>
  );
};

export default Tags;
