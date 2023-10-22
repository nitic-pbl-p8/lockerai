<!-- markdownlint-disable MD024 MD033 MD041 -->

<p align="center" dir="auto">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/nitic-pbl-p8/lockerai/assets/85730998/674aea68-3b93-477d-9981-c4966240a9e7">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/nitic-pbl-p8/lockerai/assets/85730998/9b8973a3-c78a-4810-b296-538aef808d24">
    <img src="https://github.com/nitic-pbl-p8/lockerai/assets/85730998/674aea68-3b93-477d-9981-c4966240a9e7" alt="Locker.ai" width="80%" height="auto" />
  </picture>
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,nextjs,react,tailwind,nestjs,apollo,postgres,jest,graphql,supabase,gcp,docker,vscode,githubactions" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-orange" />
  <img src="https://img.shields.io/badge/codespaces-available-brightgreen" />
  <img src="https://img.shields.io/badge/storybook-available-brightgreen" />
</p>

# Locker.ai 🗝️

Locker.ai is a service that uses a unique AI-driven authentication mechanism to safely report and retrieve lost items.

## Core Contributors 🛠️

|                                           shio                                           |                                         st20089ki                                          |                                           ituki                                            |
| :--------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| [<img src="https://github.com/dino3616.png" width="160px">](https://github.com/dino3616) | [<img src="https://github.com/st20089ki.png" width="160px">](https://github.com/st20089ki) | [<img src="https://github.com/ituki0426.png" width="160px">](https://github.com/ituki0426) |
|                   `#repository-owner` `#designer` `#backend-engineer`                    |                                    `#frontend-engineer`                                    |                             `#backend-engineer` `#ml-engineer`                             |

## Setup with Docker Compose 🐙

You can easily launch the development environment of Locker.ai  with Docker Compose.  
Here is the step-by-step guide.

### Attention

- This method cannot build the [Supabase development environment locally](https://supabase.com/docs/guides/cli/local-development). If you wish to do so, please refer to the next section, [Setup locally](#setup-locally-️).
- You need to install [Docker](https://docs.docker.com/get-docker) and [Docker Compose](https://docs.docker.com/compose/install) before.
- Developers in a Windows environment are encouraged to run Docker on WSL2 instead of directly on Windows due to performance concerns.
- [Optional] You should install project recommended VSCode extensions that specified in [`.devcontainer/devcontainer.json`](./.devcontainer/devcontainer.json#L8C6-L38C8) before.

### 1. clone git repository

```bash
git clone "https://github.com/nitic-pbl-p8/lockerai" && cd "./lockerai"
```

### 2. launch conatiner

```bash
docker compose -f "./docker/docker-compose.development.yaml" -p "lockerai" up -d
```

### 3. set environment variables

See `.env.example` or contact the [repository owner](https://github.com/dino3616) for more details.

### 4. install dependencies

```bash
pnpm install
```

## Setup locally 🖥️

If you need to build the [Supabase development environment locally](https://supabase.com/docs/guides/cli/local-development), please follow the steps below.

### Attention

- You need to install [Docker](https://docs.docker.com/get-docker) and [Docker Compose](https://docs.docker.com/compose/install), and [Volta](https://docs.volta.sh/guide/getting-started) (optional) before.
- You need to install [Node.js](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation) that specified in [`package.json`](./package.json#L7C2-L15C5) before. (With Volta, you can easily install a specified version of the tool. Recommendation.)
- [Optional] You should install project recommended VSCode extensions that specified in [`.devcontainer/devcontainer.json`](./.devcontainer/devcontainer.json#L8C6-L38C8) before.

### 1. clone git repository

```bash
git clone "https://github.com/nitic-pbl-p8/lockerai" && cd "./lockerai"
```

### 2. set environment variables

See `.env.example` or contact the [repository owner](https://github.com/dino3616) for more details.

### 3. install dependencies

```bash
pnpm install
```

### 4. setup supabase

See [Supabase official documentation](https://supabase.com/docs/guides/cli/local-development) for more details.

## Project Useful Links 📚

Here are some useful links for this project.

## Design

- [Figma](https://www.figma.com/file/xNKAhniAfPPTsL987xRCVe/website?type=design&node-id=20%3A35&mode=design&t=oAlQP6Jqqk0ZcqOy-1)

## Component Catalog

- [Storybook](https://main--653402bb608cd8eb750c3867.chromatic.com)
- [Chromatic](https://www.chromatic.com/library?appId=653402bb608cd8eb750c3867&branch=main)
