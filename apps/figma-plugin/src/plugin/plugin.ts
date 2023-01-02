import type { FigmaPluginMessage } from 'types';

async function runPlugin() {
  console.log('ran it');

  figma.showUI(__html__, { width: 300, height: 500 });

  figma.ui.onmessage = async (message: FigmaPluginMessage) => {
    console.log(message);

    switch (message.type) {
      case 'U2F_close': {
        figma.closePlugin();
      }
    }
  };
}

runPlugin();
