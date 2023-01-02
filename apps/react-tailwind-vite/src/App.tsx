import { Button } from 'components';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900">
      <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
            Card title
          </h5>
          <p className="mb-4 text-base text-gray-700">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default App;
