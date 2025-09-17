# @reacture-io/eslint-config

by [reacture](https://www.reacture.io/)

A collection of eslint configuration files for consistent development across Reacture

## Overview

This package provides standardized eslint configurations that can be extended in your projects to ensure consistent eslint settings and development experience.

## Installation

```bash
pnpm i --save-dev @reacture-io/eslint-config
```

## Configurations

- **`./base`** - Base configuration for JS/TS projects
- **`./react`** - React applications with Next.js support
- **`./node`** - Node.js backend applications

## Usage

```javascript
// eslint.config.js
import baseConfig from '@reacture-io/eslint-config/base';
export default baseConfig;

// For React
import reactConfig from '@reacture-io/eslint-config/react';
export default reactConfig;

// For Node.js
import nodeConfig from '@reacture-io/eslint-config/node';
export default nodeConfig;
```
