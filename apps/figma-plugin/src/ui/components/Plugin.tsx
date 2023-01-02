import { Button } from 'components';
import { FC } from 'react';

export const Plugin: FC = () => {
  function onClick() {
    parent.postMessage(
      { pluginMessage: { type: 'U2F_close', data: { nested: true } } },
      { targetOrigin: '*' }
    );
  }

  return (
    <div className="flex h-[500px] w-[300px] flex-col items-center justify-center bg-gray-700 p-4">
      <p className="text-white">Monorepo Plugin</p>
      <div className="flex-1" />
      <Button text="Close Plugin" onClick={onClick} />
    </div>
  );
};
