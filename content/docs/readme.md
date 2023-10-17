---
sidebar_position: 1
slug: '/'
---

# Tutorial Intro

This guide will help you get started with [ElevenLabs](https://elevenlabs.io). We will cover everything, starting with creating an account, and then moving to cloning your first voice and generating your initial voiceover. We will also cover prompting techniques (how to influence the AI's performance) as well as its current limitations and challenges.

We will guide you through the various stages of ElevenLabs, starting with [VoiceLab](https://elevenlabs.io/voice-lab); this is where you can create or clone voices according to your preferences. Once you have set up your desired voices, we will move on to [Speech Synthesis](https://elevenlabs.io/speech-synthesis). Here, you will be able to generate your first audio outputs using the pre-made voices or the ones you've created or cloned.






## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

import CardList from '@site/src/components/CardList'

<CardList
items={[
{
icon: require("./assets/dialog.png").default,
href: "/#snap_dialog",
title: "Dialogs",
description: "Display custom alert, confirmation, or prompt screens in MetaMask."
}
]}
/>

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
