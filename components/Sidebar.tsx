import { getCategories } from '@/utils/api';
import React, { useState, useEffect } from 'react';



const Sidebar = ({ onCategoryChange }:SidebarProps) => {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className=" border border-light shadow-xl  p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Categories</h2><ul>
  {categories?.map((category) => (
    <li key={category.slug}>
      <a
        className="block  py-2 px-6 hover:bg-gray-200 rounded-md cursor-pointer"
        onClick={() => onCategoryChange?.(category.slug)}
      >
        {category.name}
      </a>
    </li>
  ))}
</ul>
    </aside>
  );
};

export default Sidebar;