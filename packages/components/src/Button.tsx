import { FC } from 'react';

interface Props {
  text?: string;
}

export const Button: FC<Props> = ({ text = 'Button' }) => {
  return (
    <div className="rounded-md">
      <a href="#">
        <div className="bg-hero font-manrope flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-black no-underline md:py-3 md:px-10 md:text-lg md:leading-6">
          {text}
        </div>
      </a>
    </div>
  );
};
