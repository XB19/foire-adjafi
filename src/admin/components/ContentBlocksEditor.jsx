import { FaPlus, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa6";

const blockLabels = { p: "Paragraphe", h3: "Sous-titre", ul: "Liste à puces" };

function emptyBlock(type) {
  if (type === "ul") return { type: "ul", items: [""] };
  return { type, text: "" };
}

export default function ContentBlocksEditor({ blocks, onChange }) {
  const update = (index, next) => {
    const copy = [...blocks];
    copy[index] = next;
    onChange(copy);
  };

  const remove = (index) => onChange(blocks.filter((_, i) => i !== index));

  const move = (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= blocks.length) return;
    const copy = [...blocks];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    onChange(copy);
  };

  const addBlock = (type) => onChange([...blocks, emptyBlock(type)]);

  return (
    <div>
      <div className="space-y-3">
        {blocks.map((block, i) => (
          <div key={i} className="rounded-xl border border-adjafi-gray-light p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mont-black text-[11px] uppercase tracking-wide text-adjafi-green">
                {blockLabels[block.type] ?? block.type}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  aria-label="Monter"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-adjafi-gray hover:bg-adjafi-gray-light disabled:opacity-30"
                >
                  <FaArrowUp className="text-[10px]" />
                </button>
                <button
                  type="button"
                  onClick={() => move(i, 1)}
                  disabled={i === blocks.length - 1}
                  aria-label="Descendre"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-adjafi-gray hover:bg-adjafi-gray-light disabled:opacity-30"
                >
                  <FaArrowDown className="text-[10px]" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  aria-label="Supprimer ce bloc"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-adjafi-gray hover:bg-red-100 hover:text-red-600"
                >
                  <FaTrash className="text-[10px]" />
                </button>
              </div>
            </div>

            {block.type === "ul" ? (
              <div className="space-y-2">
                {block.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2">
                    <input
                      value={item}
                      onChange={(e) => {
                        const items = [...block.items];
                        items[itemIndex] = e.target.value;
                        update(i, { ...block, items });
                      }}
                      className="w-full rounded-lg border border-adjafi-gray-light px-3 py-2 font-open-sans text-sm outline-none focus:border-adjafi-green"
                      placeholder="Élément de liste"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const items = block.items.filter((_, x) => x !== itemIndex);
                        update(i, { ...block, items });
                      }}
                      aria-label="Retirer cet élément"
                      className="shrink-0 rounded-lg px-2 text-adjafi-gray hover:text-red-600"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => update(i, { ...block, items: [...block.items, ""] })}
                  className="font-mont-black text-xs tracking-wide text-adjafi-green hover:underline"
                >
                  + Ajouter un élément
                </button>
              </div>
            ) : (
              <textarea
                value={block.text}
                onChange={(e) => update(i, { ...block, text: e.target.value })}
                rows={block.type === "h3" ? 1 : 4}
                className="w-full rounded-lg border border-adjafi-gray-light px-3 py-2 font-open-sans text-sm outline-none focus:border-adjafi-green"
                placeholder={block.type === "h3" ? "Titre de section" : "Texte du paragraphe"}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {Object.entries(blockLabels).map(([type, label]) => (
          <button
            key={type}
            type="button"
            onClick={() => addBlock(type)}
            className="flex items-center gap-1 rounded-full border border-adjafi-gray-light px-4 py-2 font-mont-black text-xs tracking-wide text-adjafi-ink hover:border-adjafi-green hover:text-adjafi-green"
          >
            <FaPlus className="text-[10px]" /> {label}
          </button>
        ))}
      </div>
    </div>
  );
}
