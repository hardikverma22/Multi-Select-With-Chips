import Link from "next/link";

const Info = () => {
  return (
    <div className="flex flex-col gap-1 mb-10">
      <h1 className="font-bold text-2xl tracking-wide text-stone-600">Custom Select with Chips</h1>

      <p className="text-md font-semibold underline">Keyboard Accessible - Supported Keys:</p>
      <ul className="bg-white w-max p-3 shadow-lg rounded-lg mb-3">
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Arrow Down - Move to Next Item</span>
        </li>
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Arrow Up - move to Previous Item</span>
        </li>
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Enter - Select the Highlighted Item</span>
        </li>
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Ctrl + Enter - Keep Selecting the Highlighted Item</span>
        </li>
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Backspace - select he last chips and Remove it</span>
        </li>
        <li className="flex gap-1 items-center justify-start">
          <RightIcon />
          <span>Ctrl + Click - Multi Select Items</span>
        </li>
      </ul>

      <Link
        href="https://github.com/hardikverma22/Multi-Select-With-Chips"
        className="text-xm hover:underline hover:underline-offset-2 text-blue-800"
      >
        Source Code
      </Link>
    </div>
  );
};

const RightIcon = () => {
  return (
    <svg
      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};

export default Info;
