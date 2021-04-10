---
title: Climbing Blog Migration
date: 2020-11-25
image: 'uploads/image.png'
tags: ["personal",'blog', 'CMS', 'SSG', 'eleventy', 'python', 'Netlify', 'climbing']
---

I recall beginning my web development journey sometime in 2017. At the time, I was working towards obtaining my masters in water resource engineering at UCLA. While I used Fortran 77 (yup, Fortran) VBA, R, and Matlab for engineering projects, I was always intrigued by front end web development. One of the first projects I envisioned was a personal blog. My brother and I have co-authored a climbing blog for around a decade now, and while it sees very little traffic, it is still dear to me.

The blog was originally created using blogger, Google's blogging platform. Over the years, the blogger platform had fallen by the wayside despite the resurgence in blogging.

## Data Migration

The first step for this project is one that I find very familiar now, as it is often the way my projects begin. The dreaded data migration 😱. Thankfully, blogger being a Google platform, offered an easy to use API (though I took the opportunity to practice my scraping skills first - perhaps a different write-up). I consumed the API using python, the code sample can be found below:

```python
import os
import re
import requests
import html2text

# Blog ID
blogId = 'your-blog-id'
# Authentication Key
key = 'your-api-key'
# Start url for API
start_url = f'https://www.googleapis.com/blogger/v3/blogs/{blogId}/posts?key={key}'
# save location
file_path = os.path.dirname(os.path.realpath(__file__))
# html to markdown parser
parser = html2text.HTML2Text()

# create the post getter function
def getPosts(url):
    # make API request
    r = requests.get(url)
    # put JSON response into python dictionary
    r_dict = r.json()
    # write to file
    for item in r_dict['items']:
        file_name = re.sub(r'\W*', '', str(item.get('title')))
        htmlDate = re.sub(r'T.*', '', str(item.get('published')))
        folder_path = f'{file_path}/posts/{htmlDate}-{file_name}'
        # convert html to markdown text
        text = parser.handle(item.get('content'))
        # omitted about 100 lines of formatting regex for clarity ...
        # get all uploads, and set first as feature image
        try:
            uploads = re.findall(
                r'[\w%-]+\.(?:jpg|jpeg|png|gif|tif|heic|mov)', text, flags=re.I | re.X | re.M)
            thumbnail = uploads[0]
        except:
            thumbnail = './images/default.jpg'
        # get location, if available
        try:
            location = item.get('location')['name']
        except:
            location = ''
        # write to markdown file
        with open(f'{folder_path}/index.md', 'w') as f:
            # add front matter
            f.write('---\n')
            f.write('title: ' + repr(item.get('title')) + '\n')
            f.write('date: ' + repr(item.get('published')) + '\n')
            f.write('updated: ' + repr(item.get('updated')) + '\n')
            f.write('thumbnail: ' + repr(thumbnail) + '\n')
            f.write('uploads: ' + repr(uploads) + '\n')
            f.write('author: ' + repr(item.get('author')) + '\n')
            f.write('id: ' + item.get('id') + '\n')
            f.write('location: ' + repr(location) + '\n')
            f.write('tags: ' + repr(item.get('labels')) + '\n')
            f.write('---\n')
            # add post body
            f.writelines(text)
    # get next page token
    pageToken = r_dict['nextPageToken']
    next_page = f'{start_url}&pageToken={pageToken}'
    try:
        getPosts(next_page)
    except:
        print('✅ All done writing posts!')

getPosts(start_url)
```

## File Architecture

The above python script created folders inside my post directory named with a 'YYYY-MM-DD-slug' format and an index.md file inside it with the markup. Creating index.html files within the folders will yield cleaner URIs. Perhaps I should relocate the blogs to year directories, but for now this will work. A truncated file directory tree can be seen below:

