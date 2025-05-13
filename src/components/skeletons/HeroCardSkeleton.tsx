

const HeroCardSkeleton = () => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-96 overflow-hidden relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-200"></div>
        </div>
        <div class="px-6 py-2">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="mt-1 h-4 bg-gray-200 rounded w-1/2"></div>
            <div class="mt-4 h-4 bg-gray-200 rounded"></div>
        </div>
        <div class="px-6 py-2">
            <div class="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
            <div class="inline-block bg-red-200 text-red-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
            <div class="inline-block bg-green-200 text-green-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
            <div class="inline-block bg-purple-200 text-purple-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
            <div class="inline-block bg-amber-200 text-amber-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
            <div class="inline-block bg-teal-200 text-teal-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold mt-1">
            <div class="h-4 bg-gray-200 rounded"></div>
            </div>
        </div>
    </div>
  );
}

export default HeroCardSkeleton;