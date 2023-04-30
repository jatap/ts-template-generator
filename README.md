# TypeScript Template Generator

Template to generate new TypeScript projects

## Table of Contents

- [Requisites](#requisites)
- [Packages](#packages)
- [Usage](#usage)
- [IDE Support](#ide-support)
- [References](#references)
- [TODO](#todo)

## Requisites

- Node 16.x.x
- NVM 8.x.x

## Packages

- TypeScript
- Jest
- Eslint
- Prettier
- Debug

## Usage

Clone the project

```bash
$ git clone git@github.com:jatap/ts-template-generator.git
```

Create a new function in your ```~/.zshrc``` or ```~/.bashrc``` to source ```init``` file

```bash
# ~/.zshrc or ~/.bashrc

function new_ts_project() {
  source <cloned_project>/init <cloned_project>
}
```

Create a new folder

```bash
$ mkdir new_amazing_ts_package && cd $_
```

Execute TypeScript Template Generator

```bash
$ new_ts_project
```

## References

- [TypeScript Cli Template Generator](https://github.com/jatap/ts-cli-template-generator)