```shell
├── config.yml
├── data
│   ├── comments.json
│   ├── logbook.json
│   └── metadata.json
├── images
│   ├── BioPic.jpg
│   ├── BioPic1.jpg
│   ├── BioPic2.jpg
│   ├── BioPic3.jpg
│   ├── defs.svg
│   ├── eden.png
│   ├── icons
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   ├── icon-512x512.png
│   │   ├── icon-72x72.png
│   │   └── icon-96x96.png
│   ├── itai.jpg
│   └── logo.svg
├── includes
│   ├── components
│   │   ├── featuredPost.njk
│   │   ├── head.njk
│   │   ├── linkPreview.njk
│   │   ├── listItem.njk
│   │   ├── pageNav.njk
│   │   ├── postCard.njk
│   │   ├── postNav.njk
│   │   └── topNav.njk
│   ├── layouts
│   │   ├── base.njk
│   │   ├── page.njk
│   │   └── post.njk
│   ├── scripts
│   │   ├── chart.js
│   │   ├── main.js
│   │   └── observer.js
│   └── styles
│       ├── contact.css
│       ├── logbook.css
│       ├── main.css
│       ├── mobile.css
│       ├── normalize.css
│       ├── post.css
│       └── taglist.css
├── manifest.json
├── pages
│   ├── 404.njk
│   ├── about.njk
│   ├── admin.njk
│   ├── contact.njk
│   ├── feed.njk
│   ├── index.njk
│   ├── logbook.njk
│   ├── pages.json
│   ├── pagination.njk
│   ├── posts.njk
│   ├── sitemap.njk
│   ├── tag-list.njk
│   └── tags.njk
├── posts
│   ├── 2007-08-21-tramway-night-session
│   │   ├── index.md
│   │   └── uploads
│   │       ├── IMG_3355.JPG
│   │       ├── IMG_3360.JPG
│   │       ├── IMG_3362.JPG
│   │       ├── IMG_3363.JPG
│   │       ├── IMG_3364.JPG
│   │       ├── IMG_3382.JPG
│   │       └── IMG_3383.JPG
...  ...
│   ├── 2020-11-14-the-rock-shop
│   │   ├── index.md
│   │   └── uploads
│   │       ├── img_1626.jpg
│   │       └── img_1634.jpg
│   └── posts.json
└── sw.js
```

## Static Site Generator

There is no shortage of static site generators (SSGs) out in the world. As a result, finding the correct one for your project is a bit overwhelming. For this project, I decided to try out [11ty](https://www.11ty.dev/), having heard only good things about it. I have to say, it's really frictionless to use. It is zero configuration by default but scales up nicely. The build times on this particular project are a bit slow, but I suspect they would be with any SSG seeing as the blog has hundreds of posts to process and roughly 1000 images.

## Image Optimization

Image optimization has always been a bigger headache than it should be. Ultimately, I went with [Git LFS](https://git-lfs.github.com/) and [Netlify's Large Media](https://docs.netlify.com/large-media/overview/) and image transforms. It took me a couple tries to get LFS working properly and I still have missing images on the site that were not properly processed. That being said, 99% are and my repo is much smaller, my build times much faster, and ultimately the images are properly sized. In order to dynamically add my transform request query parameter to the posts, I use a markdown plugin called [replace-link](https://github.com/martinheidegger/markdown-it-replace-link) to access the image source attribute at build time and append my desired parameter. I also tacked on two additional markdown-it plugins for [native lazy loading attribute](https://github.com/ruanyf/markdown-it-image-lazy-loading) and [implicit figures](https://github.com/arve0/markdown-it-implicit-figures). Below is snippet from my `.eleventy.js` config file:

```js
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
    replaceLink: (link, env) => {
        return link + "?nf_resize=fit&w=1200";
    }
  })
    .use(lazy_loading)
    .use(implicitFigures, {
      figcaption: true
    })
    .use(replaceLink)
```

## Conclusion

While the site is still a bit of work in progress, I am really proud of the end result. There is something so incredibly satisfying about achieving a long term goal. You can view the live site at [axelradclimbing.com](https://www.axelradclimbing.com).

On to the next!
