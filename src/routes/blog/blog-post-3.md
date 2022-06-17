---
title: Show off your features! 👩‍💻
description: This post shows what markdown can do.
date: '2022-6-11 19:25:10'
---

<script>
    import Icon from '@iconify/svelte'
    import {darkMode} from '$lib/global-store';
    import Counter from '$lib/components/Counter.svelte';
    import 'prism-themes/themes/prism-one-dark.css'

    let theme;
    $: theme = $darkMode ? 'dark' : 'light';
</script>

<style>
    .counter-wrapper {
        width:100%;
        max-width: 300px;
    }

    img {
        max-width: 100%;
    }

    .contains-task-list {
        list-style: none;
        padding: 0;
    }
</style>

## Text content

---

Normal text content: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam est adipisci numquam. Placeat expedita dignissimos quo rem, ducimus quos ea iusto, voluptas repellat unde tenetur deserunt repudiandae, sequi itaque ipsum saepe adipisci a culpa in quaerat libero! Magni, quidem! Fugiat.

**Bold text content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nemo exercitationem molestias aspernatur laudantium doloribus perferendis beatae voluptate placeat qui labore? Dolor eum numquam, excepturi vel nostrum cupiditate neque pariatur odio beatae minus omnis rem ipsa corrupti voluptas natus velit.**

_Italic text content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis, esse delectus odit ea pariatur! Nam eligendi pariatur autem, beatae qui sunt placeat praesentium, quae dolor neque earum excepturi harum aliquam assumenda et! Unde, fugit! Et magni commodi sed nihil._

~~Strikethrough text content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non labore qui architecto voluptas adipisci possimus doloribus perspiciatis, autem neque sunt consectetur nam, dignissimos et, accusamus quod nostrum. Molestias, aliquid. The world is flat.~~

## Headers

---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Interactive content

---

<div class="counter-wrapper">
<Counter />
</div>

## Images

---

![A sweet cat o.o](/images/cat.webp)

## Links

---

[Let's go to the home! (opens in same tab) 🔗](/)

<a href="https://google.com" target="_blank">Let's go to some other website! (opens in new tab) 🔗</a>

## Blockquotes

---

> "Life is like riding a bicycle. To keep your balance, you must keep moving."
>
> ~ Albert Einstein

> This is pretty cool
>
> > and it even gets deeper 🐟
> >
> > > 🐳 wow so deep

## Lists

---

1. This
2. List
3. Is
4. Ordered 😎

- This
- List
- Isn't
- Ordered 😢

## Horizontal rules

---

## Table

---

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Variables

---

You're viewing this article with {theme} mode.

The value of π is: {Math.PI}...

## Task list

---

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Icons

---

<Icon icon="material-symbols:work" style="font-size:24px;" />
<Icon icon="material-symbols:wifi-rounded" style="font-size:24px;" />
<Icon icon="material-symbols:vpn-lock" style="font-size:24px;" />

## Code

---

We can use `inline code` just like this.

## Fenced Code Block

---

```js
let characters = ['🥳', '🎉', '✨'];

let confetti = new Array(100)
	.fill(100)
	.map((_, i) => {
		return {
			character: characters[i % characters.length],
			r: 0.1 + Math.random() * 1
		};
	})
	.sort((a, b) => a.r - b.r)
	.map((x) => x.character);

/* IT EVEN SUPPORTS SYNTAX HIGHLIGHTING!!! */
result = confetti.join(' ');
```

## Literally EVERYTHING else you can do with HTML, CSS and Javascript
