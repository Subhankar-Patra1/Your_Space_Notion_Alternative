import { AIStarIcon } from '@blocksuite/affine/components/icons';
import { DocModeProvider } from '@blocksuite/affine/shared/services';
import {
  type SlashMenuActionItem,
  SlashMenuConfigExtension,
  type SlashMenuContext,
  type SlashMenuItem,
  type SlashMenuSubMenu,
} from '@blocksuite/affine/widgets/slash-menu';
import { MoreHorizontalIcon } from '@blocksuite/icons/lit';
import { html } from 'lit';

import { pageAIGroups } from '../_common/config';
import { handleInlineAskAIAction } from '../actions/doc-handler';
import type { AIItemConfig } from '../components/ai-item/types';
import {
  AFFINE_AI_PANEL_WIDGET,
  type AffineAIPanelWidget,
} from '../widgets/ai-panel/ai-panel';

export function AiSlashMenuConfigExtension() {
  return SlashMenuConfigExtension('ai', {
    items: [],
  });
}
