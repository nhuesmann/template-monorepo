import { Button } from 'components';

function App() {
  return (
    <div className="flex h-screen items-center">
      <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
        <div className="invisible absolute -inset-y-40 inset-x-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
        <div className="relative rounded-[15px] bg-white p-6">
          <div className="space-y-4">
            <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
            <p className="text-lg font-semibold text-slate-800">
              Fast and Furious
            </p>
            <p className="text-slate-500">
              Optimized with code-splitting, tree-shaking, optimized cold-start,
              link prefetching, payload extraction, just to name a few. Fast by
              default so you can focus on building.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
