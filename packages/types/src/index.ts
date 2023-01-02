export type Workspace = {
  name: string;
  version: string;
};

export interface FigmaPluginMessage {
  type:
    | 'F2U_init'
    | 'F2U_selection_change'
    | 'F2U_error'
    | 'U2F_debug_log'
    | 'U2F_cache_key'
    | 'U2F_lock_selection'
    | 'U2F_write_complete'
    | 'U2F_close';
  data?: any;
  error?: string;
}
