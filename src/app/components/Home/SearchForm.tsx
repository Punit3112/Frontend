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
    <div ref={formRef} className="search-form-holder">
      <div className="search-holder">
        {/* Platform Filter */}
        <div
          className="filter-section platform-filter-section"
          onClick={() => {
            setPlatformOpen((prev) => !prev);
            setCategoryOpen(false);
          }}
        >
          <div className="filter-title">Platform</div>
          <div
            className={`filter-placeholder ${
              selectedPlatform ? "filter-placeholder-chosen" : ""
            }`}
          >
            {selectedPlatform ? selectedPlatform.label : "Choose a platform"}
          </div>

          {platformOpen && (
            <div className="filter-dropdown-holder platform-dropdown-holder">
              <div
                className="filter-dropdown-option"
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
                  className={`filter-dropdown-option ${
                    selectedPlatform?.id === p.id
                      ? "filter-dropdown-option-selected"
                      : ""
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
            className="mobile-select-dropdown"
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

        <div className="filter-seperator" />

        {/* Category Filter */}
        <div
          className="filter-section category-filter-section"
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
                className="clear-input-img"
              />
            </div>
          )}
          <div className="filter-title">Category</div>
          <div className="filter-placeholder">
            <input
              className="filter-search-input"
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
            <div className="filter-dropdown-holder category-dropdown-holder">
              {suggestions.length > 0 && (
                <div className="filter-search-input-suggestion-area">
                  <div className="filter-search-input-suggestion-title">
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

              <div className="filter-search-input-pop-title">Popular</div>
              <div className="filter-search-input-pop-holder">
                {popularCategories.map((cat) => (
                  <div
                    key={cat}
                    className={`filter-search-input-pop-option ${
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
        <button type="button" className="search-btn" onClick={handleSubmit}>
          <Image
            src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="search-img"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
