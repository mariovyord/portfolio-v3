---
title: 'Title of a blog article'
date: '2022-10-15'
excerpt: 'This is demo excerpt for a blog post in a blog of a site'
tags: ['JavaScript']
---

We expose a built-in component for appending elements to the head of the page. The contents of head get cleared upon unmounting the component, so make sure each page completely defines what it needs in head, without making assumptions about what other pages added.

- First
- Second

```js
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
```

## Minor heading

title, meta or any other elements (e.g. script) need to be contained as direct children of the Head element, or wrapped into maximum one level of <React.Fragment> or arrays—otherwise the tags won't be correctly picked up on client-side navigations.

## And another heading

The width property can represent either the rendered width or original width in pixels, depending on the layout and sizes properties.

When using layout="intrinsic" or layout="fixed" the width property represents the rendered width in pixels, so it will affect how large the image appears.

When using layout="responsive", layout="fill", the width property represents the original width in pixels, so it will only affect the aspect ratio.

The width property is required, except for statically imported images, or those with layout="fill".
