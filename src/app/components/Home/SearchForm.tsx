// components/SearchForm.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Platform } from "@/app/types/search";
import { allSearchCategories, categoryMap } from "@/app/data/searchData";

interface SearchFormProps {
  platforms: Platform[];
  popularCategories: string[];
  actionUrl?: string;
}

const SearchForm = ({
  platforms,
  popularCategories,
  actionUrl = "/influencers",
}: SearchFormProps) => {
  const router = useRouter();

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [categoryInput, setCategoryInput] = useState("");
  const [platformOpen, setPlatformOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const formRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
        setCategoryOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getLastWord = (str: string) => {
    const match = str.match(/(\S+)\s*$/);
    return match ? match[1] : str;
  };

  const isCategorySelected = (category: string) => {
    return ` ${categoryInput.toLowerCase()} `.includes(
      ` ${category.toLowerCase()} `
    );
  };

  const handleCategoryClick = (id: string) => {
    if (isCategorySelected(id)) return;
    const txt = categoryInput;
    const newVal = txt && !txt.endsWith(" ") ? `${txt} ${id} ` : `${txt}${id} `;
    setCategoryInput(newVal);
    updateSuggestions("");
  };

  const updateSuggestions = (val: string) => {
    if (!val.trim()) {
      setSuggestions([]);
      return;
    }
    const results = allSearchCategories
      .filter((c) => c.toUpperCase().includes(val.toUpperCase()))
      .sort((a, b) => a.length - b.length)
      .slice(0, 5);
    setSuggestions(results);
  };

  const handleCategoryInputChange = (val: string) => {
    setCategoryInput(val);
    const lastWord = getLastWord(val);
    updateSuggestions(lastWord);
    setCategoryOpen(true);
  };

  const handleSuggestionClick = (id: string) => {
    if (isCategorySelected(id)) return;
    const lastWord = getLastWord(categoryInput);
    const base = categoryInput.slice(0, categoryInput.lastIndexOf(lastWord));
    setCategoryInput(`${base}${id} `);
    setSuggestions([]);
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (selectedPlatform?.id) params.set("p", selectedPlatform.id);
    if (categoryInput.trim()) params.set("c", categoryInput.trim());
    router.push(`${actionUrl}?${params.toString()}`);
  };

  return (
    <div ref={formRef} className="w-[75%] mx-auto relative max-[1400px]:w-full">
      <div
        style={{ boxShadow: "rgba(120,120,170,0.3) 0 2px 10px 0" }}
        className="relative flex items-center justify-between rounded-[50px] transition-all duration-300 cursor-pointer 
       max-[800px]:flex-col max-[800px]:rounded-[40px] max-[800px]:px-[12px] max-[800px]:pb-[12px]"
      >
        {/* Platform Filter */}
        <div
          className="flex flex-col w-full relative rounded-[30px] pl-[18px] py-[14px] 
          max-[800px]:mt-[8px] max-[800px]:pl-[22px] max-[800px]:py-[8px]"
          onClick={() => {
            setPlatformOpen((prev) => !prev);
            setCategoryOpen(false);
          }}
        >
          <div className="font-semibold text-[80%]">Platform</div>
          <div
            className={`mt-[4px] text-[86%] text-[rgb(151,163,197)] ${
              selectedPlatform
                ? "mt-[4px] text-[86%] max-[800px]:text-[100%]"
                : ""
            }`}
          >
            {selectedPlatform ? selectedPlatform.label : "Choose a platform"}
          </div>

          {platformOpen && (
            <div
              className="block absolute z-[999] top-[calc(100%+13px)] left-0 w-[calc(100%-30px)] max-h-[300px] overflow-y-scroll bg-white p-[14px] rounded-[30px] shadow-[var(--darkBoxShadow)] transition-all duration-300 
            max-[800px]:w-[calc(100%-28px)] max-[800px]:max-h-[200px]"
            >
              <div
                className="flex text-[95%] p-[15px] font-medium cursor-pointer rounded-[8px] transition-all duration-300"
                onClick={() => {
                  setSelectedPlatform(null);
                  setPlatformOpen(false);
                }}
              >
                Any
              </div>
              {platforms.map((p) => (
                <div
                  key={p.id}
                  className={`flex text-[95%] p-[15px] font-medium cursor-pointer rounded-[8px] transition-all duration-300 ${
                    selectedPlatform?.id === p.id ? "bg-[#e7e7ea]" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlatform(p);
                    setPlatformOpen(false);
                  }}
                >
                  {p.label}
                </div>
              ))}
            </div>
          )}

          {/* Mobile select */}
          <select
            className="text-[100%] hidden absolute w-full h-full top-0 left-0 opacity-0 z-[9999]"
            value={selectedPlatform?.id ?? ""}
            onChange={(e) => {
              const found =
                platforms.find((p) => p.id === e.target.value) ?? null;
              setSelectedPlatform(found);
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <option value="">All</option>
            {platforms.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className="border-r border-[#e6e6e6] h-[36px] 
       max-[800px]:border-r-0 max-[800px]:border-b max-[800px]:border-[#e6e6e6] 
       max-[800px]:h-[8px] max-[800px]:w-full"
        />

        {/* Category Filter */}
        <div
          className="flex flex-col w-full relative rounded-[30px] pl-[18px] py-[14px] 
          max-[800px]:mt-[8px] max-[800px]:pl-[22px] max-[800px]:py-[8px]"
          onClick={() => setCategoryOpen(true)}
        >
          {categoryInput && (
            <div
              className="clear-input-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCategoryInput("");
                setSuggestions([]);
              }}
            >
              <Image
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/closeModal.svg"
                alt="Clear"
                width={16}
                height={16}
                className="w-[9px] h-[10px]"
              />
            </div>
          )}
          <div className="font-semibold text-[80%]">Category</div>
          <div className="mt-[4px] text-[86%] text-[rgb(151,163,197)] max-[800px]:text-[100%]">
            <input
              className="border-none w-[calc(100%-15px)] p-0 font-inherit"
              type="text"
              placeholder="Enter keywords, niches or categories"
              value={categoryInput}
              onChange={(e) => handleCategoryInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCategoryOpen(false);
                  handleSubmit();
                }
              }}
            />
          </div>

          {categoryOpen && (
            <div
              className="absolute z-[999] top-[calc(100%+13px)] right-0 w-[calc(100%-30px)] max-h-[300px] overflow-y-scroll bg-white p-[14px] rounded-[30px] shadow-[var(--darkBoxShadow)] transition-all duration-300 
            max-[800px]:w-[calc(100%-28px)] max-[800px]:max-h-[200px]"
            >
              {suggestions.length > 0 && (
                <div className="filter-search-input-suggestion-area">
                  <div className="text-[#bbb] text-[72%] mb-[4px]">
                    Suggested
                  </div>
                  <div className="filter-search-input-suggestion-holder">
                    {suggestions.map((s) => (
                      <div
                        key={s}
                        className="filter-search-input-suggestion-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSuggestionClick(s);
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-[14px] font-semibold text-[#bbb] text-[76%]">
                Popular
              </div>
              <div className="flex items-center flex-wrap">
                {popularCategories.map((cat) => (
                  <div
                    key={cat}
                    className={`px-[12px] py-[6px] mr-[10px] mb-[12px] bg-[#F1F1F1] rounded-[5px] w-fit text-center text-[86%] transition-all duration-300 ${
                      isCategorySelected(cat) ? "selected-category" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(cat);
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="flex items-center justify-center bg-black text-white rounded-[50px] px-[15px] py-[14px] font-semibold border-none cursor-pointer mr-[12px] transition-all duration-300"
          onClick={handleSubmit}
        >
          <Image
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/search.svg"
            alt="Search"
            width={32}
            height={18}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
