# Getting Started With Svelte (Stop Using React!)

![Banner](./docs/images/banner.png)

Learn why **Svelte is the most loved web framework** & let's **build your first Svelte App** with a Kintone Database!

Our free, live workshop will walk you through creating a Web Database App, setting up a Svelte project, and using GET and POST requests to save to a Kintone web database.

## Outline <!-- omit in toc -->
* [Completed Project](#completed-project)
* [Get Started](#get-started)
* [Get Your Free Kintone Database](#get-your-free-kintone-database)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
* [Kintone API Token](#kintone-api-token)
* [Create a `.env` File](#create-a-env-file)
* [Appendix](#appendix)
  * [What is Svelte?](#what-is-svelte)
  * [What is Kintone?](#what-is-kintone)
* [Debugging - Let's Fix Those Problems 💪](#debugging---lets-fix-those-problems-)
  * [`npm install` command is not working](#npm-install-command-is-not-working)

---

## Completed Project
![Finished-Project](./docs/images/finished-project.gif)

## Get Started

First, clone the [kintone-workshops/intro-to-svelte](https://github.com/kintone-workshops/intro-to-svelte) repo!  🚀  
Then go inside the folder.

```shell
cd Downloads

git clone https://github.com/kintone-workshops/intro-to-svelte

cd intro-to-svelte
```

Open the `intro-to-svelte` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line) as well:

```shell
code .
```

Once you are inside the folder, let's install the dependencies and open our project:

```shell
npm install

npm run dev
```

## Get Your Free Kintone Database

[bit.ly/KDP_NEW](http://bit.ly/KDP_NEW)
* ⚡ Only use lowercase, numbers, & hyphens in your subdomain
* ⚠ Do not use uppercase or special characters

|                                                                                            |                                                                                                                      |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign-up form](./docs/images/SignUp-1.png) | ![Step 2: Email address will be the login name & the subdomain will be your unique link](./docs/images/SignUp-2.png) |

---

## Create a Kintone Web Database App

| Steps                                                                                  | Screenshot                                                                                                                            |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| From the Kintone portal, click the [+] button to create an App                         | ![Click on the + button on the right of the Apps section from the Kintone Portal](./docs/images/build-database-01.png)                |
| Select **Create App from Scratch** option                                              | ![Kintone Marketplace page > Create New App section > select the Create App from Scratch button](./docs/images/build-database-02.png) |
| Name the App (Ex: _Kintone Cards_)                                                     | ![Set the App's name to Kintone Cards](./docs/images/build-database-03.png)                                                           |
| Add **Text** and **Radio Button** fields                                               | ![Drag the text and radio button fields to the center](./docs/images/build-database-04.png)                                           |
| Open the **Text** field settings                                                       | ![Hover over the text field gear > select the Settings option](./docs/images/build-database-05.png)                                   |
| Set the **Name** (`Title`) and **Field Code** (`title`)                                | ![Set the Name to Title and Field Code to title](./docs/images/build-database-06.png)                                                 |
| Open the **Radio Button** field settings                                               | ![Hover over the Radio Button field gear > select the Settings option](./docs/images/build-database-07.png)                           |
| Set the **Name** (`Color`), **Options** (`Red` & `Blue`), and **Field Code** (`color`) | ![Set the Name to COlor, options to Red and Blue, and Field Code to color](./docs/images/build-database-08.png)                       |
| Last, remember to save your changes!                                                   | ![Click on the blue Activate App button](./docs/images/build-database-09.png)                                                         |

⚠️ Warning ⚠️
* Field Code is case sensitive
* Field Code and options must be as specified in the steps, or the code will not work

---

## Kintone API Token

To generate an API Token for a Kintone App:

1. Go to the Kintone App
1. Go to the Gear icon ⚙️ (top right corner) > Open the App Settings page
1. Click on the **App Settings** Tab > Click on **API Token** settings
1. Click the `Generate` button to generate a token
1. Enable the `View records`, `Add records` and `Edit records` checkboxes
1. Click the `Save` button (top left corner) to save the token setting
1. Finally, click the `Update App` button (top right corner) to implement the token setting change.

Confused? 🤔 → Check out the gif below:

<details>
  <summary>Generate a Kintone API Token Gif 📺</summary>

  ![APIToken.gif](./docs/images/APIToken.gif)

</details>

---

## Create a `.env` File

1. Using the [.env.example](.env.example) file as a template, create a `.env` file.
1. Then input your Kintone credentials like the following:

```txt
VITE_SUBDOMAIN = "example"
VITE_APPID = "1"
VITE_APITOKEN = "abcdefghijklmnopqrstuvwxyz"
```

### ⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  <!-- omit in toc -->
[.env.example](.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

---

## Appendix

### What is Svelte?

Svelte is a free, open-source frontend JavaScript framework for making interactive web apps.

* Unlike React, Svelte compiles code to small, framework-less vanilla JS to optimize for speed
* Unlike React, Svelte surgically updates the DOM, so you don't have to worry about a virtual DOM diffing.

### What is Kintone?

Kintone is a no-code/low-code cloud platform for teams to quickly & easily share and collaborate on their data.

You can add JavaScript, CSS, &/or HTML to enhance the frontend UI/UX of a Kintone App. This can include features such as maps, buttons, and color-coding.

Read up on how to customize and develop on the Kintone platform at [kintone.dev](https://kintone.dev/)

---

## Debugging - Let's Fix Those Problems 💪

Here is a rundown of common problems that may occur & their solutions!

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `intro-to-svelte` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `intro-to-svelte` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`
