export interface IDep {
  [name: string]: string;
}

export interface IPackage {
  dependencies?: IDep;
  devDependencies?: IDep;
}

export interface IPlugin {
  id: string;
  // Currently only used for config
  key: string;
  path: string;
  apply: Function;

  config?: IPluginConfig;
  isPreset?: boolean;
  api?: any;
}

export interface IPluginConfig {
  default?: any;
  schema?: Function;
  // validate?: Function;
  onChange?: Function;
}

export interface IPreset extends IPlugin {}

export interface IHook {
  key: string;
  fn: Function;
  pluginId?: string;
  before?: string;
  stage?: number;
}

export interface ICommand {
  name: string;
  fn: Function;
}