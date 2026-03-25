export interface Platform {
  id: string;
  label: string;
}

export interface SearchFormProps {
  platforms?: Platform[];
  popularCategories?: string[];
  actionUrl?: string;
}
