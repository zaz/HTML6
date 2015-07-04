# HTML6

![HTML6](/turtle.png)

## The Distributed Specification

### Section 1 - Introduction

HTML5 has made some great improvements over HTML4: Bringing us new semantic tags like `<nav>`, `<time>`, and `<meter>`; allowing us to easily embed media in the form of `<video>` and `<audio>` tags; and giving us a whole bunch of awesome JavaScript APIs. However, there is still one major leap that HTML has yet to make, and that is the leap to becoming truly distributed.

With  HTML6, you define your own specification, allowing you to mark things up how you want to mark them up. Instead of `<div class="wrapper">`, you can just use `<wrapper>`. Want a calendar? No problem:

```html
<calendar>
  <month name="August">
    <day>1</day>
    <day>2</day>
    <day>3</day>
    <!-- &c. -->
  </month>
</calendar>
```

You can finally stop wasting your time trying to decide whether your element should be an `<aside>`, a `<figure>`, or just a plain `<div>`, and simply call it what it is!

The web is moving at a faster pace than ever, and to keep up we need markup that stays out of our way and lets us do our job. This spec' enables us to do just that. It finally does away with fatuous semantics that are too abstract for anyone to understand, and brings developers a new, simpler, cleaner markup language.

### Section 2 - Before Continuing

This specification is about the 6<sup>th</sup> version of HТML (HyperTurtle Markup Language), not HTML (HyperText Markup Language) which is now a [living standard](http://html5doctor.com/html5-living-standard/) - meaning there will be no HTML6.

The main difference between the two is that HТML is Turtle-Oriented. You can read more about the Turtle-Oriented concept on this page: [Why Turtles Are Awesome](http://pinterest.com/ameliamcquiston/turtles-are-awesome/). (Or view the summary [here](http://cdn.attackofthecute.com/September-01-2011-22-24-51-piccwk6ga282138914530371.jpeg).)

Although the pronunciation is similar, HТML uses a Cyrillic &lsquo;Т&rsquo; to avoid any possible confusion with HTML. The correct way of pronouncing HТML is with a Russian accent on the Т. However, due to complaints about some people &ldquo;not being Russian enough&rdquo; to manage this, &ldquo;H Cyrillic-T M L&rdquo; is considered acceptable.

Now, without further ado, let me introduce you to  HTML6:

### Section 3 - The Concept

The central idea behind  HTML6 is namespaces. In  HTML6, we move HTML out of the way by putting it under its own `html` namespace, allowing you to stop worrying about the *nitty-gritty* details of semantics, and focus on creating content. In other words, you literally just make it up as you go along. You don't even need to know HTML!

So, what does it look like? Prepare yourself to be blown away, and check out the source code of this page! (Please note that it may not work in all browsers, in which case it will fall back to legacy HTML.)<noscript> &mdash; <strong>You need to enable JavaScript.</strong></noscript>

To give you an idea of the power of  HTML6, though, let's look at the `<sup>` tag. I don't like the way `<sup>` is used for superscript text, and think it would be far cooler to use it to markup greetings (&ldquo;Sup John, how are you today?&rdquo;). With  HTML6, the W3C's superscript tag has been moved to `<html:sup>`, allowing us to easily define our own:

```html
<style>
  sup:before { content: "Hello, "; }
  sup:after { content: "!"; }
</style>
<sup>World</sup>
```
Hello, World!

### Section 4 - Turtles

I've just realized that this page is sorely missing something &mdash; bullet points! We're more than half way through the document and we haven't used a single bullet point. So, for the sake of spacing things out a bit, here's a list of some of the best types of turtles (in descending order of awesomeness):

  *  Red Eared Slide
  *  Eastern Box Turtle
  *  Three-Toed Box Turtle
  *  Painted Turtle
  *  Russian Tortoise

Anyway, carrying on:

### Section 5 - Tag Content

In legacy HTML, there is a lot of discrepancy in the way tags are handled. Some tags are double (e.g. `<script></script>`), and some are single (e.g. `<link>`). Although these choices seem somewhat logical at first, it soon becomes apparent that this is merely apophenia. The tags to be single were, in actual fact, pulled out of a hat randomly by professional, but drunk, bigwigs. In  HTML6, a much simpler, and more logical, scheme is used: Single tags are self-closed by adding ` /` at the end (e.g. `<link />`), and any tag not self-closed will be interpreted as a double tag.

Another difference between  HTML6 and HTML5 are content types. In HTML5, the content type was determined by the tag's name (`<img>`/`<script>`/`<video>`/&c.), or the tag's `type` attribute. In  HTML6, specifying a content type is redundant as the browser can work it out using wizardry.

### Section 6 - Conclusion

If there's anything that you take away with you today, let it be this: Turtles are fricken' awesome. Also, there will never be a HTML6 :(

If you think you can make this document more awesome, [pull requests](https://github.com/jb/HTML6/pulls) are welcome. If you'd like to make suggestions, discuss turtles, or recommend a psychiatrist, head over to the [issue tracker](https://github.com/jb/HTML6/issues).

#### Legal Text:

Written by **[Zaz Brown](http://www.hyperturtle.digital)**. Inspired by [Oscar Godson](http://whothefuckisoscargodson.com)'s <a href="http://html6spec.com" rel="nofollow">html6spec.com</a>. My apologies, Oscar.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &ldquo;Software&rdquo;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
