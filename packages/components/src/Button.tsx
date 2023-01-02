import { FC } from 'react';

interface Props {
  text?: string;
  onClick?: () => void;
}

export const Button: FC<Props> = ({ text = 'Button', onClick }) => {
  return (
    <div className="rounded-md">
      <a href="#">
        <div
          onClick={onClick}
          className="bg-hero font-manrope flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-black no-underline md:py-3 md:px-10 md:text-lg md:leading-6"
        >
          {text}
        </div>
      </a>
    </div>
  );
};
