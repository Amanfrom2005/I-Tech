import { Search, Filter } from "lucide-react"

export default function SearchAndFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  showFilters,
  setShowFilters,
  categories,
  types,
  setCurrentPageNum,
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPageNum(1)
          }}
          className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
      </div>

      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
      >
        <Filter className="w-5 h-5" />
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                setCurrentPageNum(1)
              }}
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value)
                setCurrentPageNum(1)
              }}
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
