import React, { createContext } from "react";

interface Config {
  prefix?: string
}

const defaultConfig: Config = {
  prefix: 'zl-myui'
}

export const ConfigContext = createContext(defaultConfig)
