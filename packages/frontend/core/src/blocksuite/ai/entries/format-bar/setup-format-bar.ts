import '../../components/ask-ai-button';

import {
  ActionPlacement,
  type ToolbarModuleConfig,
} from '@blocksuite/affine/shared/services';
import { html } from 'lit';

import { pageAIGroups } from '../../_common/config';

export function toolbarAIEntryConfig(): ToolbarModuleConfig {
  return {
    actions: [],
  };
}
