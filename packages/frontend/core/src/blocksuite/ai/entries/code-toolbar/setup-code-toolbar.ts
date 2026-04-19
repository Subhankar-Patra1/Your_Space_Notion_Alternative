import '../../components/ask-ai-button';

import { html } from 'lit';

const AICodeItemGroups = buildAICodeItemGroups();
const buttonOptions: AskAIButtonOptions = {
  size: 'small',
  panelWidth: 240,
};

import type { AffineCodeToolbarWidget } from '@blocksuite/affine/blocks/code';
import { BlockSelection } from '@blocksuite/affine/std';

import { buildAICodeItemGroups } from '../../_common/config';
import type { AskAIButtonOptions } from '../../components/ask-ai-button';

export function setupCodeToolbarAIEntry(codeToolbar: AffineCodeToolbarWidget) {
  // disabled ask-ai-button for code toolbar
}
